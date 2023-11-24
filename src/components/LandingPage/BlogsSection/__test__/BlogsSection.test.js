import renderer from "react-test-renderer";

import BlogsSection from "..";

it("renders correctly", () => {
  const mockBlogs = [
    {
      id: 1,
      title: "Hello",
      imageUrl: "https://placehold.co/600x400",
      createdAt: {},
      description: "Hello",
    },
  ];
  const tree = renderer.create(<BlogsSection blogs={mockBlogs} />).toJSON();
  expect(tree).toMatchSnapshot();
});
