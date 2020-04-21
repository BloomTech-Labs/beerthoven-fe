import React from "react";
import { Button } from "antd";
import { useOktaAuth } from "@okta/okta-react";

const LogoutButton = () => {
  const { authService } = useOktaAuth();

  const logout = async () => {
    authService.logout("/");
  };

  return (
    <Button ghost onClick={logout}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
