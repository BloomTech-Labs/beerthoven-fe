import { ALL_EVENTS } from '../queries';
/**
 * Updates the cache after an event has been created
 */
export default function (cache, { data: { createEvent } }) {
	// read ALL_EVENTS
	const allEvents = cache.readQuery({ query: ALL_EVENTS });
	// write creation to the cache
	cache.writeQuery({
		query : ALL_EVENTS,
		data  : {
			events: [
				...allEvents.events,
				createEvent,
			],
		},
	});
}
