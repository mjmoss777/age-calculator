/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "purple-main":"hsl(259, 100%, 65%)",
        "light-red":"hsl(0, 100%, 67%)",
        "off-white":"hsl(0, 0%, 94%)",
        "light-grey":"hsl(0, 0%, 86%)",
        "smokey-grey":"hsl(0, 1%, 44%)",
      },
    },
  },
  plugins: [],
}