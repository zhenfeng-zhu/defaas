import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Response => {
  const prefix = "data:text/typescript,";
  const s = `
import axiod from "https://deno.land/x/axiod/mod.ts";


const { data } = await axiod<{ delay: string }>(
  "https://postman-echo.com/delay/2"
);

export function handler(a: int, b: int) {
    console.log(data);
    return a+b;
}
`;

  console.log(s);

  const { handler } = await import(`${prefix}${s}`);
  console.log(handler);

  console.log(handler(1, 1));

  return Response.json({ "a": handler(1, 2) });
};
