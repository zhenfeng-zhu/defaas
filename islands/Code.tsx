import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { ethers } from "https://cdn.skypack.dev/ethers";
import { contract } from "../utils/contracts.ts";

interface CounterProps {
  start: number;
}

interface FuncMeta {
  filename: string;
  language: string;
  copyright: string;
  content: string;
  visiable: string;
}

const gistExample = {
  "filename": "sum.ts",
  "language": "TypeScript",
  "copyright": "",
  "content":
    'import axiod from "https://deno.land/x/axiod/mod.ts";\n\nexport async function handler(a: int, b: int) {\n    const { data } = await axiod<{ delay: string }>(\n      "https://postman-echo.com/delay/2"\n    );\n    console.log(data);\n    return a+b;\n}',
};

export default function Counter() {
  const { ethereum } = window;

  const [count, setCount] = useState(1);
  return (
    <div>
      <p>{count}</p>

      <button
        class="mt-7 flex flex items-center rounded-md h-8 py-2 px-4 bg-gray-800 font-medium text-sm text-white"
        onClick={async () => {
          const nfts = await contract.name();
          console.log(nfts);

          const owner = await contract.ownerOf(1);
          console.log(owner);

          const codes = await contract.faasCodes(
            "0x80062eE8E85fD91D82EdDdfa059f05b11863768E",
            0,
          );
          console.log(codes);
          setCount(codes);
        }}
      >
        Polygon
      </button>
    </div>
  );
}
