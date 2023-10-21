import renderer from "react-test-renderer";
import UserListItems from "..";

it("renders correctly", () => {
  const tree = renderer.create(<UserListItems />).toJSON();
  expect(tree).toMatchSnapshot();
});
