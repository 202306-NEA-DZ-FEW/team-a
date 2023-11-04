import renderer from "react-test-renderer";

import LanguageFilterMenu from "../LanguageFilterMenu";

it("it renders correctly", () => {
  const tree = renderer.create(<LanguageFilterMenu currentPath='/' />).toJSON();
  expect(tree).toMatchSnapshot();
});
