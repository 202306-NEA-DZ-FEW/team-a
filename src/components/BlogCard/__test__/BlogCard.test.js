import renderer from "react-test-renderer";

import BlogCard from "..";

jest.mock("@/lib/helpers", () => ({
  ...jest.requireActual("@/lib/helpers"),
  truncateString: jest.fn().mockReturnValue("Mocked Truncate String"),
  formatDate: jest.fn().mockReturnValue("2023-10-28", "MMM YYYY"),
}));

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BlogCard
        createdAt='2023-10-28'
        id={1}
        imageUrl='https://placehold.co/600x400'
        title='title'
        description='description'
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
