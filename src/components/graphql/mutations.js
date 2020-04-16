import gql from 'graphql-tag';

export const CREATE_PERSON = gql`
	mutation createPerson($newPerson: PersonCreateInput!) {
		createPerson(data: $newPerson) {
			id
			date_created
			first_name
			last_name
			email
			phone
			address
			address2
			city
			state
			zip
		}
	}
`;

export const UPDATE_PERSON = gql`
	mutation updatePerson($id: ID!, $updates: PersonUpdateInput!) {
		updatePerson(data: $updates, where: { id: $id }) {
			id
			date_created
			first_name
			last_name
			email
			phone
			address
			address2
			city
			state
			zip
		}
	}
`;

export const DELETE_PERSON = gql`
	mutation deletePerson($id: ID!) {
		deletePerson(where: { id: $id }) {
			id
		}
	}
`;

export const CREATE_EVENT = gql`
	mutation createEvent($newEvent: EventCreateInput!) {
		createEvent(data: $newEvent) {
			id
			date_created
			eventbriteEventId
			event_name
			event_type
			address
			address2
			city
			state
			zip
			event_description
			max_capacity
			min_capacity
			min_income
			deposit_amount
			smoking_allowed
			under21_allowed
			under18_allowed
			tickets_sold
			wheelchair_accessible
			alcohol_beer_served
			alcohol_wine_served
			alcohol_spirits_served
			food_served
			setup_costs
			talent_costs
			opening_time
			closing_time
			event_date
			tabc_certified
			indoor_event
			outdoor_event
			parking_lot_available
			parking_max_capacity
			sales_gross
			sales_net
		}
	}
`;

export const UPDATE_EVENT = gql`
	mutation updateEvent($id: ID!, $updates: EventUpdateInput!) {
		updateEvent(data: $updates, where: { id: $id }) {
			id
			date_created
			eventbriteEventId
			event_name
			event_type
			address
			address2
			city
			state
			zip
			event_description
			max_capacity
			min_capacity
			min_income
			deposit_amount
			smoking_allowed
			under21_allowed
			under18_allowed
			tickets_sold
			wheelchair_accessible
			alcohol_beer_served
			alcohol_wine_served
			alcohol_spirits_served
			food_served
			setup_costs
			talent_costs
			opening_time
			closing_time
			event_date
			tabc_certified
			indoor_event
			outdoor_event
			parking_lot_available
			parking_max_capacity
			sales_gross
			sales_net
		}
	}
`;

export const DELETE_EVENT = gql`
	mutation deleteEvent($id: ID!) {
		deleteEvent(where: { id: $id }) {
			id
		}
	}
`;

export const CREATE_VENUE = gql`
	mutation createVenue($newVenue: VenueCreateInput!) {
		createVenue(data: $newVenue) {
			id
			date_created
			name
			venue_type
			address
			city
			state
			zip
			max_capacity
			min_income
			deposit_amount
			smoking_allowed
			under21_allowed
			under18_allowed
			wheelchair_accessible
			alcohol_beer_provided
			alcohol_wine_provided
			alcohol_spirits_provided
			food_served
			max_decibel
			opening_time
			closing_time
			dance_floor_size
			indoor_venue
			outdoor_venue
			parking_lot_available
			parking_max_capacity
			tabc_certified
		}
	}
`;

export const UPDATE_VENUE = gql`
	mutation updateVenue($id: ID!, $updates: VenueUpdateInput!) {
		updateVenue(data: $updates, where: { id: $id }) {
			id
			date_created
			name
			venue_type
			address
			city
			state
			zip
			max_capacity
			min_income
			deposit_amount
			smoking_allowed
			under21_allowed
			under18_allowed
			wheelchair_accessible
			alcohol_beer_provided
			alcohol_wine_provided
			alcohol_spirits_provided
			food_served
			max_decibel
			opening_time
			closing_time
			dance_floor_size
			indoor_venue
			outdoor_venue
			parking_lot_available
			parking_max_capacity
			tabc_certified
		}
	}
`;

export const DELETE_VENUE = gql`
	mutation deleteVenue($id: ID!) {
		deleteVenue(where: { id: $id }) {
			id
		}
	}
`;
export const CREATE_USER = gql`
	mutation createUser($newUser: UserCreateInput!) {
		createUser(data: $newUser) {
			id
			date_created
			email
			person {
				id
			}
			role
		}
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser($id: ID!, $updates: UserUpdateInput!) {
		updateUser(data: $updates, where: { id: $id }) {
			id
			date_created
			email
			person {
				id
			}
			role
		}
	}
`;

export const DELETE_USER = gql`
	mutation deleteUser($id: ID!) {
		deleteUser(where: { id: $id }) {
			id
		}
	}
`;
