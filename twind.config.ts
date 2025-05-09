import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

export default {
  ...defineConfig({
    presets: [presetAutoprefix(), presetTailwind()],
    theme: {
      extend: {
        fontFamily: {
          pixel: ["Pixelify Sans", "sans-serif"],
        },
        colors: {
          electric: "#00F5FF",
          neonPurple: "#9D00FF",
          hotPink: "#FF00F5",
        },
        boxShadow: {
          neon:
            "0 0 10px theme('colors.electric'), 0 0 20px theme('colors.neonPurple')",
        },
      },
    },
  }),
  selfURL: import.meta.url,
};
