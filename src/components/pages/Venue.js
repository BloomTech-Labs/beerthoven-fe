import React, { useEffect } from 'react';
import VenueForm from '../forms/VenueForm';
// import VenueList from '../lists/VenueList';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_VENUE } from '../graphql/mutations';
import { ALL_VENUES } from '../graphql/queries';

/**
 * This component should have internal routing to both a list of 
 * venues and a form to add/edit venue
 */

const Venue = () => {
	const [
		createVenue,
	] = useMutation(CREATE_VENUE);

	const { loading, data } = useQuery(ALL_VENUES);

	useEffect(
		() => {
			if (!loading) {
				console.log(data);
			}
		},
		[
			loading,
			data,
		],
	);

	const onSubmit = data => {
		console.log('data', data);
		createVenue({
			variables : { newVenue: data },
		});
	};

	return (
		<div>
			<Switch>
				<Route path='/venue/form'>
					<VenueForm onSubmit={onSubmit} />
				</Route>
				<Route>
					<Link to='/venue/form'>
						<Button type='primary'>Add</Button>
					</Link>
					{/* {loading ? <p>Loading...</p> : <PeopleList list={data} onEdit={() => {}} onDelete={() => {}} />} */}
				</Route>
			</Switch>
		</div>
	);
};

export default Venue;
