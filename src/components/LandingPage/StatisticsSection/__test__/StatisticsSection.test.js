import renderer from "react-test-renderer";

import StatisticsSection from "..";

it("renders correctly", () => {
  const tree = renderer.create(<StatisticsSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
