import renderer from "react-test-renderer";

import Container from "..";

it("renders correctly", () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
