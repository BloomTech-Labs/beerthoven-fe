import { ALL_USERS } from '../queries';

export default function (cache, { data: { deleteUser } }) {
	const allUsers = cache.readQuery({ query: ALL_USERS });

	cache.writeQuery({
		query : ALL_USERS,
		data  : { users: allUsers.users.filter(user => user.id !== deleteUser.id) },
	});
}
