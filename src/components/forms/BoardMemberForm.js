import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input, Button, Row, Col, Select } from 'antd';

const {Option} = Select;
const {TextArea} = Input;
const {Search} = Input;
const BoardMemberForm = () => {
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Item name=''>
				<Select style={{width: 400}}>
					<Option>Board Member Form</Option>
				</Select>
			</Form.Item>
			<Form.Item name=''>
				<Search placeholder='Search for record' onSearch={value => console.log(value)} style={{ width: 400 }} />
			</Form.Item>
			<h1>Board Member Form</h1>
            <Row>
				<Col>
					<Form.Item name='' label='Board service dates'>
						<Input placeholder='Board service dates' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Special Skills'>
						<Input placeholder='Special Skills' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Officer'>
						<Input placeholder='Officer' style={{ width: 300 }} />
					</Form.Item>
				</Col>
                <Col>
					<Form.Item name='' label='Committee chair'>
						<Input placeholder='Committee chair' style={{ width: 300 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Committees Served'>
						<Input placeholder='Perk' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Business website'>
						<Input placeholder='Business website address' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Business street address'>
						<Input placeholder='Business street address' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Business email'>
						<Input placeholder='Business email address' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Row>
				<Col>
					<Form.Item name='' label='Business phone number'>
						<Input placeholder='(XXX) XXX-XXXX' style={{ width: 600 }} />
					</Form.Item>
				</Col>
			</Row>
            <Button type="primary">Submit</Button>
        </Form>
    )
}
export default BoardMemberForm