import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-dmsans)", ...fontFamily.sans],
        mono: ["var(--font-dmmono)", ...fontFamily.mono],
        inter: ["inter", ...fontFamily.serif],
      },
      colors: {
        "light-teal-main": "hsl(var(--light-teal-main))",
        "light-teal-0": "hsl(var(--light-teal-0))",
        "light-teal-1": "hsl(var(--light-teal-1))",
        "light-teal-3": "hsl(var(--light-teal-3))",
        "light-teal-4": "hsl(var(--light-teal-4))",
        "light-teal-5": "hsl(var(--light-teal-5))",

        "dark-teal-main": "hsl(var(--dark-teal-main))",
        "dark-teal-0": "hsl(var(--dark-teal-0))",
        "dark-teal-1": "hsl(var(--dark-teal-1))",
        "dark-teal-2": "hsl(var(--dark-teal-2))",
        "dark-teal-3": "hsl(var(--dark-teal-3))",
        "dark-teal-4": "hsl(var(--dark-teal-4))",

        "greyscale-white": "hsl(var(--greyscale-white))",
        "greyscale-black": "hsl(var(--greyscale-black))",
        "greyscale-0": "hsl(var(--greyscale-0))",
        "greyscale-1": "hsl(var(--greyscale-1))",
        "greyscale-2": "hsl(var(--greyscale-2))",
      },
    },
  },
  plugins: [],
};
export default config;
