import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import PerformerForm from './PerformerForm';
import mockPerformer from '../../test-data/performer';

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<PerformerForm onSubmit={onSubmit} />);

    // get nodes
    const instrumentNode = getByLabelText('Instrument');
    const eventsPerformedNode = getByLabelText('Beerthoven events performed');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(instrumentNode, { target: { value: mockPerformer.instrument } });
    fireEvent.change(eventsPerformedNode, { target: { value: mockPerformer.events_performed } });


    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockPerformer);
    });

}); 