import renderer from "react-test-renderer";

import Map from "..";

it("renders correctly", () => {
  const tree = renderer.create(<Map />).toJSON();
  expect(tree).toMatchSnapshot();
});
