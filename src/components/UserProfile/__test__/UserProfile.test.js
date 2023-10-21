import renderer from "react-test-renderer";
import UserProfile from "..";

it("renders correctly", () => {
  const tree = renderer.create(<UserProfile />).toJSON();
  expect(tree).toMatchSnapshot();
});
