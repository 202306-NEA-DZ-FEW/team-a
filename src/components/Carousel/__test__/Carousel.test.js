import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import Carousel from "..";

it("renders correctly", () => {
  const mockItems = [
    {
      id: 0,
      name: "name",
      description: "description",
      dataKey: "dataKey",
      imageURL: image,
    },
  ];
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(<Carousel items={mockItems} queryParams={queryParams} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
