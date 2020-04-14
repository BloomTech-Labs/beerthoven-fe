import { ALL_PERSONS } from '../queries';
/**
 * Updates the cache after a person has been updated
 */
export default function(cache, { data: { updatePerson } }) {
    // read ALL_PERSONS
    const allPersons = cache.readQuery({ query: ALL_PERSONS });
    // write update to the cache
    cache.writeQuery({
        query: ALL_PERSONS,
        data: { persons: allPersons.persons.map(person => {
            // find the person that was updated and
            // update the cache,
            if(person.id === updatePerson.id) {
                return { ...person, ...updatePerson };
            }
            return person;
        }) }
    });
}
