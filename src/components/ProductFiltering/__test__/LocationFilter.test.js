import renderer from "react-test-renderer";

import LocationFilter from "../LocationFilter";

it("renders correctly", () => {
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(<LocationFilter queryParams={queryParams} t={mockT} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
