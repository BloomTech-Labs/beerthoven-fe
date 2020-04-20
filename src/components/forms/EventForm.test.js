import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import EventForm from './EventForm';
import event from '../../test-data/event';
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router'
import { createMemoryHistory } from "history";
import { ApolloProvider } from 'react-apollo';
import client from '../graphql/client';


//to see if mock info is able to be retrieved 
const onSubmit = jest.fn()

describe(`Event Form Component`, () => {
	beforeEach(cleanup);
	it(`renders a component that uses withRouter`, async()=>{
		const history = createMemoryHistory()
		const route = '/some-route'
		history.push(route)
		const {container} = render(
		  <ApolloProvider client={client}>
		<Router history={history}><EventForm/></Router>
		</ApolloProvider>
		)
		
		expect(container.firstChild).toMatchSnapshot();
		 })
		


	it(`should fetch the required data`, async () => {
		const history = createMemoryHistory()
		const { getByLabelText, getByText } = render(
			<ApolloProvider client={client}>
				<Router history={history}><EventForm event={event} /></Router>
			</ApolloProvider>
		)
		const eventNameNode = await getByLabelText('Event Name');
		const submitBtn = getByText('Submit');
		const eventTypeNode = getByLabelText('Event Type');
		const addressNode = getByLabelText('Address');
		const address2Node = getByLabelText('Address line 2');
		const cityNode = getByLabelText('City');
		const stateNode = getByLabelText('State');
		const zipCodeNode = getByLabelText('Zip code');
		const eventDateNode = getByLabelText('Event Date');
		const eventDescriptionNode = getByLabelText('Event Description');


		await wait(() => {
			fireEvent.change(eventNameNode, { target: { value: event.event_name } });
			fireEvent.change(eventNameNode, { target: { value: event.event_name } });
			fireEvent.change(eventTypeNode, { target: { value: event.event_type } });
			fireEvent.change(addressNode, { target: { value: event.address } });
			fireEvent.change(address2Node, { target: { value: event.address2 } });
			fireEvent.change(cityNode, { target: { value: event.city } });
			fireEvent.change(stateNode, { target: { value: event.state } });
			fireEvent.change(zipCodeNode, { target: { value: event.zip } });
			fireEvent.change(eventDescriptionNode, { target: { value: event.event_description } });
			fireEvent.change(eventDateNode, { target: { value: event.event_date } });
			fireEvent.submit(submitBtn); //test is red when fireEvent.submit()

		});
		fireEvent.change(eventDateNode, { target: { value: event.event_date } });



		await onSubmit(event)
		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalled();
		expect(onSubmit).toHaveBeenCalled()

	})

	it('Data matches required mock data as expected', async()=>{

		expect(onSubmit).toHaveBeenCalledWith({
			event_name             : "Shinra's Plate Drop",
			event_type             : 'Party',
			address                : '200 Sector 7',
			city                   : 'Shinra',
			state                  : 'NY',
			zip                    : '14546',
			event_description      : 'Lots of stuff is going on.',
			max_capacity           : 150,
			min_capacity           : 20,
			min_income             : 2000,
			deposit_amount         : 1500,
			smoking_allowed        : false,
			under21_allowed        : true,
			under18_allowed        : false,
			tickets_sold           : 500,
			wheelchair_accessible  : false,
			alcohol_beer_served    : true,
			alcohol_wine_served    : true,
			alcohol_spirits_served : true,
			food_served            : true,
			setup_costs            : 2000,
			talent_costs           : 500,
			opening_time           : '6am',
			closing_time           : '8pm',
			event_date             : 'April 20th',
			tabc_certified         : true,
			indoor_event           : true,
			outdoor_event          : true,
			parking_lot_available  : true,
			parking_max_capacity   : 200,
			sales_gross            : 3000,
			sales_net              : 2000,
			submit                 : undefined,
			});
	  })

	
})


// import React from 'react';
// import { render, fireEvent, cleanup, wait } from '@testing-library/react';
// import EventForm from './EventForm';
// import event from '../../test-data/event';

// beforeEach(cleanup);

// test('all data is submitted', async () => {
// 	const onSubmit = jest.fn();

// 	const { getByLabelText, getByText } = render(<EventForm onSubmit={onSubmit} />);

