import React, { useState, useEffect } from "react";
import { ApolloProvider } from "react-apollo";
import { useOktaAuth } from "@okta/okta-react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

// apollo client setup
const link = new HttpLink({
  uri: "https://apollo.beerthoven.dev",
});

// create authenticated link
const authLink = setContext((_, { headers }) => {
  // return the headers to the context
  const token = localStorage.getItem("okta-token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

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
