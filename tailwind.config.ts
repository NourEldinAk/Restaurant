import type { Config } from "tailwindcss";

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
      colors: {
        primary: "#f3d7af",
        secondary: "#08072C",
        black: {
          100: "#292824",
          75: "#0e1927",
          50: "#9B9599",
          25: "#CDCACC",
          10: "#EBEAEB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
