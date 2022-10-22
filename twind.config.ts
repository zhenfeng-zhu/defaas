import { Options } from "$fresh/plugins/twind.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { setup, ThemeConfiguration } from "twind";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      transparent: "transparent",
      red: colors.red,
    },
    extend: {
      spacing: {
        18: "4.5rem",
      },
    },
  },
} as Options;
