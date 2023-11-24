import renderer from "react-test-renderer";

import BlogCard from "..";

it("renders correctly", () => {
  const tree = renderer.create(<BlogCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
