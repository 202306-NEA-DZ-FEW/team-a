import renderer from "react-test-renderer";

import ProductDetailsCard from "..";

it("renders correctly", () => {
  const mockProps = {
    title: "Product Details title",
    description: "Product Details description",
    location: "Product Details location",
    listingType: "Product Details listing",
    category: "Product Details category",
    images: ["https://placehold.co/600x400", "https://placehold.co/400x400"],
    createdAt: "01-01-2015",
    username: "productDetails username",
    email: "productDetails email",
    phone: "+1 1 1 1",
  };
  const tree = renderer.create(<ProductDetailsCard {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
