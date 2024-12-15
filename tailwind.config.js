/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}","./index.html"],
  theme: {
    container:{
      center:true,
    },
    screens: {
      'sm': '300px',
      // => @media (min-width: 440px) { ... }

      'md': '728px',
      // => @media (min-width: 768px) { ... }

      'lg': '1084px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1220px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1486px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75')",
      }
    },
  },
  plugins: [
    require('daisyui'),
   
  ],
}

