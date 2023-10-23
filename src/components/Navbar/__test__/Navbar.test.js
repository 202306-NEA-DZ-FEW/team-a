import { useRouter } from "next/router";
import renderer from "react-test-renderer";

import Navbar from "..";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/lib/firebase", () => {
  return {
    app: {}, // Mock app object
    db: {}, // Mock db object
    storage: {}, // Mock storage object
    auth: {}, // Mock auth object
  };
});

test("Navbar snapshot test", () => {
  // Mock useRouter with the asPath property
  useRouter.mockImplementation(() => ({
    asPath: "/example-path",
  }));

  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
