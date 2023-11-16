import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import MobileCarousel from "../MobileCarousel";

it("renders correctly", () => {
  const mockImages = [image];
  const tree = renderer.create(<MobileCarousel images={mockImages} />).toJSON();
  expect(tree).toMatchSnapshot();
});
