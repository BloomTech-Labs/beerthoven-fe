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
import Event from './components/pages/Event';
import Venue from './components/pages/Venue';
import User from './components/pages/User';
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
									<Menu.Item key='4'>
										<Link to='/user'>Users</Link>
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
									<Route path='/people'>
										<People />
									</Route>
									<Route path='/event'>
										<Event />
									</Route>
									<Route path='/venue'>
										<Venue />
									</Route>
									<Route path='/user'>
										<User />
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
