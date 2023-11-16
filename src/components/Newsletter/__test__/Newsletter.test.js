import MailchimpSubscribe from "react-mailchimp-subscribe";
import renderer from "react-test-renderer";

import Newsletter from "..";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Newsletter>
        <MailchimpSubscribe url='/' />
      </Newsletter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
