import renderer from "react-test-renderer";

import CategoryFilter from "../CategoryFilter";

it("renders correctly", () => {
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(<CategoryFilter queryParams={queryParams} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
