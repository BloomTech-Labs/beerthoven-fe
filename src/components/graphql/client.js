import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';

const http = new HttpLink({
	uri : 'https://apollo.beerthoven.dev',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token =
		'eyJraWQiOiJMSTEzQmlNMkREYWlfMkJwNFliZUItdG54S0JQbXczcXZGZEd4M2hjWWI4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjE1SV9uS3RucC1qVWtrZjRpSF85N0xSZVBjZ3FSWmZsNWVUWm5UellfQUkiLCJpc3MiOiJodHRwczovL29rdGEuYmVlcnRob3Zlbi5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTg2Nzg3NDU3LCJleHAiOjE1ODY4NzM4NTcsImNpZCI6IjBvYTVocGxhbHRSRWpzR0lGNHg2IiwidWlkIjoiMDB1NHVhbnVrU203UnJYUUI0eDYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InRlc3RAZXhhbXBsZS5jb20ifQ.f6ITO6djo37Rb9UTjAU8_6SuAJYC83uGs0HreezhP3RA2AzCLl9GND8xZzaTYs7s4ZXAOK7Y5SF8RNYrkOrH3xbxlPX4SUUTbK9eBWcJWJr2t_6E0aFn7sF_J1RvoTnhyEJZdzvQHcDnY2KBcoc1HVtxCssgFQH-UVxRnpDQ9R454YLgLEY_qp4Agx0hnoCv_nJlct8VLVTRil81uuKqOfqBSVgNNrvaX3JqLZPXRbXrnVKHYDAKWkSih0jiWdPbXVVN9qwMr1tSPT1zJbx-Idv8r0AxbTDdIG2ZHL7_Gy3C-BZLPwvB-7WjJh51ZmRXDu3sd0esjIiBotrwntuuMg';
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
