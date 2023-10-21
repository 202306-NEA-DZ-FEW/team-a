import renderer from "react-test-renderer";

import SignUpForm from "..";

it("renders correctly", () => {
  const t = jest.fn();
  const mockStates = [{ stateKey: "1", name: "adrar" }];
  const tree = renderer
    .create(<SignUpForm states={mockStates} t={t} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
