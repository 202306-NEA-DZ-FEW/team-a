import renderer from "react-test-renderer";

import SignUpForm from "..";

jest.mock("@/lib/firebase", () => {
  return {
    app: {}, // Mock app object
    db: {}, // Mock db object
    storage: {}, // Mock storage object
    auth: {}, // Mock auth object
  };
});

it("renders correctly", () => {
  const t = jest.fn();
  const mockStates = [{ stateKey: "1", name: "adrar" }];
  const tree = renderer
    .create(<SignUpForm states={mockStates} t={t} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
