import updateAfterVenueDelete from "./updateAfterVenueDelete";
import { ALL_VENUES } from "../queries";
import { list as venues } from "../../../test-data/venues";

test("Cache is updated successfully", () => {
  const cache = {
    readQuery: jest.fn(),
    writeQuery: jest.fn(),
  };

  cache.readQuery.mockReturnValue({
    venues,
  });

  const dataParam = {
    data: {
      deleteVenue: {
        id: venues[0].id,
      },
    },
  };

  updateAfterVenueDelete(cache, dataParam);

  // expect a query to be read
  expect(cache.readQuery).toHaveBeenCalledTimes(1);
  expect(cache.readQuery).toHaveBeenCalledWith({ query: ALL_VENUES });

  // expect a query to be written to
  expect(cache.writeQuery).toHaveBeenCalledTimes(1);
  expect(cache.writeQuery).toHaveBeenCalledWith({
    query: ALL_VENUES,
    data: {
      venues: venues.filter((venue) => venue.id !== venues[0].id),
    },
  });
});
