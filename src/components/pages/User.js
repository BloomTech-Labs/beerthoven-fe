import React from 'react';
import { useHistory } from 'react-router-dom';
import UserForm from '../forms/UserForm';
import UserList from '../lists/UserList';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_USER, UPDATE_USER, DELETE_USER } from '../graphql/mutations';
import { ALL_USERS } from '../graphql/queries';
import { updateAfterUserCreate, updateAfterUserChange, updateAfterUserDelete } from '../graphql/cache';

const User = () => {
	const history = useHistory();

	const [
		createUser,
	] = useMutation(CREATE_USER, {
		update : updateAfterUserCreate,
	});

	const [
		updateUser,
	] = useMutation(UPDATE_USER, {
		update : updateAfterUserChange,
	});

	const [
		deleteUser,
	] = useMutation(DELETE_USER, {
		update : updateAfterUserDelete,
	});

	const { loading, data } = useQuery(ALL_USERS);

	const onSubmit = (formData, userId) => {
		if (userId) {
			updateUser({
				variables : {
					id      : userId,
					updates : formData,
				},
			});
		}
		else {
			createUser({
				variables : {
					newUser: formData,
				},
			});
		}
	};
	const onEdit = userId => {
		history.push(`/user/form/${userId}`);
	};

	const onDelete = userId => {
		if (window.confirm('Are you sure you want to delete this user?')) {
			deleteUser({
				variables : { id: userId },
			});
		}
	};
	return (
		<div>
			<Switch>
				<Route path='/user/form/:id?'>
					<UserForm onSubmit={onSubmit} />
				</Route>
				<Route>
					<Link to='/user/form'>
						<Button type='primary'>Add</Button>
					</Link>
					{loading && <p>Loading...</p>}
					{data && data.users.length && <UserList list={data.users} onEdit={onEdit} onDelete={onDelete} />}
				</Route>
			</Switch>
		</div>
	);
};
export default User;
