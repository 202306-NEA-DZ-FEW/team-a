import renderer from "react-test-renderer";

import ItemDetailsCard from "..";

it("renders correctly", () => {
  const mockProps = {
    title: "Item Details title",
    description: "Item Details description",
    location: "Item Details location",
    listingType: "Item Details listing",
    category: "Item Details category",
    images: ["https://placehold.co/600x400", "https://placehold.co/400x400"],
    createdAt: "01-01-2015",
    username: "itemDetails username",
    email: "itemDetails email",
    phone: "+1 1 1 1",
  };
  const tree = renderer.create(<ItemDetailsCard {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
