import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Form, Input, Button, Row, Col, Select } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const { Search } = Input;

const BenefactorForm = () => {
	const { control, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
	};

	const fieldProps = {
		colon : false,
	};

	return (
		<Form>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item name=''>
					<Select style={{ width: 400 }}>
						<Option>Benefactor / Sponsor Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Benefactor / Sponsor Form</h1>
				<Row>
					<Col>
						<Form.Item label='Listing notes' {...fieldProps}>
							<Controller
								as={TextArea}
								type='text'
								control={control}
								name='listing_notes'
								placeholder='Listing notes'
								style={{ width: 600 }}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Personal notes' {...fieldProps}>
							<Controller
								as={TextArea}
								type='text'
								control={control}
								name='personal_notes'
								placeholder='Personal notes'
								style={{ width: 600 }}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Title' {...fieldProps}>
							<Controller control={control} name='title' as={Input} type='text' placeholder='Title' />
						</Form.Item>
					</Col>
				</Row>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default BenefactorForm;
