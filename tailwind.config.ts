import type { Config } from "tailwindcss";
const {KadawaFont} = require

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backGroundDark: "#151219",
        backgrounfLight: "#f8f7fc",
        inputLightBG: "#EDECF6",
        purpleLight:"#9E6CEE",
        purpleBtn: "#8952E0",
        darkPurpleBtn: "#6D28D9",
        darkLine: "#261F30",
        greySecondaryBtn: "#EFEFF3",
        greyPurple: "#EDECF6",
        skeletonGrey:"#dddce8",
        textBlack: "#2F2F31",
        textGrey: "#64748B"
      },
    },
    fontFamily:{
      inter: ['var(--font-inter)']
    }
  },
  plugins: [],
} satisfies Config;
