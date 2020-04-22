import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, wait } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router";
import venue from "../../test-data/venue";
import client from "../graphql/client";
import VenueForm from "./VenueForm";

//to see if mock info is able to be retrieved
const onSubmit = jest.fn();

describe(`Event Form Component`, () => {
  beforeEach(cleanup);
  afterEach(cleanup);
  it(`renders a component that uses withRouter`, async () => {
    const history = createMemoryHistory();
    const route = "/some-route";
    history.push(route);
    const { container } = render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <VenueForm />
        </Router>
      </ApolloProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it(`should fetch the required data`, async () => {
    const history = await createMemoryHistory();
    const { getByTestId, getByLabelText, getByText } = await render(
      <ApolloProvider client={client}>
        <Router history={history}>
          <VenueForm venue={venue} />
        </Router>
      </ApolloProvider>
    );

    const nameNode = await getByLabelText("Name");
    const venueTypeNode = await getByLabelText("Venue Type");
    const addressNode = await getByLabelText("Address");
    const cityNode = await getByLabelText("City");
    const stateNode = await getByLabelText("State");
    const zipCodeNode = await getByLabelText("Zip code");
    const maxCapacityNode = await getByLabelText("Max Capacity");
    const minimumIncomeNode = await getByLabelText("Min Income");
    const depositAmountNode = await getByLabelText("Deposit Amount");
    const alcoholBeerServedNode = await getByTestId("smoking_allowed");
    const alcoholWineServedNode = await getByTestId("alcohol_wine_provided");
    const smokingAllowedNode = await getByTestId("smoking_allowed");
    const under21Node = await getByTestId("under21_allowed");
    const under18Node = await getByTestId("under18_allowed");
    const wheelchairNode = await getByTestId("wheelchair_accessible");
    const alcoholSpiritsServedNode = await getByTestId(
      "alcohol_spirits_provided"
    );
    const foodServedNode = await getByTestId("food_served");
    const tabCCertifiedNode = await getByTestId("tabc_certified");
    const indoorVenueNode = await getByTestId("indoor_venue");
    const outdoorVenueNode = await getByTestId("outdoor_venue");
    const parkingLotAvailableNode = await getByTestId("parking_lot_available")
      .children[0];

    const submitBtn = await getByText("Submit");

    wait(() => {
      fireEvent.change(nameNode, { target: { value: venue.name } });
      fireEvent.change(venueTypeNode, { target: { value: venue.venue_type } });
      fireEvent.change(addressNode, { target: { value: venue.address } });
      fireEvent.change(cityNode, { target: { value: venue.city } });
      fireEvent.change(stateNode, { target: { value: venue.state } });
      fireEvent.change(zipCodeNode, { target: { value: venue.zip } });
      fireEvent.change(maxCapacityNode, {
        target: { value: venue.max_capacity },
      });
      fireEvent.change(minimumIncomeNode, {
        target: { value: venue.min_income },
      });
      fireEvent.change(depositAmountNode, {
        target: { value: venue.deposit_amount },
      });
      fireEvent.change(alcoholBeerServedNode, {
        target: { value: venue.alcohol_beer_provided },
      });
      fireEvent.change(alcoholWineServedNode, {
        target: { value: venue.alcohol_wine_provided },
      });

      fireEvent.submit(submitBtn); //test is red when fireEvent.submit()

      fireEvent.change(parkingLotAvailableNode, {
        target: { value: venue.parking_lot_available },
      });
      fireEvent.change(smokingAllowedNode, {
        target: { value: venue.smoking_allowed },
      });
      fireEvent.change(under21Node, {
        target: { value: venue.under21_allowed },
      });
      fireEvent.change(under18Node, {
        target: { value: venue.under18_allowed },
      });
      fireEvent.change(wheelchairNode, {
        target: { value: venue.wheelchair_accessible },
      });
      fireEvent.change(alcoholSpiritsServedNode, {
        target: { value: venue.alcohol_spirits_served },
      });
      fireEvent.change(foodServedNode, {
        target: { value: venue.food_served },
      });
      fireEvent.change(tabCCertifiedNode, {
        target: { value: venue.smoking_allowed },
      });
      fireEvent.change(indoorVenueNode, {
        target: { value: venue.indoor_venue },
      });
      fireEvent.change(outdoorVenueNode, {
        target: { value: venue.outdoor_venue },
      });
    });

    await onSubmit(venue);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });

  it("Data matches required mock data as expected", async () => {
    expect(onSubmit).toHaveBeenCalledWith({
      name: "Biggest Venue",
      venue_type: "Large",
      address: "1200 lane",
      city: "The big city",
      state: "NY",
      zip: "14552",
      max_capacity: 1204,
      min_income: 25000,
      deposit_amount: 24000,
      smoking_allowed: false,
      under21_allowed: true,
      under18_allowed: false,
      wheelchair_accessible: false,
      alcohol_beer_provided: true,
      alcohol_wine_provided: true,
      alcohol_spirits_provided: true,
      food_served: true,
      max_decibel: 2000,
      opening_time: "7am",
      closing_time: "9pm",
      dance_floor_size: "Pretty Big",
      indoor_venue: false,
      outdoor_venue: true,
      parking_lot_available: true,
      parking_max_capacity: 1200,
      tabc_certified: true,
    });
  });
});
