import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  console.log(_req.method);
  if (_req.method != "POST") {
    return Response.json({ "error": "only support post" });
  }

  const payload = await _req.json();
  console.log(payload);

  const prefix = "data:text/typescript,";
  const s = `
import axiod from "https://deno.land/x/axiod/mod.ts";


export function handler(a: int, b: int) {
    console.log(a, b);
    return a+b;
}
`;

  console.log(s);

  const mod = await import(`${prefix}${s}`);
  const params = payload.params;

  return Response.json({ "a": mod.handler(...params) });
};
