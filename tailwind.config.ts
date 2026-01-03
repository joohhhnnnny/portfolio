import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Pages Router
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // App Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}" // Components
  ],
  theme: {
    extend: {
      colors: {
        black: {
            DEFAULT: '#000',
            100: '#000319'
        }
      },
    },
  },
  plugins: [],
};

export default config;
