import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import ItemCard from "..";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ItemCard
        title='title'
        location='location'
        listingType='listingType'
        imageUrl={image}
        category='category'
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
