import mepi from "public/images/mepi1.png";
import renderer from "react-test-renderer";

import UserListItem from "..";

it("renders correctly", () => {
  const mockItem = [{ id: 2, title: "Product", image: mepi }];
  const tree = renderer.create(<UserListItem item={mockItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});
