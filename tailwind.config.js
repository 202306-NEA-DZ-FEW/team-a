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
        futura: "futura",
        futuraBlack: "futura-black",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27582D",

          secondary: "#6658F8",

          accent: "#FFB541",

          neutral: "#102813",

          "base-100": "#F4F1EB",

          info: "#93c5fd",

          success: "#059669",

          warning: "#dc2626",

          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
