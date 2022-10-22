import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";
import { aspectRatio } from "twind/aspect-ratio";

interface CounterProps {
  start: number;
}

export default function ProductCard(props: CounterProps) {
  const max_number = 99999999;

  // Export a module to make it reusable
  Math.ceil(Math.random() * max_number);

  const [count, setCount] = useState(props.start);
  return (
    <a class={tw`group`}>
      <div
        class={tw`${
          aspectRatio(1, 1)
        } w-full bg-white rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 relative`}
      >
        <img
          src={`https://avatars1.githubusercontent.com/u/${
            Math.ceil(Math.random() * max_number)
          }`}
          width={500}
          height={500}
          class={tw`w-full h-full object-center object-contain absolute block`}
        />
      </div>
      <div class={tw`flex items-center justify-between mt-3`}>
        <h3 class={tw`text-lg text-gray-800 font-medium relative`}>
          NonceGeek
          <span
            class={tw`bg-gray-800 h-[3px] w-0 group-hover:!w-full absolute bottom-[-2px] left-0 transition-all duration-400`}
          />
        </h3>
        <strong class={tw`text-lg font-bold text-gray-800`}>
          $10
        </strong>
      </div>
    </a>
  );
}
