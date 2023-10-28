import { useRouter } from "next/router";
import renderer from "react-test-renderer";

import AddItemForm from "..";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/lib/firebase", () => {
  return {
    app: {}, // Mock app object
    db: {}, // Mock db object
    storage: {}, // Mock storage object
    auth: {}, // Mock auth object
  };
});

it("renders correctly", () => {
  const mockCategories = [{ name: "name", stateKey: "stateKey" }];
  const mockStates = [{ name: "name", stateKey: "stateKey" }];
  const mockT = jest.fn();
  useRouter.mockImplementation(() => ({
    asPath: "/example-path",
  }));
  const tree = renderer
    .create(
      <AddItemForm
        categories={mockCategories}
        states={mockStates}
        initialLocale='en'
        t={mockT}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
