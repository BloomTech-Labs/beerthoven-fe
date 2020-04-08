import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import WorkContactForm from './WorkContactForm';
import mockWorkContact from '../../test-data/workcontact';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<WorkContactForm onSubmit={onSubmit} />);

    // get nodes
    const emailNode = getByLabelText('Email');
    const phoneNumberNode = getByLabelText('Phone number');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(emailNode, { target: { value: mockWorkContact.email } });
    fireEvent.change(phoneNumberNode, { target: { value: mockWorkContact.phone_number } });


    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockWorkContact);
    });

}); 