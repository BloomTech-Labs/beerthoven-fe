import React, { useState, useEffect } from "react";
import { ApolloProvider } from "react-apollo";
import { useOktaAuth } from "@okta/okta-react";
import client from "../graphql/client";

const OktaApolloProvider = ({ children }) => {
  // get okta user information
  const { authState, authService } = useOktaAuth();
  const [oktaToken, setOktaToken] = useState(null);

  // once the user is authenticated, set the token in state
  useEffect(() => {
    if (authState.isAuthenticated) {
      setOktaToken(authState.accessToken);
    } else {
      setOktaToken(null);
    }
  }, [authState, authService]);

  // once there is a token in state, set it in localstorage
  useEffect(() => {
    localStorage.setItem("okta-token", oktaToken);
  }, [oktaToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default OktaApolloProvider;
