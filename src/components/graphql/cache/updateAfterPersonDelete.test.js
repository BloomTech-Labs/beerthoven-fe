import updateAfterPersonDelete from "./updateAfterPersonDelete";
import { ALL_PERSONS } from "../queries";
import { list as persons } from "../../../test-data/people";

test("Cache is updated successfully", () => {
  const cache = {
    readQuery: jest.fn(),
    writeQuery: jest.fn(),
  };

  cache.readQuery.mockReturnValue({
    persons,
  });

  const dataParam = {
    data: {
      deletePerson: {
        id: persons[0].id,
      },
    },
  };

  updateAfterPersonDelete(cache, dataParam);

  // expect a query to be read
  expect(cache.readQuery).toHaveBeenCalledTimes(1);
  expect(cache.readQuery).toHaveBeenCalledWith({ query: ALL_PERSONS });

  // expect a query to be written to
  expect(cache.writeQuery).toHaveBeenCalledTimes(1);
  expect(cache.writeQuery).toHaveBeenCalledWith({
    query: ALL_PERSONS,
    data: {
      persons: persons.filter((person) => person.id !== persons[0].id),
    },
  });
});
