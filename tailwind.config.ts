import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   'color1' : '#006BFF',
    //   'color2' : '#FFF100',
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#006BFF",
        color2: "#FFF100",
        color3: {
          "1": "#6EC207",
          "2": "BF2EF0",
        },
      },
      spacing: {
        "5X": "5px",
        "15X": "15px",
        "25X": "25px",
        "10%": "10%",
        "30%": "30%",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "corporate"],
  },
};
export default config;
