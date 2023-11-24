import renderer from "react-test-renderer";
import "../../../../../__mocks__/next/intersectionObserverMock";

import OurPartnersSection from "..";

jest.mock("react-slick", () => ({ children }) => <div>{children}</div>);

it("rend correctement", () => {
  const tree = renderer.create(<OurPartnersSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
