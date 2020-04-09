import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd'; 
import BenefactorForm from '../forms/BenefactorForm';

const Benefactor = () => {
    const onSubmit = data => {
		console.log('data', data);
	};

    return (
        <div>
            <Switch>
                <Route path="/benefactor/form">
                    <BenefactorForm onSubmit={onSubmit} />
                </Route>
                <Route>
                    <Link to="/benefactor/form">
                        <Button type="primary">Add</Button>
                    </Link>
                    <p>Benefactor list here</p>
                </Route>
            </Switch>
        </div>
    );
};

export default Benefactor;
