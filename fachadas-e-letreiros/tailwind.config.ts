import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        projettar: {
          red: '#C52329',
          darkRed: '#9F1218', 
          black: '#0F0A0A',   
          grey: '#525252',
          light: '#F8F9FA', // Cinza muito suave para contraste
        }
      },
      backgroundImage: {
        'gradient-red': 'linear-gradient(to right, #C52329, #9F1218)',
        // Textura sutil para fundos
        'tech-grid': 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'tech-grid': '40px 40px',
      }
    },
  },
  plugins: [],
};
export default config;