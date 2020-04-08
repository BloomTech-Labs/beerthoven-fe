import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import BenefactorForm from './BenefactorForm';
import mockBenefactor from '../../test-data/benefactor';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<BenefactorForm onSubmit={onSubmit} />);

    // get nodes
    const listingNotesNode = getByLabelText('Listing notes');
    const personalNotesNode = getByLabelText('Personal notes');
    const titleNode = getByLabelText('Title');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(listingNotesNode, { target: { value: mockBenefactor.listing_notes } });
    fireEvent.change(personalNotesNode, { target: { value: mockBenefactor.personal_notes } });
    fireEvent.change(titleNode, { target: { value: mockBenefactor.title } });


    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockBenefactor);
    });

}); 