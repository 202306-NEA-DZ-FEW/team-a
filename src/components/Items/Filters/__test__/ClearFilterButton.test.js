import renderer from "react-test-renderer";

import ClearFilterButton from "../ClearFilterButton";

it("renders correctly", () => {
  const mockT = jest.fn();
  const tree = renderer.create(<ClearFilterButton t={mockT} />).toJSON();
  expect(tree).toMatchSnapshot();
});
