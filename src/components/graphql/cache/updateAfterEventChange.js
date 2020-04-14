import { ALL_EVENTS } from '../queries';
/**
 * Updates the cache after an event has been updated
 */
export default function (cache, { data: { updateEvent } }) {
	// read ALL_EVENTS
	const allEvents = cache.readQuery({ query: ALL_EVENTS });
	// write update to the cache
	cache.writeQuery({
		query : ALL_EVENTS,
		data  : {
			events : allEvents.events.map(event => {
				// find the event that was updated and
				// update the cache,
				if (event.id === updateEvent.id) {
					return { ...event, ...updateEvent };
				}
				return event;
			}),
		},
	});
}
