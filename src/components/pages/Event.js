import React, { useEffect } from 'react';
import EventForm from '../forms/EventForm';
import { Link, Route, Switch } from 'react-router-dom';
import { Button } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_EVENT } from '../graphql/mutations';
import { ALL_EVENTS } from '../graphql/queries';

/**
 * This component should have internal routing to both a list of 
 * event and a form to add/edit event
 */

const Event = () => {
	const [ createEvent ] = useMutation(CREATE_EVENT);
	const { loading, data } = useQuery(ALL_EVENTS);
    
	useEffect(() => {
		if(!loading) {
            console.log(data);
        }
    }, [loading, data]);
    
	const onSubmit = data => {
		console.log('data', data);

		const submitData = {
            variables: {newEvent: data}
		};
		
		console.log(JSON.stringify(submitData));

		createEvent(submitData);
	};

	return (
		<div>
			<Switch>
				<Route path='/event/form'>
					<EventForm onSubmit={onSubmit} />
				</Route>
				<Route>
					<Link to='/event/form'>
						<Button type='primary'>Add</Button>
                        {data && JSON.stringify(data)}
					</Link>
					<p>Event list here</p>
				</Route>
			</Switch>
		</div>
	);
};

export default Event;