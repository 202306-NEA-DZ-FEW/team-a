const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "ar", "tr"],
    localePath: path.resolve("./public/locales"),
  },
};
