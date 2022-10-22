import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { ethers } from "https://cdn.skypack.dev/ethers";

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
  let infuraID =
    "https://polygon-mumbai.infura.io/v3/4e9d670bd94f4639959397c3cc2fb246";
  // let infuraID = "https://goerli.infura.io/v3/4e9d670bd94f4639959397c3cc2fb246"

  const provider = new ethers.providers.JsonRpcProvider(
    infuraID,
  );

  const [count, setCount] = useState(1);
  return (
    <div>
      <p>{count}</p>

      <button
        class="mt-7 flex flex items-center rounded-md h-8 py-2 px-4 bg-gray-800 font-medium text-sm text-white"
        onClick={async () => {
          const your_contract = {
            "address": "0x99aC0BB035245db69087bB3C4cb08fd5455d9d19",
            "abi": [
              {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor",
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address",
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address",
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "Approval",
                "type": "event",
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address",
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address",
                  },
                  {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool",
                  },
                ],
                "name": "ApprovalForAll",
                "type": "event",
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address",
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "metadata",
                    "type": "string",
                  },
                ],
                "name": "MintWithMeta",
                "type": "event",
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address",
                  },
                  {
                    "indexed": false,
                    "internalType": "string",
                    "name": "purpose",
                    "type": "string",
                  },
                ],
                "name": "SetPurpose",
                "type": "event",
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address",
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "Transfer",
                "type": "event",
              },
              {
                "stateMutability": "payable",
                "type": "fallback",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address",
                  },
                ],
                "name": "balanceOf",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256",
                  },
                ],
                "name": "faasCodes",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [],
                "name": "getAllTokens",
                "outputs": [
                  {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]",
                  },
                ],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "getApproved",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address",
                  },
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address",
                  },
                ],
                "name": "isApprovedForAll",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "metadata",
                    "type": "string",
                  },
                ],
                "name": "mintWithMeta",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [],
                "name": "name",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "ownerOf",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256",
                  },
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256",
                  },
                ],
                "name": "publicCodes",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [],
                "name": "purpose",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address",
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address",
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes",
                  },
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address",
                  },
                  {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool",
                  },
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "newPurpose",
                    "type": "string",
                  },
                ],
                "name": "setPurpose",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4",
                  },
                ],
                "name": "supportsInterface",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256",
                  },
                ],
                "name": "tokenIds",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "tokenURI",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string",
                  },
                ],
                "stateMutability": "view",
                "type": "function",
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address",
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256",
                  },
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function",
              },
              {
                "stateMutability": "payable",
                "type": "receive",
              },
            ],
          };
          const contract = new ethers.Contract(
            your_contract.address,
            your_contract.abi,
            provider,
          );
          const nfts = await contract.name();
          console.log(nfts);

          const owner = await contract.ownerOf(1);
          console.log(owner);

          const codes = await contract.faasCodes(
            "0x80062eE8E85fD91D82EdDdfa059f05b11863768E",
            0,
          );
          console.log(codes);
        }}
      >
        Polygon
      </button>
    </div>
  );
}
