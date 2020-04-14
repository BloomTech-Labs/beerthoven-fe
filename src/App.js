import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './components/graphql/client';
import { Layout, Menu } from 'antd';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import People from './components/pages/People';
import Volunteer from './components/pages/Volunteer';
import Benefactor from './components/pages/Benefactor';
import BoardMember from './components/pages/BoardMember';
import ComposerForm from './components/forms/ComposerForm';
import Performer from './components/pages/Performer';
import HouseContactHostForm from './components/forms/HouseContactHostForm';
import BusinessPartnerForm from './components/forms/BusinessPartnerForm';
import MediaContactForm from './components/forms/MediaContactForm';
import WorkContact from './components/pages/WorkContact';
import BusinessInfo from './components/pages/BusinessInfo';
import RecentBenefactor from './components/pages/RecentBenefactor';
import Event from './components/pages/Event';
import Venue from './components/pages/Venue';
const { Sider, Content } = Layout;

function App () {
	return (
		<div className='App'>
			<ApolloProvider client={client}>
				<Router>
					<Layout>
						<Sider
							style={{
								overflow : 'auto',
								height   : '100vh',
								position : 'fixed',
								left     : 0,
							}}>
							<Menu theme='dark'>
								<Menu.ItemGroup key='h1' title='Manage'>
									<Menu.Item key='1'>
										<Link to='/people'>People</Link>
									</Menu.Item>
									<Menu.Item key='2'>
										<Link to='/event'>Events</Link>
									</Menu.Item>
									<Menu.Item key='3'>
										<Link to='/venue'>Venues</Link>
									</Menu.Item>
								</Menu.ItemGroup>
							</Menu>
						</Sider>
						<Layout
							style={{
								marginLeft : 200,
								height     : '100vh',
							}}>
							<Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
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
									<Route path='/businessinfo'>
										<BusinessInfo />
									</Route>
									<Route path='/recentbenefactor'>
										<RecentBenefactor />
									</Route>
									<Route path='/event'>
										<Event />
									</Route>
									<Route path='/venue'>
										<Venue />
									</Route>
									<Route>
										<Dashboard />
									</Route>
								</Switch>
							</Content>
						</Layout>
					</Layout>
				</Router>
			</ApolloProvider>
		</div>
	);
}

export default App;
  