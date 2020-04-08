import gql from 'graphql-tag';

export const ADD_PERSON = gql`
	mutation AddPerson($person: PersonCreateInput!) {
		addPerson(data: $person) {
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
