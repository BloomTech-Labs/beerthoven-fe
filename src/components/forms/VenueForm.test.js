import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render, wait } from '@testing-library/react';
import { createMemoryHistory } from "history";
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router';
import venue from '../../test-data/venue';
import client from '../graphql/client';
import VenueForm from './VenueForm';


//to see if mock info is able to be retrieved 
const onSubmit = jest.fn()

describe(`Event Form Component`, () => {
	beforeEach(cleanup);
	afterEach(cleanup)
	it(`renders a component that uses withRouter`, async () => {
		const history = createMemoryHistory()
		const route = '/some-route'
		history.push(route)
		const { container } = render(
			<ApolloProvider client={client}>
				<Router history={history}><VenueForm /></Router>
			</ApolloProvider>
		)

		expect(container.firstChild).toMatchSnapshot();
	})



	it(`should fetch the required data`, async () => {
		const history = await createMemoryHistory()
		const { getByLabelText, getByText } = await render(
			<ApolloProvider client={client}>
				<Router history={history}><VenueForm venue={venue} /></Router>
			</ApolloProvider>
		)

		const nameNode = await getByLabelText('Name');
		const venueTypeNode = await getByLabelText('Venue Type');
		const addressNode = await getByLabelText('Address');
		const cityNode = await getByLabelText('City');
		const stateNode = await getByLabelText('State');
		const zipCodeNode = await getByLabelText('Zip code');
		const maxCapacityNode = await getByLabelText('Max Capacity');
		const minimumIncomeNode = await getByLabelText('Min Income');
		const depositAmountNode = await getByLabelText('Deposit Amount');
		const alcoholBeerServedNode = await getByLabelText('Beer Served');
		const alcoholWineServedNode = await getByLabelText('Wine Served');
		const smokingAllowedNode = await getByLabelText('Smoking Allowed');
		const under21Node = await getByLabelText('Under 21 Allowed');
		const under18Node = await getByLabelText('Under 18 Allowed');
		const wheelchairNode = await getByLabelText('Wheelchair Accessible');
		const alcoholSpiritsServedNode = await getByLabelText('Alcohol Spirits Served');
		const foodServedNode = await getByLabelText('Food Served');
		const tabCCertifiedNode = await getByLabelText('TabC Certified');
		const indoorVenueNode = await getByLabelText('Indoor Venue');
		const outdoorVenueNode = await getByLabelText('Outdoor Venue');
		const parkingLotAvailableNode = await getByLabelText('Parking Lot Available').children[0];


		const submitBtn = await getByText('Submit');


		wait(() => {
			fireEvent.change(nameNode, { target: { value: venue.name } });
			fireEvent.change(venueTypeNode, { target: { value: venue.venue_type } });
			fireEvent.change(addressNode, { target: { value: venue.address } });
			fireEvent.change(cityNode, { target: { value: venue.city } });
			fireEvent.change(stateNode, { target: { value: venue.state } });
			fireEvent.change(zipCodeNode, { target: { value: venue.zip } });
			fireEvent.change(maxCapacityNode, { target: { value: venue.max_capacity } });
			fireEvent.change(minimumIncomeNode, { target: { value: venue.min_income } });
			fireEvent.change(depositAmountNode, { target: { value: venue.deposit_amount } });
			fireEvent.change(alcoholBeerServedNode, { target: { value: venue.alcohol_beer_provided } });
			fireEvent.change(alcoholWineServedNode, { target: { value: venue.alcohol_wine_provided } });

			fireEvent.submit(submitBtn); //test is red when fireEvent.submit()

			fireEvent.change(parkingLotAvailableNode, { target: { value: venue.parking_lot_available } });
			fireEvent.change(smokingAllowedNode, { target: { value: venue.smoking_allowed } });
			fireEvent.change(under21Node, { target: { value: venue.under21_allowed } });
			fireEvent.change(under18Node, { target: { value: venue.under18_allowed } });
			fireEvent.change(wheelchairNode, { target: { value: venue.wheelchair_accessible } });
			fireEvent.change(alcoholSpiritsServedNode, { target: { value: venue.alcohol_spirits_served } });
			fireEvent.change(foodServedNode, { target: { value: venue.food_served } });
			fireEvent.change(tabCCertifiedNode, { target: { value: venue.smoking_allowed } });
			fireEvent.change(indoorVenueNode, { target: { value: venue.indoor_venue } });
			fireEvent.change(outdoorVenueNode, { target: { value: venue.outdoor_venue } });
		});



		await onSubmit(venue)
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalled();
		expect(onSubmit).toHaveBeenCalled()

	})

	it('Data matches required mock data as expected', async () => {

		expect(onSubmit).toHaveBeenCalledWith({
			name: 'Biggest Venue',
			venue_type: 'Large',
			address: '1200 lane',
			city: 'The big city',
			state: 'NY',
			zip: '14552',
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
			opening_time: '7am',
			closing_time: '9pm',
			dance_floor_size: 'Pretty Big',
			indoor_venue: false,
			outdoor_venue: true,
			parking_lot_available: true,
			parking_max_capacity: 1200,
			tabc_certified: true,
		});
	})


})

