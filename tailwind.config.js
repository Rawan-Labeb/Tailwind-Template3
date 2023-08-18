/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {

    screens:{
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors:{
      SoftOrange: "hsl(35, 77%, 62%)",
      SoftRed: "hsl(5, 85%, 63%)",
      OffWhite: "hsl(36, 100%, 99%)", 
      GrayishBlue: "hsl(233, 8%, 79%)",
      DarkGrayishBlue: "hsl(236, 13%, 42%)",
      VeryDarkBlue: "hsl(240, 100%, 5%)"


    },

    fontFamily:{
      inter:['inter']
    },

    fontWeight:{
      regular:'400',
      bold:'700',
      extrabold:'800'
    },

    fontSize:{
      fontSize:"15px",
      textLg	:"18px",
      textXl:"20px",
      text2xl:"24px",
      text3xl:"30px",
      text4xl:"46px"
    },
    letterSpacing: {
      letterSpace:"0.3em"

    },
   
    extend: {},
  },
  plugins: [],
}

