import renderer from "react-test-renderer";

import ListingTypeButton from "../ListingTypeButton";

it("renders correctly", () => {
  const mockHandleSelect = jest.fn();
  const tree = renderer
    .create(
      <ListingTypeButton text='text' selected='' onSelect={mockHandleSelect} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
