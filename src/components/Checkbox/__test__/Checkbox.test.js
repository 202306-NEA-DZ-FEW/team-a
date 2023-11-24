import renderer from "react-test-renderer";

import Checkbox from "..";

it("renders correctly", () => {
  const tree = renderer.create(<Checkbox />).toJSON();
  expect(tree).toMatchSnapshot();
});
