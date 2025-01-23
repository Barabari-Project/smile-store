import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light : "#FFFFFF",
        bgGray : "#EFEFEF",
        primaryRed : "#ED1B24",
        primaryBlue : "#17A8D5",
        secondaryBlue : "#95D3EC",
        secondaryRed : "#FF5A62",
        ultravioletBlue : "#4B4E6D",
        lightBlue : "#E7F8FF",
        cherryBlossomRed : "#F3A9B1",
        mimiRed : "#EDD1D8",
      },
      fontFamily : {
        poppins : ["Poppins", "sans-serif"],
      },
      container : {
        center : true,
        padding : {
          DEFAULT : "0.2rem",
          sm : "0.5rem",
          lg : "1rem",
          xl : "2rem",
          "2xl" : "3rem"
        }
      },
      animation: {
        pulseCustom: 'pulseCustom 1.5s infinite',
      },
      keyframes: {
        pulseCustom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
