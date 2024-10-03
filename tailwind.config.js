/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: { 
      colors: {
        'colorgreen': 'hsl(75, 94%, 57%)',
        'colorgray500': 'hsl(0, 0%, 80%)',
        'colorgray700': 'hsl(0, 0%, 20%)',
        'colorgray800': 'hsl(0, 0%, 12%)',
        'colorgray900': 'hsl(0, 0%, 8%)',
        'colorwhite': '#fff',
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

