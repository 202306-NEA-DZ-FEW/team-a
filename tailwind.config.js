/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".fill-current": {
            color: "#031D1A",
          },
          ".text-current": {
            color: "#031D1A",
          },
          primary: "#0A6947",
          secondary: "#A8FFAE",
          accent: "#D7B93F",
          neutral: "#031D1A",
          "base-100": "#FFF",
          "base-200": "#F4F4F4",
          "base-300": "#F1FFF2",
          info: "#1953BF",
          success: "#106a3c",
          warning: "#FF8F1F",
          error: "#FF3337",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["sunset"],
          ".fill-current": {
            color: "#fff",
          },
          ".text-current": {
            color: "#fff",
          },
          "base-100": "#041613",
          "base-200": "#03100D",
          "base-300": "#02110F",
          primary: "#0A6947",
          neutral: "#031D1A",
          secondary: "#A8FFAE",
          accent: "#D7B93F",
          error: "#FF3337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
