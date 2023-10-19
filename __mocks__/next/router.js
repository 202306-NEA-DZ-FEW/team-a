const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementation(() => ({
  route: "/",
  // Add other properties or methods you need for your tests.
}));

export { useRouter };
