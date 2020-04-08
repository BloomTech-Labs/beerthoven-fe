import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ADD_PERSON } from '../graphql/mutations';

const PeopleForm = ({ onSubmit }) => {
	let input;
	const [
		submitted,
		setSubmitted,
	] = useState(false);
	const [
		addPerson,
		{ data },
	] = useMutation(ADD_PERSON);

	const fieldProps = {
		colon : false,
	};

	const submitForm = values => {
		setSubmitted(true);
		onSubmit(values);
		addPerson({ variables: { type: input.value } });
		input.value = '';
		console.log({ data });
	};

	return !submitted ? (
		<Form layout='vertical' onFinish={submitForm}>
			<h1>Add New Profile</h1>
			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='First Name'
						name='first_name'
						{...fieldProps}
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter first name' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label='Last Name'
						name='last_name'
						{...fieldProps}
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter last name' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='Email'
						name='email'
						{...fieldProps}
						rules={[
							{ required: true },
						]}>
						<Input type='email' placeholder='Enter email address' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='Phone number' name='phone' {...fieldProps}>
						<Input type='number' placeholder='Enter phone number' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col>
					<Form.Item label='Address' name='address' {...fieldProps}>
						<Input placeholder='Enter street address' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item label='Address line 2 (optional)' name='address2' {...fieldProps}>
						<Input placeholder='Enter apartment, suite, etc' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='City' name='city' {...fieldProps}>
						<Input placeholder='Enter city' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={6}>
					<Form.Item label='State' name='state' {...fieldProps}>
						<Input placeholder='Enter state' />
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						label='Zip code'
						name='zip'
						{...fieldProps}
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter zip code' />
					</Form.Item>
				</Col>
				<Col span={12} />
			</Row>

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	) : (
		<p>Submitted successfully</p>
	);
};

export default PeopleForm;
