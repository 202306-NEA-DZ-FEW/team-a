import renderer from "react-test-renderer";

import Input from "..";

it("renders correctly", () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
