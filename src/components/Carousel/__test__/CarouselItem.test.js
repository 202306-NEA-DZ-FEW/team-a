import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import CarouselItem from "../CarouselItem";

it("renders correctly", () => {
  const name = "name";
  const dataKey = "myKey";
  const imageURL = image;
  const description = "my description";
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(
      <CarouselItem
        key={0}
        name={name}
        dataKey={dataKey}
        imageURL={imageURL}
        description={description}
        queryParams={queryParams}
        t={mockT}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
