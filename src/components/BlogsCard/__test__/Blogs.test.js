import renderer from "react-test-renderer";
import BlogsCard from "..";

const testBlog = {
  id: 1,
  title: "Sample Blog Title",
  imageUrl: "/sample-image.jpg",
  description: "Sample description for the blog...",
  date: "2023-10-28",
};
it("renders correctly", () => {
  const tree = renderer.create(<BlogsCard blog={testBlog} />).toJSON();
  expect(tree).toMatchSnapshot();
});
