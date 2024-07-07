/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark-gray': '#181818',  //ffff //
        '#FFEBE7': '#FFEBE7',
        '#0C0500': '#0C0500',
        '#F4E1CF': '#F4E1CF',
        '#F26321' : '#F26321',
        '#FFEFCE' : '#FFEFCE',
        customTop: '#E75D46',
        customBottom: '#E17E20',
        customBlue: "#02215C"
      },
    },
  },
  plugins: [],
}