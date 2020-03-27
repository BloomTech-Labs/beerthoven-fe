import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const BusinesInfoForm = () => {
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
						<Option>Business Info Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Business Info Form</h1>
				<Form.Item label='Website' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='website_address'
						placeholder='Website address'
					/>
					{errors.website_address && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Street address' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='street_address'
						placeholder='Street address'
					/>
					{errors.street_address && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Email' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='email' placeholder='Email address' />
					{errors.email && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Phone' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='phone' placeholder='(XXX) XXX-XXXX' />
					{errors.phone && <p>Required</p>}
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default BusinesInfoForm;
