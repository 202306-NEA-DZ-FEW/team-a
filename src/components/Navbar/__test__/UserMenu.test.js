import renderer from "react-test-renderer";

import UserMenu from "../UserMenu";

it("it renders correctly", () => {
  const mockT = jest.fn();
  const mockLogOut = jest.fn();
  const tree = renderer
    .create(<UserMenu logOut={mockLogOut} user={{}} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
