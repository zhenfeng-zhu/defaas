// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/api/load.ts";
import * as $3 from "./routes/api/sum.ts";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/login.tsx";
import * as $$0 from "./islands/Cart.tsx";
import * as $$1 from "./islands/Code.tsx";
import * as $$2 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/api/load.ts": $2,
    "./routes/api/sum.ts": $3,
    "./routes/index.tsx": $4,
    "./routes/login.tsx": $5,
  },
  islands: {
    "./islands/Cart.tsx": $$0,
    "./islands/Code.tsx": $$1,
    "./islands/Counter.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;