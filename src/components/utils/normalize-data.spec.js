
import { normalizeEventForGraphQL, normalizeVenueForGraphQL } from "./normalize-data";
import event from "../../test-data/event";
import list from "../../test-data/venue";


describe("Normalize Event for GraphQL", () => {
  it('should normalize event data?', () => {
    const mockFunc = jest.fn(cb => cb(event));

    mockFunc((event) => normalizeEventForGraphQL(event))

    expect(mockFunc).toHaveBeenCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveReturned();
    
    expect(typeof event.max_capacity).toBe('number');
    expect(event.max_capacity).toEqual(150)
    expect(event.min_capacity).toEqual(20);
    expect(typeof event.event_date).toBe('string');
    expect(event.smoking_allowed).toBeFalsy();
  });
})

describe("Normalize Venue for GraphQL", () => {
  it('should ', () => {
    const mockFunc = jest.fn(cb => cb(list));

    mockFunc((list) => normalizeVenueForGraphQL(list));

    expect(mockFunc).toHaveBeenCalled();
    expect(mockFunc).toHaveBeenCalledTimes(1);
    expect(mockFunc).toHaveReturned();

    expect(typeof list.name).toBe('string');
    expect(list.indoor_venue).toBeFalsy();
  });
})