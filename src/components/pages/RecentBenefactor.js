import React from 'react';
import RecentBenefactorForm from '../forms/RecentBenefactorForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';

/**
 * This component should have internal routing to both a list of 
 * RecentBenefactor and a form to add/edit RecentBenefactor
 */

const RecentBenefactor = () => {

    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/recentbenefactor/form">
                    <RecentBenefactorForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/RecentBenefactor/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>RecentBenefactor list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default RecentBenefactor;
