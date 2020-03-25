import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input, Button, Select } from 'antd';

const {Option} = Select;

const PeopleForm = () => {
	const { register, handleSubmit, errors, reset } = useForm();
	const submitHandler = data => console.log(data, 'Haw haw - nelson muntz');

	return (
		<Form onSubmit={submitHandler}>
			<h1>Add New Profile</h1>
			<Form.Item name='first_name' label="First Name">
				<Input type="text" placeholder='Enter first name' ref={register({ required: true })}/>
				{errors.first_name && <p>Required</p>}
				{/* {errors.first_name && errors.first_name.type === "maxLength" && <p>Must be less than 20 characters.</p>} */}

			</Form.Item>

			<Form.Item name='last_name' label="Last Name">
				<Input type='text' placeholder='Enter last name' />
			</Form.Item>

			<Form.Item name='email' label="Email">
				<Input type='email' placeholder='Enter email address' />
			</Form.Item>

			<Form.Item name='phone' label="Phone number">
				<Input type='number' placeholder='Enter phone number' />
			</Form.Item>
			
			<Form.Item name='address' label="Address">
				<Input type='text' placeholder='Enter street address' />
			</Form.Item>

			<Form.Item name='address2' label="Address line 2 (optional)">
				<Input type='text' placeholder='Enter apartment, suite, etc' />
			</Form.Item>
			
			<Form.Item name='city' label="City">
				<Input type='text' placeholder='Enter city' />
			</Form.Item>

			<Form.Item name='state' label="State">
				<Input type='text' placeholder='Enter state' />
			</Form.Item>

			<Form.Item name='zip' label="Zip code">
				<Input type='number' placeholder='Enter zip code' />
			</Form.Item>

			<Form.Item name="method-of-add"  label="Method of Add">
				<Select>
					<Option>select</Option>
					<Option value="option1">Option 1</Option>
					<Option value="option2">Option 2</Option>	
				</Select>
			</Form.Item>

			<Button type='primary'>Submit</Button>

		</Form>
	);
};

export default PeopleForm;
