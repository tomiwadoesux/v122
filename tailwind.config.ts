import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        coda: ["Coda", "sans-serif"],
        tusker: ["Tusker Grotesk", "sans-serif"], // Add Tusker too if needed
      },
    },
  },
  plugins: [],
} satisfies Config;
