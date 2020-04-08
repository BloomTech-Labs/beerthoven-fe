import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import RecentBenefactorForm from './RecentBenefactorForm';
import mockRecentBenefactor from '../../test-data/recentbenefactor';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<RecentBenefactorForm onSubmit={onSubmit} />);

    // get nodes
    const itemsDonatedNode = getByLabelText('Item(s) donated');
    const automaticGiftDeposit = getByLabelText('Automatic gift deposit info');
    const savedCards = getByLabelText('Saved cards for automatic gifts');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(itemsDonatedNode, { target: { value: mockRecentBenefactor.listing_notes } });
    fireEvent.change(automaticGiftDeposit, { target: { value: mockRecentBenefactor.personal_notes } });
    fireEvent.change(savedCards, { target: { value: mockRecentBenefactor.title } });


    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockRecentBenefactor);
    });

}); 