import renderer from "react-test-renderer";

import AboutPageCover from "..";

it("renders correctly", () => {
  const mockT = jest.fn();
  const tree = renderer.create(<AboutPageCover t={mockT} />).toJSON();
  expect(tree).toMatchSnapshot();
});
