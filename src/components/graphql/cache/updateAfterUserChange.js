import { ALL_USERS } from '../queries';

export default function (cache, { data: { updateUser } }) {
	const allUsers = cache.readQuery({ query: ALL_USERS });
	cache.writeQuery({
		query : ALL_USERS,
		data  : {
			users : allUsers.users.map(user => {
				if (user.id === updateUser.id) {
					return { ...user, ...updateUser };
				}
				return user;
			}),
		},
	});
}
