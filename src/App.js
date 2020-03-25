import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import PeopleForm from './components/forms/PeopleForm';
import EventForm from './components/forms/EventForm';
import BackDrop from './components/BackDrop/BackDrop';

function App () {
	return (
		<div className='App'>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/people'>
					<PeopleForm />
				</Route>
        <Route path="/event">
          <EventForm />
        </Route>
				<Route>
					<Dashboard />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
