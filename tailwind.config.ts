import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { colors } from "./theme/color";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundColor: {
        ...colors,
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require("tailwindcss-animate")],
} satisfies Config;
