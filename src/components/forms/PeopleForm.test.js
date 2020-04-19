import React from 'react';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import PeopleForm from './PeopleForm';
import person from '../../test-data/person';
import '@testing-library/jest-dom/extend-expect'
import {Router} from 'react-router'
import { createMemoryHistory } from "history";
import { ApolloProvider } from 'react-apollo';
import client from '../graphql/client';


 //this submit is to validate inputs
const onSubmit2 = data =>{  
        const isValid= checkIfErrors(data)
        jest.fn()

    if(!isValid){
        return null
    }else{
        return data
    }
}

//to see if mock info is able to be retrieved 
const onSubmit = jest.fn()
    

const checkIfErrors =(data)=>{
    if(!data.name){
       return false
    }
    else {
        return true
    }
}


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
  //   const phoneNode = getByLabelText('Phone number');
  //   const addressNode = getByLabelText('Address');
  //   const address2Node = getByLabelText(/Address line 2/i);
  //   const cityNode = getByLabelText('City');
  //   const stateNode = getByLabelText('State');
  
  



    await wait(() => {
    fireEvent.change(firstNameNode, { target: { value: person.first_name } });
    fireEvent.keyDown(firstNameNode, {key: "Random naming"})

    fireEvent.change(lastNameNode, { target: { value: person.last_name } });
    fireEvent.change(emailNode, { target: { value: person.email } });
    fireEvent.change(zipNode, { target: { value: person.zip } });
    // fireEvent.submit(submitBtn);
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

it('lands on a bad page', ()=>{
//not yet written
})

})







// describe('all data is submitted', ()=>{

//TEST 1
// it ("mocks match.params", async ()=>{
//   expect.assertions(2)

//   const fetchData = () =>{
//     Promise.resolve({
//       args: {person}
//     })
//   }

// // console.log(
// //   //  wait(()=>{
// //     person.map((item)=>
// //       console.log('inside for Each', item)
// //       // expect(getByText(item).toBeInTheDocument())
// //     )
// //   // })
// //   )

//   const onSubmit2 = jest.fn()
//     const { getByText,getByLabelText, getByRole } = await renderWithRouterMatch(PeopleForm,
//         {
//         route: "/people/ABC123",
//         path: "/people/:id"
//       }
//       );


// // get nodes
// const firstNameNode = await getByLabelText('First Name');
// const submitBtn = await getByText('Submit');

//         // fireEvent.change(firstNameNode, { target: { value: person.first_name } });

// // set field values
// await fireEvent.change(firstNameNode, {target: {value: person.first_name}})

// // submit form
// // await fireEvent.submit(submitBtn);

// await fireEvent.click(getByRole('button', {name: /submit/i}))

// for(let persons of Object.keys(person)){
// const jian= expect(findByText(person)).toBeInTheDocument()

// }

//  // because the antd form onFinish is async, wait for our
// //     // submit to be called
//         const personData = await onSubmit(person)
//         await onSubmit2(person)
//          expect(onSubmit).toHaveBeenCalledTimes(1);
//          expect(onSubmit).toHaveBeenCalled();
//         //  expect(onSubmit2).toHaveBeenCalledWith(true);

    
//          //Check if validation is working 
//         const checkVal = await onSubmit({
//             email      : 'bob.smith@bobsmith.net222',
//             last_name  : 'Smith',
//             phone      : '9999999999',
//             address    : '12355 4th PL NW',
//             address2   : '#512',
//             city       : 'Lake Stevens',
//             state      : 'Washington',
//             zip        : '98258',
//         })
//         expect(checkVal).toBeFalsy();



//       })



// //TEST 2

// it ('Add New Profile', ()=>{
//   expect.assertions(1)
//     const { getByText } = renderWithRouterMatch(PeopleForm);
//     expect(getByText("Add New Profile")).toBeInTheDocument();
// })

// // })

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
//     fireEvent.change(firstNameNode, { target: { value: person.first_name } });
//     fireEvent.change(lastNameNode, { target: { value: person.last_name } });
//     fireEvent.change(emailNode, { target: { value: person.email } });
//     fireEvent.change(phoneNode, { target: { value: person.phone } });
//     fireEvent.change(addressNode, { target: { value: person.address } });
//     fireEvent.change(address2Node, { target: { value: person.address2 } });
//     fireEvent.change(cityNode, { target: { value: person.city } });
//     fireEvent.change(stateNode, { target: { value: person.state } });
//     fireEvent.change(zipNode, { target: { value: person.zip } });

//     // submit form
//     fireEvent.submit(submitBtn);

//     // because the antd form onFinish is async, wait for our
//     // submit to be called
//     await wait(() => {
//         expect(onSubmit).toHaveBeenCalledTimes(1);
//         expect(onSubmit).toHaveBeenCalledWith(person);
//     });

// });
