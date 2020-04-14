import { ALL_VENUES } from '../queries';

export default function (cache, { data: { deleteVenue } }) {
	const allVenues = cache.readQuery({ query: ALL_VENUES });

	cache.writeQuery({
		query : ALL_VENUES,
		data  : { venues: allVenues.venues.filter(venue => venue.id !== deleteVenue.id) },
	});
}
