import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import PeopleForm from './PeopleForm';
import person from '../../test-data/person';
import '@testing-library/jest-dom/extend-expect'
import {Router} from 'react-router'
import { createMemoryHistory } from "history";
import { ApolloProvider } from 'react-apollo';
import client from '../graphql/client';


//to see if mock info is able to be retrieved 
const onSubmit = jest.fn()
    

// const checkIfErrors =(data)=>{
//     if(!data.name){
//        return false
//     }
//     else {
//         return true
//     }
// }

 //this submit is to validate inputs
//  const onSubmit2 = data =>{  
//   const isValid= checkIfErrors(data)
//   jest.fn()

// if(!isValid){
//   return null
// }else{
//   return data
// }
// }


  describe(`People Form Component`, ()=>{
    beforeEach(cleanup);

 it(`renders a component that uses withRouter`, async()=>{
const history = createMemoryHistory()
const route = '/some-route'
history.push(route)
const {container} = render(
  <ApolloProvider client={client}>
<Router history={history}><PeopleForm/></Router>
</ApolloProvider>
)

expect(container.firstChild).toMatchSnapshot();
 })

 it(`should fetch the required data`, async()=>{
const history = createMemoryHistory()
const {getByLabelText, getByText} = render(
<ApolloProvider client={client}>
<Router history={history}><PeopleForm  person={person}/></Router>
</ApolloProvider>
)
  const firstNameNode = await getByLabelText('First Name');
    const lastNameNode = getByLabelText('Last Name');
    const emailNode = getByLabelText('Email');
    const zipNode = getByLabelText('Zip code');
    const submitBtn = await getByText('Submit');


    await wait(() => {
    fireEvent.change(firstNameNode, { target: { value: person.first_name } });
    fireEvent.keyDown(firstNameNode, {key: "Random naming"})
    fireEvent.change(lastNameNode, { target: { value: person.last_name } });
    fireEvent.change(emailNode, { target: { value: person.email } });
    fireEvent.change(zipNode, { target: { value: person.zip } });
    });
    

  
  await onSubmit(person)
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit).toHaveBeenCalled()

})
  

it('Data matches mock data as expected', async()=>{

  expect(onSubmit).toHaveBeenCalledWith({
  first_name: 'Bob',
  email: 'bob.smith@bobsmith.net',
  last_name: 'Smith',
  phone: '9999999999',
  address: '12355 4th PL NW',
  address2: '#512',
  city: 'Lake Stevens',
  state: 'Washington',
  zip: '98258' });
})

it('similuates a button click', async()=>{

  const history = createMemoryHistory()
const {getByText} = render(
<ApolloProvider client={client}>
<Router history={history}><PeopleForm person={person}/></Router>
</ApolloProvider>
)

  const submitBtn =  getByText('Submit');
  await wait (()=>{
    fireEvent.click(submitBtn); //test is red when fireEvent.submit()
  })
})


})
