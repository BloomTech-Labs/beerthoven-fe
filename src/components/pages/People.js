import React from 'react';
import PeopleForm from '../forms/PeopleForm';
import PeopleList from '../lists/PeopleList';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_PERSON, DELETE_PERSON } from '../graphql/mutations';
import { ALL_PERSONS } from '../graphql/queries';

/**
 * This component should have internal routing to both a list of 
 * people and a form to add/edit people
 */

const People = () => {
	const [
		createPerson,
	] = useMutation(CREATE_PERSON);

	const [
		deletePerson,
	] = useMutation(DELETE_PERSON, {
		// when a delete is performed, run this update
		update (cache, { data: { deletePerson } }) {
			// read ALL_PERSONS
			const allPersons = cache.readQuery({ query: ALL_PERSONS });

			// write delete to the cache
			cache.writeQuery({
				query : ALL_PERSONS,
				data  : { persons: allPersons.persons.filter(person => person.id !== deletePerson.id) },
			});
		},
	});
	const { loading, data } = useQuery(ALL_PERSONS);

	const onSubmit = formData => {
		console.log('data', formData);
		createPerson({
			variables : { newPerson: formData },
		});
	};

	const onDelete = personId => {
		if (window.confirm('Are you sure you want to delete this record?')) {
			deletePerson({
				variables : { id: personId },
			});
		}
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
					</Link>
					{loading && <p>Loading...</p>}
					{data &&
					data.persons.length && <PeopleList list={data.persons} onEdit={() => {}} onDelete={onDelete} />}
				</Route>
			</Switch>
		</div>
	);
};

export default People;
