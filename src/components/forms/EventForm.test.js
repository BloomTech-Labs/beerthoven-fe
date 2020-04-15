import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import EventForm from './EventForm';
import event from '../../test-data/event';

beforeEach(cleanup);

test('all data is submitted', async () => {
	const onSubmit = jest.fn();

	const { getByLabelText, getByText } = render(<EventForm onSubmit={onSubmit} />);

	// get nodes
	const eventNameNode = getByLabelText('Event Name');
	const eventTypeNode = getByLabelText('Event Type');
	const addressNode = getByLabelText('Address');
	const address2Node = getByLabelText('Address line 2');
	const cityNode = getByLabelText('City');
	const stateNode = getByLabelText('State');
	const zipCodeNode = getByLabelText('Zip code');
	const eventDescriptionNode = getByLabelText('Event Description');
	const maxCapacityNode = getByLabelText('Max Capacity');
	const minimumCapacityNode = getByLabelText('Minimum Capacity');
	const minimumIncomeNode = getByLabelText('Minimum Income');
	const depositIncomeNode = getByLabelText('Deposit Income');
	const smokingAllowedNode = getByLabelText('Smoking Allowed');
	const under21Node = getByLabelText('Under 21 Allowed');
	const under18Node = getByLabelText('Under 18 Allowed');
	const wheelchairNode = getByLabelText('Wheelchair Accessible');
	const ticketsSoldNode = getByLabelText('Tickets Sold');
	const alcoholBeerServedNode = getByLabelText('Alcohol Beer Served');
	const alcoholWineServedNode = getByLabelText('Alcohol Wine Served');
	const alcoholSpiritsServedNode = getByLabelText('Alcohol Spririts Served');
	const foodServedNode = getByLabelText('Food Served');
	const setupCostsNode = getByLabelText('Setups Costs');
	const talentCostsNode = getByLabelText('Talent Costs');
	const openingTimeNode = getByLabelText('Opening Time');
	const closingTimeNode = getByLabelText('Closing Time');
	const eventDateNode = getByLabelText('Event Date');
	const tabCCertifiedNode = getByLabelText('TabC Certified');
	const indoorEventNode = getByLabelText('Indoor Event');
	const outdoorEventNode = getByLabelText('Outdoor Event');
	const parkingLotAvailableNode = getByLabelText('Parking Lot Available');
	const parkingMaxCapacityNode = getByLabelText('Parking Max Capacity');
	const salesGrossNode = getByLabelText('Sales Gross');
	const salesNetNode = getByLabelText('Sales Net');
	const submitBtn = getByText('Submit');

	// set field values
	fireEvent.change(eventNameNode, { target: { value: event.event_name } });
	fireEvent.change(eventTypeNode, { target: { value: event.event_type } });
	fireEvent.change(addressNode, { target: { value: event.address } });
	fireEvent.change(address2Node, { target: { value: event.address2 } });
	fireEvent.change(cityNode, { target: { value: event.city } });
	fireEvent.change(stateNode, { target: { value: event.state } });
	fireEvent.change(zipCodeNode, { target: { value: event.zip } });
	fireEvent.change(eventDescriptionNode, { target: { value: event.event_description } });
	fireEvent.change(maxCapacityNode, { target: { value: event.max_capacity } });
	fireEvent.change(minimumCapacityNode, { target: { value: event.min_capacity } });
	fireEvent.change(minimumIncomeNode, { target: { value: event.min_income } });
	fireEvent.change(depositIncomeNode, { target: { value: event.deposit_amount } });
	fireEvent.change(smokingAllowedNode, { target: { value: event.smoking_allowed } });
	fireEvent.change(under21Node, { target: { value: event.under21_allowed } });
	fireEvent.change(under18Node, { target: { value: event.under18_allowed } });
	fireEvent.change(wheelchairNode, { target: { value: event.wheelchair_accessible } });
	fireEvent.change(ticketsSoldNode, { target: { value: event.tickets_sold } });
	fireEvent.change(alcoholBeerServedNode, { target: { value: event.alcohol_beer_served } });
	fireEvent.change(alcoholWineServedNode, { target: { value: event.alcohol_wine_served } });
	fireEvent.change(alcoholSpiritsServedNode, { target: { value: event.alcohol_spirits_served } });
	fireEvent.change(foodServedNode, { target: { value: event.food_served } });
	fireEvent.change(setupCostsNode, { target: { value: event.setup_costs } });
	fireEvent.change(talentCostsNode, { target: { value: event.talent_costs } });
	fireEvent.change(openingTimeNode, { target: { value: event.opening_time } });
	fireEvent.change(closingTimeNode, { target: { value: event.closing_time } });
	fireEvent.change(eventDateNode, { target: { value: event.event_date } });
	fireEvent.change(tabCCertifiedNode, { target: { value: event.smoking_allowed } });
	fireEvent.change(indoorEventNode, { target: { value: event.indoor_event } });
	fireEvent.change(outdoorEventNode, { target: { value: event.outdoor_event } });
	fireEvent.change(parkingLotAvailableNode, { target: { value: event.parking_lot_available } });
	fireEvent.change(outdoorEventNode, { target: { value: event.outdoor_event } });
	fireEvent.change(parkingMaxCapacityNode, { target: { value: event.parking_max_capacity } });
	fireEvent.change(salesGrossNode, { target: { value: event.sales_gross } });
	fireEvent.change(salesNetNode, { target: { value: event.sales_net } });

	// submit form
	fireEvent.submit(submitBtn);

	// because the antd form onFinish is async, wait for our
	// submit to be called
	await wait(() => {
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalledWith(event);
	});
});
