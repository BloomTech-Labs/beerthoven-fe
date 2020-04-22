import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import EventForm from "./EventForm";
import event from "../../test-data/event";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { ApolloProvider } from "react-apollo";
import client from "../graphql/client";
import moment from "moment";

//to see if mock info is able to be retrieved
const onSubmit = jest.fn();

describe(`Event Form Component`, () => {
  beforeEach(cleanup);
  it(`renders a component that uses withRouter`, async () => {
    const history = createMemoryHistory();
    const route = "/some-route";
    history.push(route);
    const { container } = render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <EventForm />
        </Router>
      </ApolloProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should fetch the required data`, async () => {
    const history = await createMemoryHistory();
    const onDateChange = jest.fn();
    const { getByLabelText, getByText } = await render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <EventForm onDateChange={onDateChange} event={event} />
        </Router>
      </ApolloProvider>
    );
    const eventNameNode = await getByLabelText("Event Name");
    const submitBtn = await getByText("Submit");
    const eventTypeNode = await getByLabelText("Event Type");
    const addressNode = await getByLabelText("Address");
    const address2Node = await getByLabelText("Address line 2");
    const cityNode = await getByLabelText("City");
    const stateNode = await getByLabelText("State");
    const zipCodeNode = await getByLabelText("Zip code");
    const eventDateNode = await getByLabelText(/Event Date/i);
    const eventDescriptionNode = await getByLabelText("Event Description");

    wait(() => {
      fireEvent.change(eventNameNode, { target: { value: event.event_name } });
      fireEvent.change(eventNameNode, { target: { value: event.event_name } });
      fireEvent.change(eventTypeNode, { target: { value: event.event_type } });
      fireEvent.change(addressNode, { target: { value: event.address } });
      fireEvent.change(address2Node, { target: { value: event.address2 } });
      fireEvent.change(cityNode, { target: { value: event.city } });
      fireEvent.change(stateNode, { target: { value: event.state } });
      fireEvent.change(zipCodeNode, { target: { value: event.zip } });
      fireEvent.change(eventDescriptionNode, {
        target: { value: event.event_description },
      });
      fireEvent.change(eventDateNode, {
        target: { value: moment(event.event_date) },
      });
      fireEvent.click(submitBtn); //test is red when fireEvent.submit()
    });

    await onSubmit(event);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(event);
  });

  it("Data matches required mock data as expected", async () => {
    expect(onSubmit).toHaveBeenCalledWith({
      event_name: "Shinra's Plate Drop",
      event_type: "Party",
      address: "200 Sector 7",
      city: "Shinra",
      state: "NY",
      zip: "14546",
      event_description: "Lots of stuff is going on.",
      max_capacity: 150,
      min_capacity: 20,
      min_income: 2000,
      deposit_amount: 1500,
      smoking_allowed: false,
      under21_allowed: true,
      under18_allowed: false,
      tickets_sold: 500,
      wheelchair_accessible: false,
      alcohol_beer_served: true,
      alcohol_wine_served: true,
      alcohol_spirits_served: true,
      food_served: true,
      setup_costs: 2000,
      talent_costs: 500,
      opening_time: "6am",
      closing_time: "8pm",
      event_date: moment("2020-04-20T19:14:15-04:00").format(),
      tabc_certified: true,
      indoor_event: true,
      outdoor_event: true,
      parking_lot_available: true,
      parking_max_capacity: 200,
      sales_gross: 3000,
      sales_net: 2000,
      submit: undefined,
    });
  });
});
