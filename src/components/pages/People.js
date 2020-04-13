import React, { useEffect } from 'react';
import PeopleForm from '../forms/PeopleForm';
import PeopleList from '../lists/PeopleList';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_PERSON } from '../graphql/mutations';
import { ALL_PERSONS } from '../graphql/queries';

/**
 * This component should have internal routing to both a list of 
 * people and a form to add/edit people
 */

const People = () => {
	const [ createPerson] = useMutation(CREATE_PERSON);
	// const [deletePerson] = useMutation(DELETE_PERSON);

	const { loading, error,  data } = useQuery(ALL_PERSONS);
    
	useEffect(() => {
		if(!loading) {
            console.log(data);
        }
    }, [loading, data]);
    
	const onSubmit = data => {
		console.log('data', data);
		createPerson({
            variables: {newPerson: data}
        });
	};

	return (
		<div>
			<Switch>
				<Route path='/people/form'>
					<PeopleForm onSubmit={onSubmit} />
				</Route>
				<Route>
					<Link to='/people/form'>
						<Button type='primary'>Add</Button>
                        {data && JSON.stringify(data)}
					</Link>
					{loading ? (
						<p>Loading...</p>
					)
					:
					(
						<PeopleList
							list={data}
							onEdit={() => {}}
							onDelete={() => {}}
						/>	
					)}
				</Route>
			</Switch>
		</div>
	);
};

export default People;
