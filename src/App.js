import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import PeopleForm from './components/forms/PeopleForm';
import EventForm from './components/forms/EventForm';
import BackDrop from './components/BackDrop/BackDrop';
import TicketForm from './components/forms/TicketForm';
import VolunteerForm from './components/forms/VolunteerForm';
import BenefactorForm from './components/forms/BenefactorForm';
import BoardMemberForm from './components/forms/BoardMemberForm';
import Example from './components/forms/Example';
import ComposerForm from './components/forms/ComposerForm';
import PerformerForm from './components/forms/PerformerForm';
import HouseConcertHostForm from './components/forms/HouseContactHostForm';
import BusinessPartnerForm from './components/forms/BusinessPartnerForm';
import MediaContactForm from './components/forms/MediaContactForm';
import WorkContactForm from './components/forms/WorkContactForm';
import BusinessInfoForm from './components/forms/BusinessInfoForm';
import RecentBenefactorForm from './components/forms/RecentBenefactorForm';

function App () {
	return (
		<div className='App'>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/ticket'>
					<TicketForm />
				</Route>
				<Route path='/benefactor'>
					<BenefactorForm />
				</Route>
				<Route path='/boardmember'>
					<BoardMemberForm />
				</Route>
				<Route path='/people'>
					<PeopleForm />
				</Route>
				<Route path='/businesspartner'>
					<BusinessPartnerForm />
				</Route>
				<Route path='/composer'>
					<ComposerForm />
				</Route>
				<Route path='/performer'>
					<PerformerForm />
				</Route>
				<Route path='/media'>
					<MediaContactForm />
				</Route>
				<Route path='/volunteer'>
					<VolunteerForm />
				</Route>
				<Route path='/houseconcert'>
					<HouseConcertHostForm />
				</Route>
				<Route path='/event'>
					<EventForm />
				</Route>
				<Route path='/work'>
					<WorkContactForm />
				</Route>
				<Route path='/example'>
					<Example />
				</Route>
				<Route path='/businessinfo'>
					<BusinessInfoForm />
				</Route>
				<Route path='/recentbenefactor'>
					<RecentBenefactorForm />
				</Route>
				<Route>
					<Dashboard />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
