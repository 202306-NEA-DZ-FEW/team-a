import { GiBallPyramid } from "react-icons/gi";
import renderer from "react-test-renderer";

import StatisticsCard from "..";

describe("StatisticsCard Component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    icon: <GiBallPyramid />,
  };
  it("renders correctly with props", () => {
    const component = renderer.create(<StatisticsCard {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly and match snapshot", () => {
    const component = renderer.create(<StatisticsCard {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
