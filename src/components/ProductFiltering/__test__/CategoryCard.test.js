import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import CategoryCard from "../CategoryCard";

test("Navbar snapshot test", () => {
  const title = "title";
  const link = "link";
  const queryParams = {};
  const tree = renderer
    .create(
      <CategoryCard
        key={0}
        imageUrl={image}
        title={title}
        link={link}
        queryParams={queryParams}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
