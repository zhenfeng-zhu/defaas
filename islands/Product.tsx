import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";
import { aspectRatio } from "twind/aspect-ratio";
import { FuncMeta } from "../utils/types.ts";

interface CounterProps {
  funcs: FuncMeta;
}

export default function ProductCard(props: CounterProps) {
  const max_number = 99999999;

  // Export a module to make it reusable
  Math.ceil(Math.random() * max_number);

  return (
    <a class={tw`group`}>
      <div
        class={tw`${
          aspectRatio(1, 1)
        } w-full bg-white rounded-xl overflow-hidden border-2 border-gray-200 transition-all duration-500 relative`}
      >
        <div
          class={tw`w-full h-full object-center object-contain absolute block`}
        >
          {props.funcs.content}
          
        </div>
      </div>
      <div class={tw`flex items-center justify-between mt-3`}>
        <hgroup>
          <h2 class={tw`text-lg text-gray-800 font-medium relative`}>
            {props.funcs.filename}
          </h2>
          <h3 class={tw`text-gray-500 text-base leading-tight`}>
            {"Function Desc"}
          </h3>
        </hgroup>
      </div>
    </a>
  );
}
