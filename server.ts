import { serve } from "aleph/react-server";
import routes from "./routes/_export.ts";
import unocss from "./unocss.config.ts";
import cors from "https://deno.land/x/edge_cors@0.2.1/src/cors.ts";

serve({
  router: { routes },
  ssr: true,
  unocss,
  middlewares: [
    {
      name: "cors-middleware",
      async fetch(request, { next }) {
        // next() will invoke a respective route function 
        const response = await next();
        return cors(request, response);
      },
    },
  ],
});
