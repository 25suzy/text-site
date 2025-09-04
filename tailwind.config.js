/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#f2f9ff",100:"#e6f3ff",200:"#bfdeff",300:"#99caff",400:"#66adff",
                 500:"#3a91ff",600:"#2478e6",700:"#185db3",800:"#114280",900:"#0a294d" }
      }
    }
  },
  plugins: []
};
