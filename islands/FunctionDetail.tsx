import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";
import { aspectRatio } from "twind/aspect-ratio";

interface CounterProps {
  start: string;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div
      class={tw`w-11/12 max-w-5xl mx-auto mt-8 lg:grid lg:grid-cols-2 lg:gap-x-16`}
    >
      <div>
        <div
          class={tw`flex flex-col gap-4`}
        >
          <div class={tw`w-full flex items-center justify-between gap-4`}>
            <hgroup>
              <h2 class={`text-xl lg:!text-2xl font-semibold text-gray-800`}>
                {"Function Name"}
              </h2>
              <h3 class={tw`text-gray-500 text-base leading-tight`}>
                {"Function Desc"}
              </h3>
            </hgroup>
            <div
              class={tw`bg-[#E8E7E5] rounded-full px-6 py-2 text-lg text-gray-900 font-bold`}
            >
              {"Public"}
            </div>
          </div>
        </div>
        <section
          aria-labelledby="information-heading"
          class={tw`mt-12 pt-6 border-t-1 border-gray-200`}
        >
        </section>

        <div
          class={tw` w-full bg-white rounded-xl border-2 border-gray-200 mt-12 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-start`}
        >
          <div class={tw`mt-4 space-y-6`}>
            This is code for {props.start} <br />
            - impor a from 0x01; <br />
            - console.log(123)
          </div>
        </div>
      </div>

      <div
        class={tw` w-full bg-white rounded-xl border-2 border-gray-200 mt-12 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-start`}
      >
        <input
          class={`w-full bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-100`}
        />
        <button
          onClick={() => {
            console.log("add...");
          }}
          class={`mt-5 w-full bg-gray-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900`}
        >
          {"Test Button"}
        </button>
        <div class={tw`mt-4 space-y-6`}>
          This is test code for {props.start}
        </div>
      </div>
    </div>
  );
}
