import React from 'react';
import PeopleForm from '../forms/PeopleForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * people and a form to add/edit people
 */

const People = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/people/form">
                    <PeopleForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/people/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>People list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default People;
