import { ALL_VENUES } from '../queries';
/**
 * Updates the cache after a venue has been updated
 */
export default function(cache, { data: { updateVenue } }) {
    // read ALL_VENUES
    const allVenues = cache.readQuery({ query: ALL_VENUES });
    // write update to the cache
    cache.writeQuery({
        query: ALL_VENUES,
        data: { venues: allVenues.venues.map(venue => {
            // find the venue that was updated and
            // update the cache,
            if(venue.id === updateVenue.id) {
                return { ...venue, ...updateVenue };
            }
            return venue;
        }) }
    });
}