import React from 'react';
import WorkContactForm from '../forms/WorkContactForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * WorkContact and a form to add/edit WorkContact
 */

const WorkContact = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/workcontact/form">
                    <WorkContactForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/workcontact/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>Work Contact list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default WorkContact;
