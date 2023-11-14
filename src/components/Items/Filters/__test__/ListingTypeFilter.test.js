import renderer from "react-test-renderer";

import ListingTypeFilter from "../ListingTypeFilter";

it("renders correctly", () => {
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(<ListingTypeFilter queryParams={queryParams} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
