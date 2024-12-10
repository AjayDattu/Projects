/** @type {import('@/components/node_modules/tailwindcss/types').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        thin: ['CabinetGrotesk-Thin', 'sans-serif'],
        Regular: ['CabinetGrotesk-Regular', 'sans-serif'],  
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
