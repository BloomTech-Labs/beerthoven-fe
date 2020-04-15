import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import VenueForm from './VenueForm';
import venue from '../../test-data/venue';

beforeEach(cleanup);

test('all data is submitted', async () => {
	const onSubmit = jest.fn();

	const { getByLabelText, getByText } = render(<VenueForm onSubmit={onSubmit} />);

	// get nodes
	const nameNode = getByLabelText('Name');
	const venueTypeNode = getByLabelText('Venue Type');
	const addressNode = getByLabelText('Address');
	const cityNode = getByLabelText('City');
	const stateNode = getByLabelText('State');
	const zipCodeNode = getByLabelText('Zip code');
	const maxCapacityNode = getByLabelText('Max Capacity');
	const minimumIncomeNode = getByLabelText('Min Income');
	const depositAmountNode = getByLabelText('Deposit Amount');
	const smokingAllowedNode = getByLabelText('Smoking Allowed');
	const under21Node = getByLabelText('Under 21 Allowed');
	const under18Node = getByLabelText('Under 18 Allowed');
	const wheelchairNode = getByLabelText('Wheelchair Accessible');
	const alcoholBeerServedNode = getByLabelText('Beer Served');
	const alcoholWineServedNode = getByLabelText('Wine Served');
	const alcoholSpiritsServedNode = getByLabelText('Alcohol Spririts Served');
	const foodServedNode = getByLabelText('Food Served');
	const maxDecibelNode = getByLabelText('Max Decibel');
	const openingTimeNode = getByLabelText('Opening Time');
	const closingTimeNode = getByLabelText('Closing Time');
	const danceFloorSizeNode = getByLabelText('Dance Floor Size');
	const tabCCertifiedNode = getByLabelText('TabC Certified');
	const indoorVenueNode = getByLabelText('Indoor Venue');
	const outdoorVenueNode = getByLabelText('Outdoor Venue');
	const parkingLotAvailableNode = getByLabelText('Parking Lot Available');
	const parkingMaxCapacityNode = getByLabelText('Parking Max Capacity');
	const submitBtn = getByText('Submit');

	// set field values
	fireEvent.change(nameNode, { target: { value: venue.name } });
	fireEvent.change(venueTypeNode, { target: { value: venue.venue_type } });
	fireEvent.change(addressNode, { target: { value: venue.address } });
	fireEvent.change(cityNode, { target: { value: venue.city } });
	fireEvent.change(stateNode, { target: { value: venue.state } });
	fireEvent.change(zipCodeNode, { target: { value: venue.zip } });
	fireEvent.change(maxCapacityNode, { target: { value: venue.max_capacity } });
	fireEvent.change(minimumIncomeNode, { target: { value: venue.min_income } });
	fireEvent.change(depositAmountNode, { target: { value: venue.deposit_amount } });
	fireEvent.change(smokingAllowedNode, { target: { value: venue.smoking_allowed } });
	fireEvent.change(under21Node, { target: { value: venue.under21_allowed } });
	fireEvent.change(under18Node, { target: { value: venue.under18_allowed } });
	fireEvent.change(wheelchairNode, { target: { value: venue.wheelchair_accessible } });
	fireEvent.change(alcoholBeerServedNode, { target: { value: venue.alcohol_beer_served } });
	fireEvent.change(alcoholWineServedNode, { target: { value: venue.alcohol_wine_served } });
	fireEvent.change(alcoholSpiritsServedNode, { target: { value: venue.alcohol_spirits_served } });
	fireEvent.change(foodServedNode, { target: { value: venue.food_served } });
	fireEvent.change(maxDecibelNode, { target: { value: venue.max_decibel } });
	fireEvent.change(openingTimeNode, { target: { value: venue.opening_time } });
	fireEvent.change(closingTimeNode, { target: { value: venue.closing_time } });
	fireEvent.change(danceFloorSizeNode, { target: { value: venue.dance_floor_size } });
	fireEvent.change(tabCCertifiedNode, { target: { value: venue.smoking_allowed } });
	fireEvent.change(indoorVenueNode, { target: { value: venue.indoor_event } });
	fireEvent.change(outdoorVenueNode, { target: { value: venue.outdoor_event } });
	fireEvent.change(parkingLotAvailableNode, { target: { value: venue.parking_lot_available } });
	fireEvent.change(parkingMaxCapacityNode, { target: { value: venue.parking_max_capacity } });

	// submit form
	fireEvent.submit(submitBtn);

	// because the antd form onFinish is async, wait for our
	// submit to be called
	await wait(() => {
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalledWith(venue);
	});
});
