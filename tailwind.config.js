module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
