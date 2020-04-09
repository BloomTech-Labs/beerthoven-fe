import React from 'react';
import PerformerForm from '../forms/PerformerForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * performer and a form to add/edit performer
 */

const Performer = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/performer/form">
                    <PerformerForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/performer/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>performer list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default Performer;
