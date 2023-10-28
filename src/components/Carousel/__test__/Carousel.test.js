import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import Carousel from "..";

it("renders correctly", () => {
  const mockItems = [
    { name: "name", description: "description", imageURL: image },
  ];
  const queryParams = {};
  const tree = renderer
    .create(<Carousel items={mockItems} queryParams={queryParams} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
