import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import PeopleForm from './PeopleForm';
import mockPerson from '../../test-data/person';
// import {useParams} from 'react-router-dom'

beforeEach(cleanup);

test('all data is submitted', async () => {
    const onSubmit = jest.fn();
    
    const { getByLabelText, getByText } = render(<PeopleForm onSubmit={onSubmit} />);

    // get nodes
    const firstNameNode = getByLabelText('First Name');
    const lastNameNode = getByLabelText('Last Name');
    const emailNode = getByLabelText('Email');
    const phoneNode = getByLabelText('Phone number');
    const addressNode = getByLabelText('Address');
    const address2Node = getByLabelText(/Address line 2/i);
    const cityNode = getByLabelText('City');
    const stateNode = getByLabelText('State');
    const zipNode = getByLabelText('Zip code');
    const submitBtn = getByText('Submit');

    // set field values
    fireEvent.change(firstNameNode, { target: { value: mockPerson.first_name } });
    fireEvent.change(lastNameNode, { target: { value: mockPerson.last_name } });
    fireEvent.change(emailNode, { target: { value: mockPerson.email } });
    fireEvent.change(phoneNode, { target: { value: mockPerson.phone } });
    fireEvent.change(addressNode, { target: { value: mockPerson.address } });
    fireEvent.change(address2Node, { target: { value: mockPerson.address2 } });
    fireEvent.change(cityNode, { target: { value: mockPerson.city } });
    fireEvent.change(stateNode, { target: { value: mockPerson.state } });
    fireEvent.change(zipNode, { target: { value: mockPerson.zip } });

    // submit form
    fireEvent.submit(submitBtn);

    // because the antd form onFinish is async, wait for our
    // submit to be called
    await wait(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(mockPerson);
    });

    jest.mock('react-router-dom', ()=>({
        ...jest.requireActual('react-router-dom'), //
        useParams: ()=>({
            id: 'id'
        }), 
        useRoutematch: ()=> ({ url: '/people/id'})
    }))

});

it('Something new', async ()=>{

})