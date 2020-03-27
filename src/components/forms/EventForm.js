import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button } from 'antd';

const EventForm = () => {
	const { handleSubmit, control, errors } = useForm();
	const onSubmit = data => {
		console.log('data', data);
	};

	const fieldProps = {
		colon : false,
	};

	return (
		<Form name='event_form'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item label='Event name' name='event_name'>
					<Input />
				</Form.Item>
				<Form.Item label='Event type' name='event_type'>
					<Input />
				</Form.Item>
				<Form.Item>
					<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
						Submit
					</Controller>
				</Form.Item>
			</form>
		</Form>
	);
};
export default EventForm;
