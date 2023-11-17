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
          primary: "#02A85C",
          secondary: "#02A8A8",
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
        dark: {
          ...require("daisyui/src/theming/themes")["sunset"],
          primary: "#02A85C",
          secondary: "#02A8A8",
          accent: "#D7B93F",
          // neutral: "#222222",
          // "base-100": "#333",
          // info: "#1953BF",
          // success: "#106a3c",
          // warning: "#FF8F1F",
          error: "#FF3337",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
