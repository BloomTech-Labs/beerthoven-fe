import React from 'react';
import BusinessInfoForm from '../forms/BusinessInfoForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * businesses and a form to add/edit businesses
 */

const People = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/businessinfo/form">
                    <BusinessInfoForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/businessinfo/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>Business list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default People;
