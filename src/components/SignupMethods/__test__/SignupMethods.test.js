import renderer from "react-test-renderer";

import SignupMethods from "..";

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

  const tree = renderer.create(<SignupMethods t={t} />).toJSON();
  expect(tree).toMatchSnapshot();
});
