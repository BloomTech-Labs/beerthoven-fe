import { ALL_EVENTS } from '../queries';

export default function (cache, { data: { deleteEvent } }) {
	const allEvents = cache.readQuery({ query: ALL_EVENTS });

	cache.writeQuery({
		query : ALL_EVENTS,
		data  : { events: allEvents.events.filter(event => event.id !== deleteEvent.id) },
	});
}
