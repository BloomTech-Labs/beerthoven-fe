import gql from 'graphql-tag';

export const ALL_PERSONS = gql`
	query allpersons {
		persons {
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

export const GET_PERSON = gql`
	query getPerson($id: ID!) {
		person(where: { id: $id }) {
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

export const ALL_EVENTS = gql`
	query allevents {
		events {
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

export const GET_EVENT = gql`
	query getEvent($id: ID!) {
		event(where: { id: $id }) {
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

export const ALL_VENUES = gql`
	query allVenues {
		venues {
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

export const GET_VENUE = gql`
	query getVenue($id: ID!) {
		venue(where: { id: $id }) {
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

export const ALL_USERS = gql`
	query allUsers {
		users {
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

export const GET_USER = gql`
	query getUser($id: ID!) {
		user(where: { id: $id }) {
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
