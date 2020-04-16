import React from 'react';
import { useHistory } from 'react-router-dom';
import PeopleForm from '../forms/PeopleForm';
import PeopleList from '../lists/PeopleList';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_PERSON, UPDATE_PERSON, DELETE_PERSON } from '../graphql/mutations';
import { ALL_PERSONS } from '../graphql/queries';
import { updateAfterPersonCreate, updateAfterPersonChange, updateAfterPersonDelete } from '../graphql/cache';

const People = () => {
	// for pushing user to /form or /form/:id/ routes,
	const history = useHistory();

	const [
		createPerson,
	] = useMutation(CREATE_PERSON, {
		// when a creation is performed, update the cache
		update : updateAfterPersonCreate,
	});

	const [
		updatePerson,
	] = useMutation(UPDATE_PERSON, {
		// when an update is performed, update the cache
		update : updateAfterPersonChange,
	});

	const [
		deletePerson,
	] = useMutation(DELETE_PERSON, {
		// when a delete is performed, update the cache
		update : updateAfterPersonDelete,
	});

	// for displaying list of people,
	const { loading, data } = useQuery(ALL_PERSONS);

	const onSubmit = (formData, personId) => {
		if (personId) {
			// this is a person being updated
			updatePerson({
				variables : {
					id      : personId,
					updates : formData,
				},
			});
		}
		else {
			// this is a person being created
			createPerson({
				variables : {
					variables : { newPerson: formData },
				},
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
