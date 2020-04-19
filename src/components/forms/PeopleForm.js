import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_PERSON } from '../graphql/queries';
import { Form, Input, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';


const PeopleForm = ({ onSubmit }) => {
	const params = useParams();

	// if there is no ID in the path, the user is creating a new person,
	// and we can skip fetching a person
	const editingPerson = params.id != null;

	const { loading, data } = useQuery(GET_PERSON, {
		skip      : !editingPerson, // skip grabbing a person if user is not editing, but rather adding new
		variables : { id: params.id },
	});

	const [
		submitted,
		setSubmitted,
	] = useState(false);

	const submitForm = values => {
		setSubmitted(true);
		onSubmit(values, params.id);
	};

	const [
		form,
	] = Form.useForm();

	if (!loading && data) {
		form.setFieldsValue(data.person);
	}

	return !submitted ? (
		<Form form={form} layout='vertical' onFinish={submitForm}  data-testid="form">
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
						rules={[
							{ required: true },
						]}>
						<Input type='email' placeholder='Enter email address' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='Phone number' name='phone'>
						<Input placeholder='Enter phone number' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col>
					<Form.Item label='Address' name='address'>
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
					<Form.Item label='Address line 2 (optional)' name='address2'>
						<Input placeholder='Enter apartment, suite, etc' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='City' name='city'>
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
					<Form.Item label='State' name='state'>
						<Input placeholder='Enter state' />
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						label='Zip code'
						name='zip'
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
		<div>
			<p>Submitted successfully</p>
			<Link to='/people'>
				<Button>Continue</Button>
			</Link>
		</div>
	);
};

export default PeopleForm;
