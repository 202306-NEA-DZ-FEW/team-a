import "@testing-library/jest-dom/extend-expect";
import i18n from "i18n-testing";

beforeAll(async () => {
  await i18n.init();
});

afterAll(() => {
  i18n.changeLanguage("en"); // Reset the language after all tests.
});
