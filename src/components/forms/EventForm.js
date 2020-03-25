           import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button } from 'antd';

const EventForm = props => {
	const { handleSubmit, event, errors } = useForm();
	const onSubmit = values => {
		console.log('submit successful', values);
	};

	const onFail = err => {
		console.warn('error submitting', err);
	};

	return (
		<Form name='event_form' onFinish={handleSubmit(onSubmit)} onFinishFailed={onFail}>
			<Form.Item label='Event name' name='event_name'>
				<Input />
			</Form.Item>
			<Form.Item label='Event type' name='event_type'>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default EventForm;
