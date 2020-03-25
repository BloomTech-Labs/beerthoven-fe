import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input, Button, Row, Col, Select } from 'antd';

const {Option} = Select;
const { TextArea } = Input;


const BenefactorForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Item name=''>
                <Select>
                    <Option>Benefactor / Sponsor Form</Option>
                </Select>
            </Form.Item>
			<h1>Benefactor / Sponsor Form</h1>
			<Row>
				<Col>
					<Form.Item name='' label='Listing notes'>
						<TextArea placeholder='Listing notes' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item name='' label='Personal notes'>
						<TextArea placeholder='Personal notes' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item name='' label='Title'>
						<Input type='text' placeholder='Title' />
					</Form.Item>
				</Col>
			</Row>
			<Button type='primary'>Submit</Button>
		</Form>
	);
};
export default BenefactorForm;
