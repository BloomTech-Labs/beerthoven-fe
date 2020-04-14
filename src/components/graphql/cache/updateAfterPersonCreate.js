import { ALL_PERSONS } from '../queries';
/**
 * Updates the cache after a person has been created
 */
export default function(cache, { data: { createPerson } }) {
    // read ALL_PERSONS
    const allPersons = cache.readQuery({ query: ALL_PERSONS });
    // write creation to the cache
    cache.writeQuery({
        query: ALL_PERSONS,
        data: { persons: [ ...allPersons.persons, createPerson ] }
    });
}
