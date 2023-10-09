import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        primary: {
          acapulco: "#83B6A2",
          "gable-green": "#2A3D40",
        },
        secondary: "#86ED78",
        "background-color": "#EEEEEE",
        "accessible-grey": "#5B6F70",
        "light-grey": "#CECECE",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, //using this because tailwind is setting transparent color to buttons by default.
  },
};
export default config;
