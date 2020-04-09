import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import BusinessInfoForm from './BusinessInfoForm';
import mockBusiness from '../../test-data/businessinfo';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<BusinessInfoForm onSubmit={onSubmit} />);

    // get nodes
    const websiteNode = getByLabelText('Website');
    const streetAddressNode = getByLabelText('Street address');
    const emailNode = getByLabelText('Email');
    const phoneNode = getByLabelText('Phone');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(websiteNode, { target: { value: mockBusiness.website_address } });
    fireEvent.change(streetAddressNode, { target: { value: mockBusiness.street_address } });
    fireEvent.change(emailNode, { target: { value: mockBusiness.email } });
    fireEvent.change(phoneNode, { target: { value: mockBusiness.phone } });

    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockBusiness);
    });

});
