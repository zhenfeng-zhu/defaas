import { PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import Product from "../islands/Product.tsx";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "@/helpers/Footer.tsx";
import { tw } from "twind";

export default function Greet(props: PageProps) {
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
          <Product start={1} />
          <Product start={1} />
          <Product start={1} />
          <Product start={1} />
          <Product start={1} />
          <Product start={1} />
          <Product start={1} />
        </div>
      </div>

      <Footer />
    </>
  );
}
