import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

//This creates the httpLink that will connect your ApolloClient with the GraphQL API.
const httpLink = createHttpLink({
	uri : 'http://localhost:3000',
});

//This instantiates Apolloclient by passing in the httpLink and a new instance of InMemoryCache.
const client = new ApolloClient({
	link  : httpLink,
	cache : new InMemoryCache(),
});

ReactDOM.render(
	//Render the root component of your React app. The App is wrapped with the high-order component ApolloProvider that gets passed the client as a prop.
	<Router>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Router>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
