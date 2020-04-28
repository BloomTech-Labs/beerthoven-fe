import updateAfterVenueCreate from "./updateAfterVenueCreate";
import { ALL_VENUES } from "../queries";
import { list as venues } from "../../../test-data/venues";
import newVenue from "../../../test-data/venue";

test("Cache is added to successfully", () => {
  const cache = {
    readQuery: jest.fn(),
    writeQuery: jest.fn(),
  };

  cache.readQuery.mockReturnValue({
    venues,
  });

  const dataParam = {
    data: {
      createVenue: newVenue,
    },
  };

  updateAfterVenueCreate(cache, dataParam);

  // expect a query to be read
  expect(cache.readQuery).toHaveBeenCalledTimes(1);
  expect(cache.readQuery).toHaveBeenCalledWith({ query: ALL_VENUES });

  // expect a query to be written to
  expect(cache.writeQuery).toHaveBeenCalledTimes(1);
  expect(cache.writeQuery).toHaveBeenCalledWith({
    query: ALL_VENUES,
    data: {
      venues: [...venues, newVenue],
    },
  });
});
