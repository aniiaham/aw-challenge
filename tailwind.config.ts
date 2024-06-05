import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        "greyscale-3": "hsl(var(--greyscale-3))",
        "greyscale-6": "hsl(var(--greyscale-6))",
        "greyscale-7": "hsl(var(--greyscale-7))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-dmsans)", ...fontFamily.sans],
        mono: ["var(--font-dmmono)", ...fontFamily.mono],
        inter: ["inter", ...fontFamily.serif],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
