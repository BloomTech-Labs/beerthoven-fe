import updateAfterEventDelete from "./updateAfterEventDelete";
import { ALL_EVENTS } from "../queries";
import { list as events } from "../../../test-data/events";

test("Cache is updated successfully", () => {
  const cache = {
    readQuery: jest.fn(),
    writeQuery: jest.fn(),
  };

  cache.readQuery.mockReturnValue({
    events,
  });

  const dataParam = {
    data: {
      deleteEvent: {
        id: events[0].id,
      },
    },
  };

  updateAfterEventDelete(cache, dataParam);

  // expect a query to be read
  expect(cache.readQuery).toHaveBeenCalledTimes(1);
  expect(cache.readQuery).toHaveBeenCalledWith({ query: ALL_EVENTS });

  // expect a query to be written to
  expect(cache.writeQuery).toHaveBeenCalledTimes(1);
  expect(cache.writeQuery).toHaveBeenCalledWith({
    query: ALL_EVENTS,
    data: {
      events: events.filter((event) => event.id !== events[0].id),
    },
  });
});
