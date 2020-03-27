import React from 'react';
import { useForm } from 'react-hook-form';


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
