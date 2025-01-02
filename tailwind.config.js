/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    boxShadow: {

      
      
    },
   
    animation: {
      blink: "blink 1s linear infinite", // Set the animation duration to 1 second
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 0.5 },
        "50%": { opacity: 1 },
      },
    },
  
  },
 

  plugins: [],
}};
