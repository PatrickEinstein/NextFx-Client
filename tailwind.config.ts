import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monoSans: ["DM Mono", "monospace"],
      },
      colors: {
        primary: "#142C44",
        secondary: "#FBBE36",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroImg:
          "linear-gradient(rgba(251, 190, 54, 0.9), rgba(251, 190, 54, 0.7)), url('/texture.png')",
      },
    },
  },
  plugins: [],
};
export default config;
