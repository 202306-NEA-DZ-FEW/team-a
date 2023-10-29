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

test("AddItemForm snapshot test", () => {
  useRouter.mockImplementation(() => ({
    push: "/",
  }));
  const mockCategories = [
    { id: 0, name: "name", dataKey: "dataKey", imageURL: "image" },
  ];
  const mockStates = [{ name: "name", dataKey: "dataKey" }];
  const mockT = jest.fn();
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
