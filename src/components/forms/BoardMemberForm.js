import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Form, Input, Button, Row, Col, Select } from 'antd';

const { Option } = Select;
const { Search } = Input;
const BoardMemberForm = () => {
	const { handleSubmit, control} = useForm();
	const onSubmit = data => {
		console.log('data', data);
	};

	const fieldProps = {
		colon : false,
	};

	return (
		<Form layout='vertical'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item name=''>
					<Select style={{ width: 400 }}>
						<Option>Board Member Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Board Member Form</h1>
				<Row>
					<Col>
						<Form.Item label='Board service dates' {...fieldProps}>
							<Controller as={Input} name="board_service_dates" control={control} placeholder='Board service dates' style={{ width: 600 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Special Skills' {...fieldProps}>
							<Controller as={Input} name="special_skills"  control={control} placeholder='Special Skills' style={{ width: 600 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Officer' {...fieldProps}>
							<Controller as={Input} name="officer" control={control} placeholder='Officer' style={{ width: 300 }} />
						</Form.Item>
					</Col>
					<Col>
						<Form.Item label='Committee chair' {...fieldProps}>
							<Controller as={Input} name="committee_chair" control={control} placeholder='Committee chair' style={{ width: 300 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Committees Served' {...fieldProps}>
							<Controller as={Input} name="committees_served" control={control} placeholder='Perk' style={{ width: 600 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Business website' {...fieldProps}>
							<Controller as={Input} name="business_website" control={control} placeholder='Business website address' style={{ width: 600 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Business street address' {...fieldProps}>
							<Controller as={Input} name="business_address" control={control} placeholder='Business street address' style={{ width: 600 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Business email' {...fieldProps}>
							<Controller as={Input} name="business_email" type="email" control={control} placeholder='Business email address' style={{ width: 600 }} />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Item label='Business phone number' {...fieldProps}>
							<Controller as={Input} name="business_phone_number" control={control} placeholder='(XXX) XXX-XXXX' style={{ width: 600 }} />
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
export default BoardMemberForm;
