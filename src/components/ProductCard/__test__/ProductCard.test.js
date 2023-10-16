import renderer from "react-test-renderer";

import ProductCard from "..";

it("renders correctly", () => {
  const tree = renderer.create(<ProductCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
