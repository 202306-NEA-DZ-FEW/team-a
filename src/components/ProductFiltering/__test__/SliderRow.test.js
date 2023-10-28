import image from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import SliderRow from "../SliderRow";

it("renders correctly", () => {
  const mockItems = [
    { name: "name", description: "description", imageURL: image },
  ];
  const queryParams = {};
  const title = "title";
  const tree = renderer
    .create(
      <SliderRow
        title={title}
        categories={mockItems}
        rowID={1}
        queryParams={queryParams}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
