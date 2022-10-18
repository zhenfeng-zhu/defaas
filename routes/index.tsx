import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>FaaS Based on Blockchain</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/nonce.png"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
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
      </div>
    </>
  );
}
