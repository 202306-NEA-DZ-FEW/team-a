import renderer from "react-test-renderer";

import Wheel from "..";

it("renders correctly", () => {
  const tree = renderer.create(<Wheel />).toJSON();
  expect(tree).toMatchSnapshot();
});
