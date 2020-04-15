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
		'eyJraWQiOiJMSTEzQmlNMkREYWlfMkJwNFliZUItdG54S0JQbXczcXZGZEd4M2hjWWI4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmRPNE5vMzk0bFpUOHZmVUsyc3M0d2N2eTN6cDFrLVoxQlFWNUJmQ012LWMiLCJpc3MiOiJodHRwczovL29rdGEuYmVlcnRob3Zlbi5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTg2OTY4MDgzLCJleHAiOjE1ODcwNTQ0ODMsImNpZCI6IjBvYTVocGxhbHRSRWpzR0lGNHg2IiwidWlkIjoiMDB1NHVhbnVrU203UnJYUUI0eDYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InRlc3RAZXhhbXBsZS5jb20ifQ.SCMsinCPLqyYWKdDzycEDPKjdRjjXpXNkr3eWiKmrWkv8L4XLil1WCY8p3W4ePuXke7EacpnkWIZvljYuLHTdYMQEzlTZfscSroehf-BKnDADhuJmvnh2qA_0A_JOJ7_S_f6NYyhFpqJa96IrtdztV4CCsog5k-BGYRNK8AKiVNxeU7iAxhoJbeSV1HKHgzBw-t4EQmKvwUGPWcZXBzJZOGaOTpAkmGsrR-McnTq6Tdu3VII6c-gbsHX-S-aeKoneuvDHrxMccN2OPt65zSArsn4GmIh0jT8WcrAePZhkhM_xk9c4FJtlqKKjJK_KzzIDhu1W43Br3nL0W3ij0N-Pg';
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
