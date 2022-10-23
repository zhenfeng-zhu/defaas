import { Handlers, PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import Product from "../islands/Product.tsx";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "@/helpers/Footer.tsx";
import { tw } from "twind";
import { List } from "../utils/types.ts";
import { FuncMeta } from "../utils/types.ts";
import axiod from "axiod";

interface Data {
  funcs: Array<FuncMeta>;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const data: Data = {
      funcs: [],
    };

    const gist_id = "51ceeefe042a23dc6c0f218ec415ff16";
    const result = await axiod.get(`https://api.github.com/gists/${gist_id}`, {
      headers: {
        "Authorization": "Bearer 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"
      }

    });
    const files = result.data.files;

    for (let key of Object.keys(files)) {
      data.funcs.push({
        filename: files[key].filename,
        language: files[key].language,
        content: files[key].content,
        visiable: "public",
        author: "zhenfeng-zhu"
      });
    }

    console.log(files);
    return ctx.render(data);
  },
};

export default function Products(ctx: PageProps) {
  const { data } = ctx;
  const funcs = data.funcs;
  return (
    <>
      <Head>
        <title>FaaS Based on Blockchain</title>
      </Head>
      <img
        src="/background.png"
        alt="bg"
        class="absolute top-0 left-0 w-full min-h-screen -z-10 bg-gray-900 object-cover"
      />
      <div
        class={tw`w-11/12 max-w-5xl mx-auto mt-28`}
        aria-labelledby="information-heading"
      >
        <div class="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
          {funcs.map(
            (item: FuncMeta) => {
              return <Product funcs={item} />;
            },
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
