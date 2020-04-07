import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PeopleForm from './PeopleForm';
import mockPerson from '../../test-data/person';
import antdTestFix from '../utils/antd-test-fix';

beforeAll(antdTestFix);

test('all data is submitted', () => {
    const onSubmit = jest.fn();
    
    const { container, getByLabelText } = render(<PeopleForm onSubmit={onSubmit} />);

    // get nodes
    const firstNameNode = getByLabelText('First Name');
    const lastNameNode = getByLabelText('Last Name');
    const emailNode = getByLabelText('Email');
    const phoneNode = getByLabelText('Phone number');
    const addressNode = getByLabelText('Address');
    const address2Node = getByLabelText('Address line 2');
    const cityNode = getByLabelText('City');
    const stateNode = getByLabelText('State');
    const zipNode = getByLabelText('Zip code');
    const submitBtn = getByText('Submit');

    // set field values
    firstNameNode.value = mockPerson.first_name;
    lastNameNode.value = mockPerson.last_name;
    emailNode.value = mockPerson.email;
    phoneNode.value = mockPerson.phone;
    addressNode.value = mockPerson.address;
    address2Node.value = mockPerson.address2;
    cityNode.value = mockPerson.city;
    stateNode.value = mockPerson.state;
    zipNode.value = mockPerson.zip;

    // submit form
    fireEvent.click(submitBtn);

    expect(onSubmit).toHaveBeenCalledTimes(1);
});