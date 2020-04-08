import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import VolunteerForm from './VolunteerForm';
import mockVolunteer from '../../test-data/volunteer';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<VolunteerForm onSubmit={onSubmit} />);

    // get nodes
    const roleServedNode = getByLabelText('Role served');
    const certificationsNode = getByLabelText('Certifications');
    const notesNode = getByLabelText('Notes on performance');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(roleServedNode, { target: { value: mockVolunteer.listing_notes } });
    fireEvent.change(certificationsNode, { target: { value: mockVolunteer.personal_notes } });
    fireEvent.change(notesNode, { target: { value: mockVolunteer.title } });


    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockVolunteer);
    });

}); 