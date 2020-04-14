import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PeopleForm from '../forms/PeopleForm';
import PeopleList from '../lists/PeopleList';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../graphql/mutations';
import { ALL_PERSONS } from '../graphql/queries';

const People = () => {

	// for pushing user to /form or /form/:id/ routes,
	const history = useHistory();

	const [
		createPerson,
	] = useMutation(CREATE_PERSON);

	const [ 
		updatePerson,
	] = useMutation(UPDATE_PERSON);

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

	// for displaying list of people,
	const { loading, data } = useQuery(ALL_PERSONS);

	const onSubmit = (formData, personId) => {
		
		if(personId) {
			// this is a person being updated
			updatePerson({
				variables: { 
					id: personId,
					updates: formData
				 }
			});
		}
		else {
			// this is a person being created
			createPerson({
				variables : { newPerson: formData },
			});
		}
	};

	const onEdit = personId => {
		history.push(`/people/form/${personId}`);
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
				<Route path='/people/form/:id?'>
					<PeopleForm onSubmit={onSubmit} />
				</Route>
				<Route>
					<Link to='/people/form'>
						<Button type='primary'>Add</Button>
					</Link>
					{loading && <p>Loading...</p>}
					{data &&
					data.persons.length && <PeopleList list={data.persons} onEdit={onEdit} onDelete={onDelete} />}
				</Route>
			</Switch>
		</div>
	);
};

export default People;
