import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter() {
  const { ethereum } = window;

  const [count, setCount] = useState(1);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button
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
      </Button>
    </div>
  );
}
