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
        brand: {
          brown: '#654321',      // Marrón principal de botones y acentos
          dark: '#3D2516',       // Marrón oscuro del footer y encabezados
          light: '#F5EFE6',      // Fondo crema cálido para cards y banners
          cream: '#FAF7F2',      // Fondo general del sitio
          accent: '#8B5A2B',     // Marrón cobrizo/dorado cálido
        }
      }
    },
  },
  plugins: [],
};
export default config;