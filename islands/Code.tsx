import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter() {
  const { ethereum } = window;

  const [count, setCount] = useState(1);
  return (
    <div>
      <p>{count}</p>
      <button
        class="mt-7 flex flex items-center rounded-md h-8 py-2 px-4 bg-gray-800 font-medium text-sm text-white"
        onClick={async () => {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0];
          console.log(account);
          setCount(account);
        }}
      >
        eth
      </button>
    </div>
  );
}