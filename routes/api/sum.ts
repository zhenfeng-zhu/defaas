import { importString } from "import";

export const GET = async (_req: Request) => {
  console.log(_req.method);

  const prefix = "data:text/typescript,";
  const s = `
  import axiod from "https://deno.land/x/axiod/mod.ts";
  export function handler(a: int, b: int) {
      console.log(a, b);
      return a+b;
  }
  `;

  console.log(s);

  const mod = await importString(`${s}`);

  return Response.json({ "a": mod.handler(1, 10) });
};
