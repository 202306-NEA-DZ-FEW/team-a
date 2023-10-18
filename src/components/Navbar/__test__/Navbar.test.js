import renderer from "react-test-renderer";
import { useRouter } from "next/router";
import Navbar from "..";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("Navbar snapshot test", () => {
  // Mock useRouter with the asPath property
  useRouter.mockImplementation(() => ({
    asPath: "/example-path",
  }));

  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
