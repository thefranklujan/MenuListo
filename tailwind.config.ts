import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E85D04',
          dark: '#D45203',
          light: '#F48C06',
          50: '#FFF7ED',
          100: '#FFEDD5',
          500: '#E85D04',
          600: '#D45203',
          700: '#C2410C',
        },
        surface: {
          DEFAULT: '#FAFAF9',
          dark: '#1C1917',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
