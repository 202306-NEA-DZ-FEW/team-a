import renderer from "react-test-renderer";
import OurPartnersSection from "..";

it("rend correctement", () => {
  const tree = renderer.create(<OurPartnersSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
