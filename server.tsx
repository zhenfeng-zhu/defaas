import { serve } from "https://deno.land/std@0.159.0/http/server.ts";
import { createRouter, createServer } from "ultra/server.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./src/app.tsx";
import theme from "./theme.ts";
import { emotionTransformStream } from "./server/emotion.ts";
import { importString } from "import";

const server = await createServer({
  importMapPath: Deno.env.get("ULTRA_MODE") === "development"
    ? import.meta.resolve("./importMap.dev.json")
    : import.meta.resolve("./importMap.json"),
  browserEntrypoint: import.meta.resolve("./client.tsx"),
});

/**
 * Create our API router
 */
const api = createRouter();

/**
 * An example API route
 */
api.get("/posts", (context) => {
  return context.json([{
    id: 1,
    title: "Test Post",
  }]);
});

api.post("/load", async (context) => {
  const s = `
  import axiod from "https://deno.land/x/axiod/mod.ts";
  
  
  export function handler(a: int, b: int) {
      console.log(a, b);
      return a+b;
  }
  `;

  console.log(s);

  const mod = await importString(`${s}`);
  return context.json([{
    id: 1,
    title: "Test Post",
    data: mod.handler(1, 11),
  }]);
});

/**
 * Mount the API router to /api
 */
server.route("/api", api);

server.get("*", async (context) => {
  /**
   * Render the request
   */
  const result = await server.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    {
      generateStaticHTML: true,
    },
  );

  const transformed = emotionTransformStream(result);

  return context.body(transformed, 200, {
    "content-type": "text/html",
  });
});

serve(server.fetch);
