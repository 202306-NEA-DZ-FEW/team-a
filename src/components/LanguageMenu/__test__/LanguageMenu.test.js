import renderer from "react-test-renderer";

import LanguageMenu from "..";

it("it renders correctly", () => {
  const tree = renderer.create(<LanguageMenu currentPath='/' />).toJSON();
  expect(tree).toMatchSnapshot();
});
