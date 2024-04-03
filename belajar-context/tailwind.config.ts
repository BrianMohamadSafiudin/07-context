import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  plugins: [],
};

export default config;
