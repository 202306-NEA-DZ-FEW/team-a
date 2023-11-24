import renderer from "react-test-renderer";

import TextAreaInput from "..";

it("renders correctly", () => {
  const tree = renderer.create(<TextAreaInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
