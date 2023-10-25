import renderer from "react-test-renderer";

import ImageSpinner from "../ImageSpinner";

it("renders correctly", () => {
  const tree = renderer.create(<ImageSpinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
