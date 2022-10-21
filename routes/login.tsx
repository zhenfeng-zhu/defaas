import { PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import Code from "../islands/Code.tsx";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "@/helpers/Footer.tsx";

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
      <div class="flex justify-center items-center h-screen text-gray-600">
        <Code />
      </div>
      <Footer />
    </>
  );
}
