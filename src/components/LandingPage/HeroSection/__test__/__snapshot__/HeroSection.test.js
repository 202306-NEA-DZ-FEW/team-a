import renderer from "react-test-renderer";

import HeroSection from "../..";

it("renders correctly", () => {
  const tree = renderer.create(<HeroSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
