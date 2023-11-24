// i18n-testing.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Initialize react-i18next.
  .init({
    lng: "en", // Set a default language for testing.
    fallbackLng: "en", // Fallback language if a translation is missing.
    debug: false, // Disable debug mode in testing.
    interpolation: {
      escapeValue: false, // React already escapes by default.
    },
  });

export default i18n;
