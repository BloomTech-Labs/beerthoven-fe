import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import client from './components/graphql/client';
import { Layout } from 'antd';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import People from './components/pages/People';
import Volunteer from './components/pages/Volunteer';
import Benefactor from './components/pages/Benefactor';
import BoardMember from './components/pages/BoardMember';
import Example from './components/forms/Example';
import ComposerForm from './components/forms/ComposerForm';
import Performer from './components/pages/Performer';
import HouseContactHostForm from './components/forms/HouseContactHostForm';
import BusinessPartnerForm from './components/forms/BusinessPartnerForm';
import MediaContactForm from './components/forms/MediaContactForm';
import WorkContact from './components/pages/WorkContact';
import BusinessInfo from './components/pages/BusinessInfo';
import RecentBenefactor from './components/pages/RecentBenefactor';
import EventForm from './components/forms/EventForm'
import VenueForm from './components/forms/VenueForm'
import Event from './components/pages/Event'
const { Header, Sider, Content, Footer } = Layout;

function App () {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<Layout>
					<Sider
						style={{
							overflow : 'auto',
							height   : '100vh',
							position : 'fixed',
							left     : 0,
						}}>
						Side menu
					</Sider>
					<Layout
						style={{
							marginLeft : 200,
							height     : '100vh',
						}}>
						<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
							<Router>
								<Switch>
									<Route path='/login'>
										<Login />
									</Route>
									<Route path='/benefactor'>
										<Benefactor />
									</Route>
									<Route path='/boardmember'>
										<BoardMember />
									</Route>
									<Route path='/people'>
										<People />
									</Route>
									<Route path='/businesspartner'>
										<BusinessPartnerForm />
									</Route>
									<Route path='/composer'>
										<ComposerForm />
									</Route>
									<Route path='/performer'>
										<Performer />
									</Route>
									<Route path='/media'>
										<MediaContactForm />
									</Route>
									<Route path='/volunteer'>
										<Volunteer />
									</Route>
									<Route path='/housecontact'>
										<HouseContactHostForm />
									</Route>
									<Route path='/workcontact'>
										<WorkContact />
									</Route>
									<Route path='/example'>
										<Example />
									</Route>
									<Route path='/businessinfo'>
										<BusinessInfo />
									</Route>
									<Route path='/recentbenefactor'>
										<RecentBenefactor />
									</Route>
									<Route path='/venue'>
										<VenueForm />
									</Route>
									<Route path='/event'>
										<Event />
									</Route>
									<Route>
										<Dashboard />
									</Route>
								</Switch>
							</Router>
						</Content>
					</Layout>
				</Layout>
			</ApolloProvider>
		</div>
	);
}

export default App;
