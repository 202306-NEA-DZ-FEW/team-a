import renderer from "react-test-renderer";

import TextArea from "..";

it("renders correctly", () => {
  const tree = renderer.create(<TextArea />).toJSON();
  expect(tree).toMatchSnapshot();
});
