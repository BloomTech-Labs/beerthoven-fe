export const normalizeEventForGraphQL = (event) => {
  event.max_capacity = Number(event.max_capacity);
  event.min_capacity = Number(event.min_capacity);
  event.min_income = Number(event.min_income);
  event.deposit_amount = Number(event.deposit_amount);
  event.tickets_sold = Number(event.tickets_sold);
  event.setup_costs = Number(event.setup_costs);
  event.talent_costs = Number(event.talent_costs);
  event.event_date = event.event_date || new Date().toString();
  event.parking_max_capacity = Number(event.parking_max_capacity);
  event.sales_gross = Number(event.sales_gross);
  event.sales_net = Number(event.sales_net);

  return event;
};

export const normalizeVenueForGraphQL = (venue) => {
  venue.max_capacity = Number(venue.max_capacity);
  venue.min_income = Number(venue.min_income);
  venue.deposit_amount = Number(venue.deposit_amount);
  venue.max_decibel = Number(venue.max_decibel);
  venue.parking_max_capacity = Number(venue.parking_max_capacity);

  return venue;
};
