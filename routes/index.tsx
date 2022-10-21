import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { graphql } from "@/utils/shopify.ts";
import { tw } from "twind";

import { Footer } from "@/helpers/Footer.tsx";
import { Header } from "@/components/Header.tsx";
import { List, Product } from "../utils/types.ts";

export default function Home() {
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
      <Header />
      <div
        class="w-11/12 max-w-5xl mx-auto mt-28"
        aria-labelledby="information-heading"
      >
        <p class="my-10">
          Welcome to NonceGeek Deno Micro FaaS: FaaS Based on Blockchain
        </p>

        <li>transparent, open, and immutable on-chain functions</li>
        <p>
          All code snippets, functions, and modules are stored in the Arweave
          blockchain, and dynamically loaded into memory while the FaaS service
          is running. The functions are transparent, open, and immutable.
          Therefore, it is possible to share the uploaded functions among users
          through an open function market, thus making F (in FaaS) a Lego
          building block.
        </p>
        <br></br>
        <li>allow state storage</li>
        <p>
          Through the functions, users can store the state on each blockchain
          network, and read the state from it. The authentication is realized
          through the signature that follows the Ethereum standard, which breaks
          through the stateless limitation of the traditional FaaS system.
        </p>

        <br></br>

        <h3>Usage</h3>
        <script src="https://gist.github.com/zhenfeng-zhu/3581c289773ad8afcd9fe7ebdddeeb9f.js">
        </script>

        <br></br>
        <h3>Avaliable function list</h3>
        <br></br>

        <script src="https://gist.github.com/zhenfeng-zhu/51ceeefe042a23dc6c0f218ec415ff16.js">
        </script>

        <h2 id="information-heading" class="sr-only">
          Function List
        </h2>
        <div class="grid grid-cols-1 gap-8 sm:!gap-x-10 sm:!grid-cols-2 lg:!grid-cols-3 lg:!gap-x-12 lg:!gap-y-10">
          WIP
        </div>
      </div>
      <Footer />
    </>
  );
}
