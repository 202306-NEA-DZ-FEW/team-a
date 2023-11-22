import { GiBallPyramid } from "react-icons/gi";
import renderer from "react-test-renderer";

import CausesCard from "..";

describe("CausesCard Component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    icon: <GiBallPyramid />,
  };

  it("renders correctly and match snapshot", () => {
    const component = renderer.create(<CausesCard {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
