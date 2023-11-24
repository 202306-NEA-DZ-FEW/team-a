import renderer from "react-test-renderer";

import MobileMenu from "../MobileMenu";

it("it renders correctly", () => {
  const mockT = jest.fn();
  const tree = renderer
    .create(<MobileMenu currentPath='/' user={{}} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
