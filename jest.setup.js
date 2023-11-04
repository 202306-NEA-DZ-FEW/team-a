import i18n from "i18n-testing";
import "@testing-library/jest-dom/extend-expect";

beforeAll(async () => {
  await i18n.init();
});

afterAll(() => {
  i18n.changeLanguage("en"); // Reset the language after all tests.
});

global.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});