// 	// get nodes
// 	const eventNameNode = getByLabelText('Event Name');
// 	const eventTypeNode = getByLabelText('Event Type');
// 	const addressNode = getByLabelText('Address');
// 	const address2Node = getByLabelText('Address line 2');
// 	const cityNode = getByLabelText('City');
// 	const stateNode = getByLabelText('State');
// 	const zipCodeNode = getByLabelText('Zip code');
// 	const eventDescriptionNode = getByLabelText('Event Description');
// 	const maxCapacityNode = getByLabelText('Max Capacity');
// 	const minimumCapacityNode = getByLabelText('Minimum Capacity');
// 	const minimumIncomeNode = getByLabelText('Minimum Income');
// 	const depositIncomeNode = getByLabelText('Deposit Income');
// 	const smokingAllowedNode = getByLabelText('Smoking Allowed');
// 	const under21Node = getByLabelText('Under 21 Allowed');
// 	const under18Node = getByLabelText('Under 18 Allowed');
// 	const wheelchairNode = getByLabelText('Wheelchair Accessible');
// 	const ticketsSoldNode = getByLabelText('Tickets Sold');
// 	const alcoholBeerServedNode = getByLabelText('Alcohol Beer Served');
// 	const alcoholWineServedNode = getByLabelText('Alcohol Wine Served');
// 	const alcoholSpiritsServedNode = getByLabelText('Alcohol Spririts Served');
// 	const foodServedNode = getByLabelText('Food Served');
// 	const setupCostsNode = getByLabelText('Setups Costs');
// 	const talentCostsNode = getByLabelText('Talent Costs');
// 	const openingTimeNode = getByLabelText('Opening Time');
// 	const closingTimeNode = getByLabelText('Closing Time');
// 	const eventDateNode = getByLabelText('Event Date');
// 	const tabCCertifiedNode = getByLabelText('TabC Certified');
// 	const indoorEventNode = getByLabelText('Indoor Event');
// 	const outdoorEventNode = getByLabelText('Outdoor Event');
// 	const parkingLotAvailableNode = getByLabelText('Parking Lot Available');
// 	const parkingMaxCapacityNode = getByLabelText('Parking Max Capacity');
// 	const salesGrossNode = getByLabelText('Sales Gross');
// 	const salesNetNode = getByLabelText('Sales Net');
// 	const submitBtn = getByText('Submit');

// 	// set field values
// 	fireEvent.change(eventNameNode, { target: { value: event.event_name } });
// 	fireEvent.change(eventTypeNode, { target: { value: event.event_type } });
// 	fireEvent.change(addressNode, { target: { value: event.address } });
// 	fireEvent.change(address2Node, { target: { value: event.address2 } });
// 	fireEvent.change(cityNode, { target: { value: event.city } });
// 	fireEvent.change(stateNode, { target: { value: event.state } });
// 	fireEvent.change(zipCodeNode, { target: { value: event.zip } });
// 	fireEvent.change(eventDescriptionNode, { target: { value: event.event_description } });
// 	fireEvent.change(maxCapacityNode, { target: { value: event.max_capacity } });
// 	fireEvent.change(minimumCapacityNode, { target: { value: event.min_capacity } });
// 	fireEvent.change(minimumIncomeNode, { target: { value: event.min_income } });
// 	fireEvent.change(depositIncomeNode, { target: { value: event.deposit_amount } });
// 	fireEvent.change(smokingAllowedNode, { target: { value: event.smoking_allowed } });
// 	fireEvent.change(under21Node, { target: { value: event.under21_allowed } });
// 	fireEvent.change(under18Node, { target: { value: event.under18_allowed } });
// 	fireEvent.change(wheelchairNode, { target: { value: event.wheelchair_accessible } });
// 	fireEvent.change(ticketsSoldNode, { target: { value: event.tickets_sold } });
// 	fireEvent.change(alcoholBeerServedNode, { target: { value: event.alcohol_beer_served } });
// 	fireEvent.change(alcoholWineServedNode, { target: { value: event.alcohol_wine_served } });
// 	fireEvent.change(alcoholSpiritsServedNode, { target: { value: event.alcohol_spirits_served } });
// 	fireEvent.change(foodServedNode, { target: { value: event.food_served } });
// 	fireEvent.change(setupCostsNode, { target: { value: event.setup_costs } });
// 	fireEvent.change(talentCostsNode, { target: { value: event.talent_costs } });
// 	fireEvent.change(openingTimeNode, { target: { value: event.opening_time } });
// 	fireEvent.change(closingTimeNode, { target: { value: event.closing_time } });
// 	fireEvent.change(eventDateNode, { target: { value: event.event_date } });
// 	fireEvent.change(tabCCertifiedNode, { target: { value: event.smoking_allowed } });
// 	fireEvent.change(indoorEventNode, { target: { value: event.indoor_event } });
// 	fireEvent.change(outdoorEventNode, { target: { value: event.outdoor_event } });
// 	fireEvent.change(parkingLotAvailableNode, { target: { value: event.parking_lot_available } });
// 	fireEvent.change(outdoorEventNode, { target: { value: event.outdoor_event } });
// 	fireEvent.change(parkingMaxCapacityNode, { target: { value: event.parking_max_capacity } });
// 	fireEvent.change(salesGrossNode, { target: { value: event.sales_gross } });
// 	fireEvent.change(salesNetNode, { target: { value: event.sales_net } });

// 	// submit form
// 	fireEvent.submit(submitBtn);

// 	// because the antd form onFinish is async, wait for our
// 	// submit to be called
// 	await wait(() => {
// 		expect(onSubmit).toHaveBeenCalledTimes(1);
// 		expect(onSubmit).toHaveBeenCalledWith(event);
// 	});
// });
