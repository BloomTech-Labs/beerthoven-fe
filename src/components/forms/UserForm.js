import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../graphql/queries';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const UserForm = ({ onSubmit }) => {
	const params = useParams();

	const editingUser = params.id != null;

	const { loading, data } = useQuery(GET_USER, {
		skip      : !editingUser,
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
		form.setFieldsValue(data.user);
	}

	return !submitted ? (
		<Form form={form} layout='vertical' onFinish={submitForm}>
			<h1>Add New User</h1>
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
						<Input placeholder='Enter email address' />
					</Form.Item>
					<Form.Item
						label='Password'
						name='password'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter password' type='password' />
					</Form.Item>
				</Col>
			</Row>
			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					{/* <Form.Item label='Person' name='person'>
						<Input placeholder='Enter Person' />
					</Form.Item> */}
					<Form.Item
						label='Role'
						name='role'
						rules={[
							{ required: true },
						]}>
						<Select style={{ width: 120 }}>
							<Option value='ADMIN'>Admin</Option>
							<Option value='PERFORMER'>Performer</Option>
							<Option value='VOLUNTEER'>Volunteer</Option>
							<Option value='GUEST'>Guest</Option>
						</Select>
					</Form.Item>
				</Col>
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
			<Link to='/user'>
				<Button>Continue</Button>
			</Link>
		</div>
	);
};
export default UserForm;
