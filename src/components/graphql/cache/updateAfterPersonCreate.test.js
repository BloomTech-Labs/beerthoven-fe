import updateAfterPersonCreate from "./updateAfterPersonCreate";
import { ALL_PERSONS } from "../queries";
import { list as persons } from "../../../test-data/people";
import newPerson from "../../../test-data/person";

test("Cache is added to successfully", () => {
  const cache = {
    readQuery: jest.fn(),
    writeQuery: jest.fn(),
  };

  cache.readQuery.mockReturnValue({
    persons,
  });

  const dataParam = {
    data: {
      createPerson: newPerson,
    },
  };

  updateAfterPersonCreate(cache, dataParam);

  // expect a query to be read
  expect(cache.readQuery).toHaveBeenCalledTimes(1);
  expect(cache.readQuery).toHaveBeenCalledWith({ query: ALL_PERSONS });

  // expect a query to be written to
  expect(cache.writeQuery).toHaveBeenCalledTimes(1);
  expect(cache.writeQuery).toHaveBeenCalledWith({
    query: ALL_PERSONS,
    data: {
      persons: [...persons, newPerson],
    },
  });
});
