// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_404.tsx";
import * as $2 from "./routes/docs/[...slug].tsx";
import * as $3 from "./routes/gfm.css.ts";
import * as $4 from "./routes/index.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/docs/[...slug].tsx": $2,
    "./routes/gfm.css.ts": $3,
    "./routes/index.tsx": $4,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
