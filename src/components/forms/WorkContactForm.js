import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const WorkContactForm = () => {
	const { control, register, handleSubmit, errors, reset } = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset(); //supposed to reset
	};

	const fieldProps = {
		colon : false,
	};

	return (
		<Form>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item name=''>
					<Select style={{ width: 400 }}>
						<Option>Work Contact Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Work Contact Form</h1>
				<Form.Item label='Email' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='email' placeholder='Email address' />
					{errors.email && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Phone number' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='phone_number'
						placeholder='(XXX) XXX-XXXX'
					/>
					{errors.phone_number && <p>Required</p>}
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default WorkContactForm;
