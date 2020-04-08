import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const { TextArea } = Input;

const BenefactorForm = ({ onSubmit }) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
			<h1>Benefactor / Sponsor Form</h1>
			<Row>
				<Col>
					<Form.Item
						label='Listing notes'
						name="listing_notes"
					>
						<TextArea
							placeholder="Listing notes"
							style={{ width: 600 }}
							rules={[{ required: true }]}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Personal notes'
						name='personal_notes'
					>
						<TextArea
							placeholder='Personal notes'
							style={{ width: 600 }}
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item label='Title' name='title'>
						<Input placeholder='Title' />
					</Form.Item>
				</Col>
			</Row>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default BenefactorForm;
