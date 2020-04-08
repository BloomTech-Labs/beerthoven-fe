import React from 'react';
import VolunteerForm from '../forms/VolunteerForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * Volunteer and a form to add/edit Volunteer
 */

const Volunteer = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/volunteer/form">
                    <VolunteerForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/volunteer/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>Volunteer list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default Volunteer;
