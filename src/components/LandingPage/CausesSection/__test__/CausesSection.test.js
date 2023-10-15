import renderer from "react-test-renderer";

import CausesSection from "..";

it("renders correctly", () => {
  const tree = renderer.create(<CausesSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
