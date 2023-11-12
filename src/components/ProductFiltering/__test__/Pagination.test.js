import renderer from "react-test-renderer";

import Pagination from "../Pagination";

it("renders correctly", () => {
  const queryParams = {};
  const mockT = jest.fn();
  const tree = renderer
    .create(
      <Pagination
        page={1}
        totalItems={4}
        totalPages={3}
        pageSize={4}
        queryParams={queryParams}
        t={mockT}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
