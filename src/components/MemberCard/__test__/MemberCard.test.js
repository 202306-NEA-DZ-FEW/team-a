import image from "public/images/team_1.svg";
import renderer from "react-test-renderer";

import MemberCard from "..";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MemberCard
        name='name'
        github='https://github.com/'
        linkedin='https://www.linkedin.com/'
        imageUrl={image}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
