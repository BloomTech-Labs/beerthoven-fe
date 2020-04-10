import gql from 'graphql-tag';

export const CREATE_PERSON = gql`
	mutation createPerson($newPerson: PersonCreateInput!) {
		createPerson(data: $newPerson) {
			id
			first_name
			last_name
			phone
			address
			city
			state
			zip
		}
	}
`;
