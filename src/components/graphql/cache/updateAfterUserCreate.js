import { ALL_USERS } from '../queries';

export default function (cache, { data: { createUser } }) {
	const allUsers = cache.readQuery({ query: ALL_USERS });
	cache.writeQuery({
		query : ALL_USERS,
		data  : {
			users : [
				...allUsers.users,
				createUser,
			],
		},
	});
}
