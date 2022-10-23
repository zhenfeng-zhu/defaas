import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { App } from "../components/App.tsx";
import { Jumbo } from "../components/Jumbo.tsx";
import { IconArrowRight } from "../components/Icons.tsx";
import { gfm } from "../utils/markdown.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";

export default function Home(ctx: PageProps<Data>) {
  const { data } = ctx;

  return (
    <App activeLink="/">
      <Head>
        <link rel="stylesheet" href={`/gfm.css?build=${__FRSH_BUILD_ID}`} />
      </Head>
      <div class="flex flex-col items-center">
        <Jumbo>DeFaaS</Jumbo>
        <p class="italic text-center text-2xl md:text-5xl font-bold leading-tight pb-7 md:pb-10">
          <span class="text-red-800">FaaS Based on Blockchain</span> toolkit
          <br />
          for <span class="text-red-800">Web3</span> developers
        </p>
        <div class="flex flex-row">
          <pre class="py-4 md:py-6 px-6 bg-gray-800 text-white rounded-l-lg">
            Try it!
          </pre>
          <a
            href="/docs"
            class="block bg-red-800 rounded-r-lg text-white p-4 md:p-6"
          >
            <IconArrowRight />
          </a>
        </div>

        <Functions funcs={data.funcs} />
        <p class="text-center pt-4 md:pt-8 pb-5 md:pb-10">
          <a
            href="/docs"
            class="text-l md:text-xl flex flex-row gap-4 bg-red-800 rounded text-white p-4 md:p-6"
          >
            <span>Read the documentation</span> <IconArrowRight />
          </a>
        </p>
      </div>
      <Features />
    </App>
  );
}

interface FuncMeta {
  filename: string;
  language: string;
  content: string;
  visiable: string;
  author: string;
}

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
      // headers: {
      //   "Authorization": "Bearer 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"
      // }
    });
    const files = result.data.files;

    for (let key of Object.keys(files)) {
      data.funcs.push({
        filename: files[key].filename,
        language: files[key].language,
        content: files[key].content,
        visiable: "public",
        author: "zhenfeng-zhu",
      });
    }

    return ctx.render(data);
  },
};

function Functions(props: Data) {
  const funcs = props.funcs;

  return funcs.map((item: FuncMeta, index: number) => {
    return (
      <div class="mt-10 md:mt-20 grid md:grid-cols-2 gap-2 md:gap-0">
        <div>
          <h2 class="pb-5 text-2xl md:text-4xl font-black">
            {index + 1}. {item.filename}
          </h2>
          <p class="md:mx-10 text-l md:text-xl">
            Specify entities to retrieve and their properties. Various data
            types, optional properties, arrays and language annotated literals
            are supported.
          </p>
        </div>
        <div class="pb-4">
          <Markdown markdown={"\n\n" + item.content + "\n\n"} />
        </div>
      </div>
    );
  });
}

function Markdown({ markdown }: { markdown: string }) {
  const preMarkdown = `\`\`\`ts${markdown}\`\`\``;
  const html = gfm.render(preMarkdown);
  return (
    <div
      class="markdown-body max-w-[90vw]"
      data-color-mode="auto"
      data-light-theme="light"
      data-dark-theme="dark"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Features() {
  return (
    <div class="grid md:grid-cols-4 gap-4 pb-20">
      <div class="p-2">
        <h2 class="text-xl font-black">Next-gen serverless</h2>
        {/* <p>Query RDF data from any source effortlessly.</p> */}
      </div>
      <div class="p-2">
        <h2 class="text-xl font-black">First class TypeScript</h2>
        {/* <p>Best in class developer experience. Fully typed workflow.</p> */}
      </div>
      <div class="p-2">
        <h2 class="text-xl font-black">Deploy anywhere</h2>
        {/* <p>LDkit runs in browser, Deno and Node.</p> */}
      </div>
      <div class="p-2">
        <h2 class="text-xl font-black">On-chain functions</h2>
        {/* <p>Compatible or built upon all the popular RDF/JS libraries</p> */}
      </div>
    </div>
  );
}
