import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Chart from './Chart';

const Dashboard = () => (
	<div>
		<h1>Dashboard</h1>
		<p style={{ fontSize: '90px' }}>Welcome!</p>
		<Chart/>
		<Menu>
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
	</div>
);

export default Dashboard;
