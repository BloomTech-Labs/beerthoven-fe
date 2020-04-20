import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { RetryLink } from "apollo-link-retry";

// create retry link -- since it takes some time to get
// the Okta token, this retry will cause any failed Apollo
// requests to retry
const retryLink = new RetryLink();

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

// apollo client setup
const link = new HttpLink({
  uri: "https://apollo.beerthoven.dev",
});

// create the client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([retryLink, authLink, link]),
});

export default client;
