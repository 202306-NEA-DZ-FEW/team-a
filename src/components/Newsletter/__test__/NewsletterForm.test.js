import renderer from "react-test-renderer";

import NewsletterForm from "../NewsletterForm";

it("renders correctly", () => {
  const tree = renderer.create(<NewsletterForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
