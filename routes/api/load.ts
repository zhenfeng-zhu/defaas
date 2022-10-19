import { HandlerContext } from "$fresh/server.ts";
import axiod from "axiod";
import { importString } from "import";

const PREFIX = "data:text/typescript,";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  if (_req.method != "POST") {
    return Response.json({ "error": "only support post" });
  }

  const payload = await _req.json();
  let gist_id = "51ceeefe042a23dc6c0f218ec415ff16";
  if (payload.gist_id) {
    gist_id = payload.gist_id;
  }

  const result = await axiod.get(`https://api.github.com/gists/${gist_id}`);
  const files = result.data.files;

  const content = files[payload.func].content;
  const mod = await importString(`${content}`);
  const data = await mod.handler(...payload.params);
  return Response.json({ data });
};
