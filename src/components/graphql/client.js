import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';

const http = new HttpLink({
	uri : 'http://71.69.230.14:7000',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTg2NTU2NTYwLCJleHAiOjE1ODcxNjEzNjB9.lzz5EN8uG9rp5YpdGv7JGeQIgE_knRNjKtwKRwDDXBM';
	// return the headers to the context so httpLink can read them
	return {
		headers : {
			...headers,
			Authorization : token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	cache : new InMemoryCache(),
	link  : authLink.concat(http),
});

export default client;
