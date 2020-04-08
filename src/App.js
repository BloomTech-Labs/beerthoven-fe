import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
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
import BusinessInfoForm from './components/forms/BusinessInfoForm';
import RecentBenefactor from './components/pages/RecentBenefactor';

function App () {
	return (
		<div className='App'>
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
						<BusinessInfoForm />
					</Route>
					<Route path='/recentbenefactor'>
						<RecentBenefactor />
					</Route>
					<Route>
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
