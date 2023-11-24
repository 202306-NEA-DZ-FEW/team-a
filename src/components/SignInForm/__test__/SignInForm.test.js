import renderer from "react-test-renderer";

import SignInForm from "..";

jest.mock("@/lib/firebase", () => {
  return {
    app: {}, // Mock app object
    db: {}, // Mock db object
    storage: {}, // Mock storage object
    auth: {}, // Mock auth object
  };
});

it("renders correctly", () => {
  const mockT = jest.fn();
  const tree = renderer.create(<SignInForm t={mockT} />).toJSON();
  expect(tree).toMatchSnapshot();
});
