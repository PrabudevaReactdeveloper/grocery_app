/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}", "./Constant/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        'PoppinsBlack': "Poppins-Black",
        'PoppinsSemiBold': "Poppins-SemiBold",
        'PoppinsLight': "Poppins-Light",
        'PoppinsMedium': "Poppins-Medium",
      },
    },
  },
  plugins: [],
}

