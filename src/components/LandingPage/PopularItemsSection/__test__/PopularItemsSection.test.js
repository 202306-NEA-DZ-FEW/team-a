import renderer from "react-test-renderer";

import PopularItemsSection from "..";

it("renders correctly", () => {
  const tree = renderer.create(<PopularItemsSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
