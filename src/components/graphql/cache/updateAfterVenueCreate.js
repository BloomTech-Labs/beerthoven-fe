import { ALL_VENUES } from '../queries';
/**
 * Updates the cache after a venue has been created
 */
export default function(cache, { data: { createVenue } }) {
    // read ALL_VENUES
    const allVenues = cache.readQuery({ query: ALL_VENUES });
    // write creation to the cache
    cache.writeQuery({
        query: ALL_VENUES,
        data: { venues: [ ...allVenues.venues, createVenue ] }
    });
}
