import renderer from "react-test-renderer";

import ItemsCarousel from "..";

jest.mock("@/lib/helpers", () => ({
  ...jest.requireActual("@/lib/helpers"),
  getLocationName: jest.fn().mockReturnValue("Mocked Location Name"),
  truncateString: jest.fn().mockReturnValue("Mocked Truncate String"),
}));

it("renders correctly", () => {
  const mockT = jest.fn();
  const mockItems = [
    {
      id: 1,
      title: "title",
      listingType: "exchange",
      category: "books",
      location: "5- Batna",
      images: ["https://placehold.co/400x400", "https://placehold.co/600x600"],
    },
    {
      id: 2,
      title: "title",
      listingType: "exchange",
      category: "books",
      location: "٩- البليدة",
      images: ["https://placehold.co/400x400", "https://placehold.co/600x600"],
    },
  ];
  const tree = renderer
    .create(<ItemsCarousel t={mockT} items={mockItems} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
