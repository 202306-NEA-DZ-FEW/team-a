import renderer from "react-test-renderer";

import SignInForm from "..";

it("renders correctly", () => {
  const mockT = jest.fn();
  const tree = renderer.create(<SignInForm t={mockT} />).toJSON();
  expect(tree).toMatchSnapshot();
});
