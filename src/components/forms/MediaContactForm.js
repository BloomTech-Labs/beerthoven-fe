import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const MediaContactForm = () => {
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
						<Option>Media Contact Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Media Contact Form</h1>
				<Form.Item label='Job title' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='job_title' placeholder='Business Name' />
					{errors.job_title && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Media organization name' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='media_organization'
						placeholder='Media organization'
					/>
					{errors.media_organization && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Website' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='website' placeholder='Website address' />
					{errors.website && <p>Required</p>}
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default MediaContactForm;
