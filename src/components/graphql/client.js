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
		'eyJraWQiOiJMSTEzQmlNMkREYWlfMkJwNFliZUItdG54S0JQbXczcXZGZEd4M2hjWWI4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmlQU0IyZVlGSTJybmhDTGZ0MkZaQVhIdUFqRDJfc3ZFdG1fWVpFa2NkNVEiLCJpc3MiOiJodHRwczovL29rdGEuYmVlcnRob3Zlbi5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTg3MDUxNTIzLCJleHAiOjE1ODcxMzc5MjMsImNpZCI6IjBvYTVocGxhbHRSRWpzR0lGNHg2IiwidWlkIjoiMDB1NHVhbnVrU203UnJYUUI0eDYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InRlc3RAZXhhbXBsZS5jb20ifQ.MBNkjFAAeqIgHfu8OcHSPb87ANwvmx7Tgbp5nkyW4vzwywRfTs29uPJdvJgRnkRZySZMMtptfPyas_vCFP8mqA1hCMXUe3RPSoSC5yYpdmqKINE3cWmHFCur9ttRpYjgjcTBqzLgKZ42eN3XFWXt9eT4LhEIQrzuh_efQyr6ib-2Wh_BgegS8_X55TAbdycuhdoSddcgEPdKt7rLRRgazI2-JzojZ-V5YDNd_zmUtbeAgQh5wKN8BUFZ1uil9Jhh0_LxCjti5t9QwlAyGY8BWybzx6zjkBcoSsbOnss3s8AuePyNOQer1_RXJmf24rdyAZ9bvo806KK5KZ-R8V_gtQ';
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
