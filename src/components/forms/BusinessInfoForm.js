import React from 'react';
import { Form, Input, Button } from 'antd';

const BusinessInfoForm = ({ onSubmit }) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
			<h1>Business Info Form</h1>
			<Form.Item
				label='Website'
				name='website_address'
			>
				<Input placeholder='Website address' />
			</Form.Item>
			<Form.Item
				label='Street address'
				name='street_address'
			>
				<Input placeholder='Street address' />
			</Form.Item>
			<Form.Item
				label='Email'
				name='email'
			>
				<Input placeholder='Email address' />
			</Form.Item>
			<Form.Item
				label='Phone'
				name='phone'
			>
				<Input placeholder='(XXX) XXX-XXXX' />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default BusinessInfoForm;
