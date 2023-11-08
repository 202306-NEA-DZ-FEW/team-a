/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "plus.unsplash.com",
      "lh3.googleusercontent.com",
      "img.freepik.com",
    ],
  },
};
