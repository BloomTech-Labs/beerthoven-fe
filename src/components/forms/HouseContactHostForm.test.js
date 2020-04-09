import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import PeopleForm from './PeopleForm';
import mockContactHost from '../../test-data/houseContactHost';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<PeopleForm onSubmit={onSubmit} />);

    // get nodes
    const eventHostedNode = getByLabelText('Event hosted');
    const eventDateNode = getByLabelText('Event date');
    const emailNode = getByLabelText('Email');
    const phoneNode = getByLabelText('Phone number');
    const addressNode = getByLabelText('Address');
    const address2Node = getByLabelText(/Address line 2/i);
    const cityNode = getByLabelText('City');
    const stateNode = getByLabelText('State');
    const zipNode = getByLabelText('Zip code');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(eventHostedNode, { target: { value: mockContactHost.first_name } });
    fireEvent.change(eventDateNode, { target: { value: mockContactHost.last_name } });
    fireEvent.change(emailNode, { target: { value: mockContactHost.email } });
    fireEvent.change(phoneNode, { target: { value: mockContactHost.phone } });
    fireEvent.change(addressNode, { target: { value: mockContactHost.address } });
    fireEvent.change(address2Node, { target: { value: mockContactHost.address2 } });
    fireEvent.change(cityNode, { target: { value: mockContactHost.city } });
    fireEvent.change(stateNode, { target: { value: mockContactHost.state } });
    fireEvent.change(zipNode, { target: { value: mockContactHost.zip } });

    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockContactHost);
    });

});