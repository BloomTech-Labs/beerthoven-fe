import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const http = new HttpLink({
	uri : 'https://apollo.beerthoven.dev',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token =
		'eyJraWQiOiJMSTEzQmlNMkREYWlfMkJwNFliZUItdG54S0JQbXczcXZGZEd4M2hjWWI4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULkpLdnlnT3VKS1BvTEwwUXM5VDN0cWtma0JYV0gtZG1KVVJtclFWSE1Ec1kiLCJpc3MiOiJodHRwczovL29rdGEuYmVlcnRob3Zlbi5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTg2ODgwNjM1LCJleHAiOjE1ODY5NjcwMzUsImNpZCI6IjBvYTVocGxhbHRSRWpzR0lGNHg2IiwidWlkIjoiMDB1NHVhbnVrU203UnJYUUI0eDYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InRlc3RAZXhhbXBsZS5jb20ifQ.Rg6vn4PWeNnpIXPUnj4CAQW9FJbtfl-r1GJJr9GihdJOWEK-AihYvR3e0ELl7zs_r9sbuLqFFPpPznPVqi2HrlVh5COxar_odaPkKj5KA1nhB4cQ0o9msUJE3ThJ43ADMhDHniCm_Fy7BD02_tWNXdRUW6ZY0n60j4NbbAFMM38ZkLVHg7skIPBSHRkm8WL7qBax3nWiCjMptWfy90DahHI3GhQO8a2KmpTtiVBSc8RWazF458eBpq2ERjAr6W2dUDPLCOC6Ij1vHQcPVg57eZnbaVclmUixDi6q2nMRSYxlwCA2hK8Qrrhbj9pFXDgKX5Nx_6hGOCWE-YJYLpcqXw';
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
