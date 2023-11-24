import renderer from "react-test-renderer";

import SelectInput from "..";

it("renders correctly", () => {
  const mockData = [{ name: "foo" }, { name: "bar" }];
  const tree = renderer.create(<SelectInput data={mockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