// import React from 'react';
// import { render, fireEvent, cleanup, wait } from '@testing-library/react';
// import VenueForm from './VenueForm';
// import venue from '../../test-data/venue';

// beforeEach(cleanup);

// test('all data is submitted', async () => {
// 	const onSubmit = jest.fn();

// 	const { await getByLabelText, getByText } = render(<VenueForm onSubmit={onSubmit} />);

// 	// get nodes
// 	const nameNode = await getByLabelText('Name');
// 	const venueTypeNode = await getByLabelText('Venue Type');
// 	const addressNode = await getByLabelText('Address');
// 	const cityNode = await getByLabelText('City');
// 	const stateNode = await getByLabelText('State');
// 	const zipCodeNode = await getByLabelText('Zip code');
// 	const maxCapacityNode = await getByLabelText('Max Capacity');
// 	const minimumIncomeNode = await getByLabelText('Min Income');
// 	const depositAmountNode = await getByLabelText('Deposit Amount');
// 	const smokingAllowedNode = await getByLabelText('Smoking Allowed');
// 	const under21Node = await getByLabelText('Under 21 Allowed');
// 	const under18Node = await getByLabelText('Under 18 Allowed');
// 	const wheelchairNode = await getByLabelText('Wheelchair Accessible');
// 	const alcoholBeerServedNode = await getByLabelText('Beer Served');
// 	const alcoholWineServedNode = await getByLabelText('Wine Served');
// 	const alcoholSpiritsServedNode = await getByLabelText('Alcohol Spririts Served');
// 	const foodServedNode = await getByLabelText('Food Served');
// 	const maxDecibelNode = await getByLabelText('Max Decibel');
// 	const openingTimeNode = await getByLabelText('Opening Time');
// 	const closingTimeNode = await getByLabelText('Closing Time');
// 	const danceFloorSizeNode = await getByLabelText('Dance Floor Size');
// 	const tabCCertifiedNode = await getByLabelText('TabC Certified');
// 	const indoorVenueNode = await getByLabelText('Indoor Venue');
// 	const outdoorVenueNode = await getByLabelText('Outdoor Venue');
// 	const parkingLotAvailableNode = await getByLabelText('Parking Lot Available');
// 	const parkingMaxCapacityNode = await getByLabelText('Parking Max Capacity');
// 	const submitBtn = getByText('Submit');

// 	// set field values
// 	fireEvent.change(nameNode, { target: { value: venue.name } });
// 	fireEvent.change(venueTypeNode, { target: { value: venue.venue_type } });
// 	fireEvent.change(addressNode, { target: { value: venue.address } });
// 	fireEvent.change(cityNode, { target: { value: venue.city } });
// 	fireEvent.change(stateNode, { target: { value: venue.state } });
// 	fireEvent.change(zipCodeNode, { target: { value: venue.zip } });
// 	fireEvent.change(maxCapacityNode, { target: { value: venue.max_capacity } });
// 	fireEvent.change(minimumIncomeNode, { target: { value: venue.min_income } });
// 	fireEvent.change(depositAmountNode, { target: { value: venue.deposit_amount } });
// 	fireEvent.change(smokingAllowedNode, { target: { value: venue.smoking_allowed } });
// 	fireEvent.change(under21Node, { target: { value: venue.under21_allowed } });
// 	fireEvent.change(under18Node, { target: { value: venue.under18_allowed } });
// 	fireEvent.change(wheelchairNode, { target: { value: venue.wheelchair_accessible } });
// 	fireEvent.change(alcoholBeerServedNode, { target: { value: venue.alcohol_beer_served } });
// 	fireEvent.change(alcoholWineServedNode, { target: { value: venue.alcohol_wine_served } });
// 	fireEvent.change(alcoholSpiritsServedNode, { target: { value: venue.alcohol_spirits_served } });
// 	fireEvent.change(foodServedNode, { target: { value: venue.food_served } });
// 	fireEvent.change(maxDecibelNode, { target: { value: venue.max_decibel } });
// 	fireEvent.change(openingTimeNode, { target: { value: venue.opening_time } });
// 	fireEvent.change(closingTimeNode, { target: { value: venue.closing_time } });
// 	fireEvent.change(danceFloorSizeNode, { target: { value: venue.dance_floor_size } });
// 	fireEvent.change(tabCCertifiedNode, { target: { value: venue.smoking_allowed } });
// 	fireEvent.change(indoorVenueNode, { target: { value: venue.indoor_venue } });
// 	fireEvent.change(outdoorVenueNode, { target: { value: venue.outdoor_venue } });
// 	fireEvent.change(parkingLotAvailableNode, { target: { value: venue.parking_lot_available } });
// 	fireEvent.change(parkingMaxCapacityNode, { target: { value: venue.parking_max_capacity } });

// 	// submit form
// 	fireEvent.submit(submitBtn);

// 	// because the antd form onFinish is async, wait for our
// 	// submit to be called
// 	await wait(() => {
// 		expect(onSubmit).toHaveBeenCalledTimes(1);
// 		expect(onSubmit).toHaveBeenCalledWith(venue);
// 	});
// });
