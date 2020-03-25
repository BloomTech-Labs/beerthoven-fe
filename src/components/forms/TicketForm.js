import React from 'react';
import { useForm } from 'react-hook-form';

//### CRUD Functionality for Tickets

//- **ticketID**
//(number, references ticketID in User Talent Table)
//- **ticketPurchaser**
//(String)
//- **ticketHolder**
//(String)
//- **ticketPrice**
//(number)
//- **ticketType**
//(String)

const TicketForm = () => {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = values => {
		console.log(values);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name='register' type="text" ref={register({ required: true, })} />
			<input name='register' type="text" ref={register({ required: true, })} />
			<input name='register' type="number" ref={register({ required: true, })} />
			<input name='register' ref={register({ required: true, })} />
		</form>
	);
};

export default TicketForm;
