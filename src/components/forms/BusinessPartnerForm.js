import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const BusinessPartnerForm = () => {
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
						<Option>Business Partner Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Business Partner Form</h1>
				<Form.Item label='Name of business' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='name_of_business'
						placeholder='Business Name'
					/>
					{errors.name_of_business && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Business type' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='business_type' placeholder='Industry' />
					{errors.business_type && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Occassion business was solicited with Beerthoven' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='solicitation_occasion'
						placeholder='Solicitation occasion'
					/>
					{errors.solicitation_occasion && <p>Required</p>}
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default BusinessPartnerForm;
