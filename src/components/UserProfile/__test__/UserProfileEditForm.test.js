import renderer from "react-test-renderer";

import UserProfileEditForm from "../UserProfileEditForm";

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

  const mockOnUpdate = jest.fn();
  const tree = renderer
    .create(<UserProfileEditForm userData={mockUser} onUpdate={mockOnUpdate} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
