import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import gql from 'graphql-tag';

const http = new HttpLink({
	uri : 'http://apollo.beerthoven.dev/',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token =
		'eyJraWQiOiJMSTEzQmlNMkREYWlfMkJwNFliZUItdG54S0JQbXczcXZGZEd4M2hjWWI4IiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjUzdWExc0FZY3pfZWV3ZEcwcWpnTEdwc2xrcjFFWkZESWlxQ0FQa3BncEkiLCJpc3MiOiJodHRwczovL29rdGEuYmVlcnRob3Zlbi5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTg2NDY2MjgzLCJleHAiOjE1ODY1NTI2ODMsImNpZCI6IjBvYTVocGxhbHRSRWpzR0lGNHg2IiwidWlkIjoiMDB1NHVhbnVrU203UnJYUUI0eDYiLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6InRlc3RAZXhhbXBsZS5jb20ifQ.Ulz1Miiu4tOEd1yv6HYLioXZCZAa03kn-9EFnq0Cpm82GujhCFp9iY-swYxBm8AaAlY3kdZZ-fbs0pRilvYaOuSfX12zIdGKYmHINtrdwAbLiTSB8Jflc-zOb9wsfBD8FwkGwBB85by_ycmKR06_5yDeF1r3Sgr5kgXLjf0azimk4X39_oJn2SqjP1_GXgahIxbNFqyLhwRWggTN6H_QFFGl6vcLbiy7EVqTFeDYtgo9vm7qGcyWe1GoU5bvOMQdL5HiuSGoxaN-F8Cqwv447sAwSYSEQ2i30yc00p-_2gcW69g55GtknDuIIUCjpf99eS1aCOs6j-KeSTbRhMd50w","scope":"openid","id_token":"eyJraWQiOiJMSTEzQmlNMkREYWlfMkJwNFliZUItdG54S0JQbXczcXZGZEd4M2hjWWI4IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHU0dWFudWtTbTdSclhRQjR4NiIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9va3RhLmJlZXJ0aG92ZW4uZGV2L29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiMG9hNWhwbGFsdFJFanNHSUY0eDYiLCJpYXQiOjE1ODY0NjYyODMsImV4cCI6MTU4NjQ2OTg4MywianRpIjoiSUQuRlVrd195Q0phSlRJbHV5QXNqM3RjcEJ6NFdMbElweHhjNFRlVDNDRlRnVSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBvNHN3azR3dFdXVW9mV3Q0eDYiLCJhdXRoX3RpbWUiOjE1ODY0NjYyODMsImF0X2hhc2giOiIxUXh5RHVpNUN6Sl9MdVkwbDFPcXJBIn0.aihWPqoTyzYKjcpbLBgqWelKD9w80fdu7gRIbhEc5c4CzIQOf_sE5xO2aIhjUPFjF6r4rxw5bsB8Kb7iMow5FXB361hVpaxtgNAOUmF1wbsZy48-06Lee53JhHzyof4PxeTPNIezyVbp7ay2KQ_N2lGRMPc1XEhJKJ1VmmNTnebPeiN3jq-WV2wxVFalSEKkjHnWMCNdJjw25nnekapx4_GOlj_e3k4Yuk08u19NPvrh3uBYq_DyrXGt3bh_iuIvpGxMmG2bfWE93sqsvhQU1CFSvuhqJknHnGY5o3OD_5U9pRCvoYVblc53Opf-cmZ1dCRTXWknw62SX_-asdnSDQ';
	// return the headers to the context so httpLink can read them
	return {
		headers : {
			...headers,
			authorization : token ? `Bearer ${token}` : '',
		},
	};
});

// const link = ApolloLink.from([
// 	http,
// ]);

const client = new ApolloClient({
	cache : new InMemoryCache(),
	link  : authLink.concat(http),
});

export default client;
