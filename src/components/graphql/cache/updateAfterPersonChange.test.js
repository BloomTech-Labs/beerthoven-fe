import updateAfterPersonChange from "./updateAfterPersonChange";
import { ALL_PERSONS } from "../queries";
import { list as persons } from "../../../test-data/people";

test("Cache is called successfully", () => {
  const cache = {
    readQuery: jest.fn(),
    writeQuery: jest.fn(),
  };

  cache.readQuery.mockReturnValue({
    persons,
  });

  const dataParam = {
    data: {
      updatePerson: {
        id: persons[0].id,
      },
    },
  };

  updateAfterPersonChange(cache, dataParam);

  // expect a query to be read
  expect(cache.readQuery).toHaveBeenCalledTimes(1);
  expect(cache.readQuery).toHaveBeenCalledWith({ query: ALL_PERSONS });

  // expect a query to be written to
  expect(cache.writeQuery).toHaveBeenCalledTimes(1);
  expect(cache.writeQuery).toHaveBeenCalledWith({
    query: ALL_PERSONS,
    data: {
      persons,
    },
  });
});
