import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Form, Input, Button, Select, Row, Col } from 'antd';

const {Option} = Select;

const PeopleForm = () => {
	const { control, register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data', data);
  }; 


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Add New Profile</h1>
			<Row gutter={[16, 16]}>
				<Col span={12}>
					<Form.Item label="First Name">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="first_name"
							placeholder="Enter first name"
						/>
						{errors.first_name && <p>Required</p>}

					</Form.Item>
					<Form.Item label="Email">
						<Controller
							as={Input}
							type="email"
							control={control}
							name="email"
							placeholder="Enter email address"
						/>
					</Form.Item>
				</Col>

				<Col span={12}>
					<Form.Item label="Last Name">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="last_name"
							placeholder="Enter last name"
						/>
					</Form.Item>

					<Form.Item label="Phone number">
						<Controller
							as={Input}
							type="number"
							control={control}
							name="phone"
							placeholder="Enter phone number"
						/>
					</Form.Item>
				</Col>
			</Row>

			<Row gutter={[16, 16]}>
				<Col>
					<Form.Item label="Address">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="address"
							placeholder="Enter street address"
						/>
					</Form.Item>
				</Col>
			</Row>

			<Row gutter={[16, 16]}>
				<Col span={12}>
					<Form.Item label="Address line 2 (optional)">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="address2"
							placeholder="Enter apartment, suite, etc"
						/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="City">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="city"
							placeholder="Enter city"
						/>
					</Form.Item>
				</Col>
			</Row>
			
			<Row gutter={[16, 16]}>
				<Col span={6}>
					<Form.Item label="State">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="state"
							placeholder="Enter state"
						/>
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item label="Zip code">
						<Controller
							as={Input}
							type="text"
							control={control}
							name="zip"
							placeholder="Enter zip code"
						/>
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item name="method-of-add"  label="Method of Add">
						<Controller
							as={Select}
							control={control}
							name="method-of-add"
						>
							<Option>select</Option>
							<Option value="option1">Option 1</Option>
							<Option value="option2">Option 2</Option>	
						</Controller>
					</Form.Item>
				</Col>
				<Col span={6}></Col>
			</Row>

			<Controller
				name="submit"
				as={Button}
				type="primary"
				htmlType="submit"
				control={control}
			>
				Submit
			</Controller>

		</form>
	);
};

export default PeopleForm;
