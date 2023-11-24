import renderer from "react-test-renderer";

import SearchBar from "..";

it("renders correctly", () => {
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(<SearchBar queryParams={queryParams} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
