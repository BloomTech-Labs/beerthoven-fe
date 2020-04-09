import React from 'react';
import PeopleForm from '../forms/PeopleForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PERSON } from '../graphql/mutations';
import { ALL_PERSONS } from '../graphql/queries';

/**
 * This component should have internal routing to both a list of 
 * people and a form to add/edit people
 */

const People = () => {
    const [createPerson, newPerson] = useMutation(CREATE_PERSON);

    const onSubmit = data => {
        console.log('data', data);
        createPerson(data);
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
