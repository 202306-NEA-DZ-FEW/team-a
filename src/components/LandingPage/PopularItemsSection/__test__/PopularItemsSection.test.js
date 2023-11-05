import renderer from "react-test-renderer";

import PopularItemsSection from "..";

it("renders correctly", () => {
  const mockItems = [
    {
      id: 1,
      title: "Hello",
      images: ["https://placehold.co/600x400"],
      createdAt: {},
      description: "Hello",
    },
  ];
  const tree = renderer
    .create(<PopularItemsSection items={mockItems} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
