import { ALL_PERSONS } from '../queries';
/**
 * Updates the cache after a person has been deleted
 */
export default function(cache, { data: { deletePerson } }) {
    // read ALL_PERSONS
    const allPersons = cache.readQuery({ query: ALL_PERSONS });

    // write delete to the cache
    cache.writeQuery({
        query : ALL_PERSONS,
        data  : { persons: allPersons.persons.filter(person => person.id !== deletePerson.id) },
    });
}