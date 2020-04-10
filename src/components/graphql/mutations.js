import gql from 'graphql-tag';

export const CREATE_PERSON = gql`
	mutation {
		createPerson(data: PersonCreateInput) {
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
