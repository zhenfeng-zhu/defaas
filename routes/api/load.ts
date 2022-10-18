import { HandlerContext } from "$fresh/server.ts";
import axiod from "axiod"

const PREFIX = "data:text/typescript,";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => { 
    const result = await axiod.get("https://api.github.com/gists/51ceeefe042a23dc6c0f218ec415ff16")
    const files = result.data.files;
    console.log(Object.keys(files)[0])
    const key = Object.keys(files)[0]
    const content = files[key].content
    const sum = await import(`${PREFIX}${content}`)
    const data = await sum.handler(1, 3)
    return Response.json({...result.data.files, data})
}