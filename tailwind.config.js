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
        myTheme: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#02A85C",
          secondary: "#A8FFAE",
          accent: "#D7B93F",
          neutral: "#222222",
          "base-100": "#FFF",
          // "base-300": "#F1FFF2",
          info: "#1953BF",
          success: "#106a3c",
          warning: "#FF8F1F",
          error: "#FF3337",
        },
      },
      {
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          ".fill-current": {
            color: "#fff",
          },
          ".text-current": {
            color: "#fff",
          },
          primary: "#02A85C",
          secondary: "#A8FFAE",
          accent: "#D7B93F",
          error: "#FF3337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
