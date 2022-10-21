import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Cart() {
  const { ethereum } = window;

  const [count, setCount] = useState("login");
  return (
    <div class="flex justify-between">
      <button
        type="button"
        class="w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700"
        onClick={async () => {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const account = accounts[0];
          console.log(account);
          setCount(account);
        }}
      >
        {count}
      </button>
    </div>
  );
}
