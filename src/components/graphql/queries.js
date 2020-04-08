import gql from 'graphql-tag';

export const allPersons = gql`
	query people($person: String) {
		people(where: { person: $person }) {
			id
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
