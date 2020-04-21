import React from "react";
import { render } from "@testing-library/react";
import LogoutButton from "./LogoutButton";
import { useOktaAuth } from "@okta/okta-react";
jest.mock("@okta/okta-react");

const logout = jest.fn();

useOktaAuth.mockReturnValue({
  authService: {
    logout,
  },
});

test("Button renders", () => {
  const { getByText } = render(<LogoutButton />);
  expect(getByText("Log Out")).toBeInTheDocument();
});

test("Button fires onclick", () => {
  const { getByText } = render(<LogoutButton />);

  getByText("Log Out").click();

  expect(logout).toHaveBeenCalledTimes(1);
});
