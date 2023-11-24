import renderer from "react-test-renderer";

import UserProfile from "..";

jest.mock("@/lib/firebase", () => {
  return {
    app: {}, // Mock app object
    db: {}, // Mock db object
    storage: {}, // Mock storage object
    auth: {}, // Mock auth object
  };
});

it("renders correctly", () => {
  const mockUser = {
    name: "John",
    email: "jhm@gmail.com",
    phone: "123",
    location: "1- Adrad",
  };
  const tree = renderer.create(<UserProfile userData={mockUser} />).toJSON();
  expect(tree).toMatchSnapshot();
});
