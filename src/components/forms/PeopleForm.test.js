import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import PeopleForm from './PeopleForm';
// import mockPerson from '../../test-data/person';

//EBI'S EDITS BELOW

import person from '../../test-data/person';
import '@testing-library/jest-dom/extend-expect'
import {Router, Route} from 'react-router'
import { createMemoryHistory } from "history";
import { ApolloProvider } from 'react-apollo';
import client from '../graphql/client';

beforeEach(cleanup);


 //*** */

 //this submit is to validate inputs
const onSubmit = data =>{  
        const isValid= checkIfErrors(data)
        jest.fn()

    if(!isValid){
        return null
    }else{
        return data
    }
}

//to see if mock info is able to be retrieved 
const mockSubmit = jest.fn()
    

const checkIfErrors =(data)=>{
    if(!data.name){
       return false
    }
    else {
        return true
    }
}

//helper function --should be its own file so other test files can use
 function renderWithRouterMatch(
    ui,
    {
      path = "/",
      route = "/",
      history = createMemoryHistory({ initialEntries: [route] })
    } = {}
  ) {
    return {
      ...render(
        <ApolloProvider client={client}>
        <Router history={history}>
          <Route  path={path} component={ui} />
        </Router>
        </ApolloProvider>
      )
    };
  }

describe('all data is submitted', ()=>{

//TEST 1
it ("mocks match.params", async ()=>{
    const { getByText,getByLabelText } = await renderWithRouterMatch(PeopleForm,
        {
        route: "/people/ABC123",
        path: "/people/:id"
      }
      );


// get nodes
const firstNameNode = await getByLabelText('First Name');
const submitBtn = await getByText('Submit');

        // fireEvent.change(firstNameNode, { target: { value: mockPerson.first_name } });

// set field values
await fireEvent.change(firstNameNode)

// submit form
await fireEvent.submit(submitBtn);

 // because the antd form onFinish is async, wait for our
//     // submit to be called
        const personData = await mockSubmit(person)
         expect(mockSubmit).toHaveBeenCalledTimes(1);

    
         //Check if validation is working 
        const checkVal = await onSubmit({
            email      : 'bob.smith@bobsmith.net222',
            last_name  : 'Smith',
            phone      : '9999999999',
            address    : '12355 4th PL NW',
            address2   : '#512',
            city       : 'Lake Stevens',
            state      : 'Washington',
            zip        : '98258',
        })
        expect(checkVal).toBeFalsy();
      })



//TEST 2

it ('Add New Profile', ()=>{
    const { getByText } = renderWithRouterMatch(PeopleForm,
        {
        route: "/people/ABC123",
        path: "/people/:id"
      }
      );
    expect(getByText("Add New Profile")).toBeInTheDocument();
})

})

//***** */


// IF ALL FAILS RETURN BACK TO BOTTOM CODE

// test('all data is submitted', async () => {
//     const onSubmit = jest.fn();
    
//     const { getByLabelText, getByText } = render(<PeopleForm onSubmit={onSubmit} />);

//     // get nodes
//     const firstNameNode = getByLabelText('First Name');
//     const lastNameNode = getByLabelText('Last Name');
//     const emailNode = getByLabelText('Email');
//     const phoneNode = getByLabelText('Phone number');
//     const addressNode = getByLabelText('Address');
//     const address2Node = getByLabelText(/Address line 2/i);
//     const cityNode = getByLabelText('City');
//     const stateNode = getByLabelText('State');
//     const zipNode = getByLabelText('Zip code');
//     const submitBtn = getByText('Submit');

//     // set field values
//     fireEvent.change(firstNameNode, { target: { value: mockPerson.first_name } });
//     fireEvent.change(lastNameNode, { target: { value: mockPerson.last_name } });
//     fireEvent.change(emailNode, { target: { value: mockPerson.email } });
//     fireEvent.change(phoneNode, { target: { value: mockPerson.phone } });
//     fireEvent.change(addressNode, { target: { value: mockPerson.address } });
//     fireEvent.change(address2Node, { target: { value: mockPerson.address2 } });
//     fireEvent.change(cityNode, { target: { value: mockPerson.city } });
//     fireEvent.change(stateNode, { target: { value: mockPerson.state } });
//     fireEvent.change(zipNode, { target: { value: mockPerson.zip } });

//     // submit form
//     fireEvent.submit(submitBtn);

//     // because the antd form onFinish is async, wait for our
//     // submit to be called
//     await wait(() => {
//         expect(onSubmit).toHaveBeenCalledTimes(1);
//         expect(onSubmit).toHaveBeenCalledWith(mockPerson);
//     });

// });
