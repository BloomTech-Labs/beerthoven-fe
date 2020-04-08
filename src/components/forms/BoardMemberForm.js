import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const BoardMemberForm = ({ onSubmit }) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
			<h1>Board Member Form</h1>
			<Row>
				<Col>
					<Form.Item
						label='Board service dates'
						name="board_service_dates"
						style={{ width: 600 }}
					>
						<Input
							placeholder='Board service dates'
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Special Skills'
						name="special_skills" 
						style={{ width: 600 }}
					>
						<Input placeholder='Special Skills'  />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Officer'
						name="officer"
						style={{ width: 300 }}
					>
						<Input placeholder='Officer' />
					</Form.Item>
				</Col>
				<Col>
					<Form.Item
						label='Committee chair'
						name="committee_chair"
						style={{ width: 300 }}
					>
						<Input placeholder='Committee chair' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Committees Served'
						name="committees_served"
						style={{ width: 600 }}
					>
						<Input placeholder='Committees served' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Business website'
						name="business_website"
						style={{ width: 600 }}
					>
						<Input placeholder='Business website address' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Business street address'
						name="business_address"
						style={{ width: 600 }}
					>
						<Input placeholder='Business street address' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Business email'
						name="business_email"
						style={{ width: 600 }}
					>
						<Input type="email" placeholder='Business email address' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col>
					<Form.Item
						label='Business phone number'
						name="business_phone_number"
						style={{ width: 600 }}
					>
						<Input type="tel" placeholder='(XXX) XXX-XXXX' />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default BoardMemberForm;
