import renderer from "react-test-renderer";

import ClearFilterButton from "../ClearFilterButton";

it("renders correctly", () => {
  const tree = renderer.create(<ClearFilterButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
