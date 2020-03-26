import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const defaultValues = { firstName: '', example: '', name: '', exampleRequired: '' };

const HouseContactHostForm = () => {
	const { control, register, handleSubmit, errors, reset } = useForm();
	const form = useForm({ defaultValues });

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset(); //supposed to reset
	};
	return (
		<Form onSubmit={form.handleSubmit(onSubmit)}>
			<Form.Item name=''>
				<Select style={{ width: 400 }}>
					<Option>House Concert Host Form</Option>
				</Select>
			</Form.Item>
			<Form.Item name=''>
				<Search placeholder='Search for record' onSearch={value => console.log(value)} style={{ width: 400 }} />
			</Form.Item>
			<h1>House Concert Host Form</h1>
			<Row>
				<Form.Item name='' label='Event hosted'>
					<Controller as={Input} control={form.control} name='example' placeholder='Event hosted' />
				</Form.Item>
				<Form.Item name='' label='Event date'>
					<Controller as={DatePicker} control={form.control} name='example' placeholder='Select event date' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item name='' label='Equipment load in time'>
					<Controller as={Input} control={form.control} name='example' placeholder='Load in time' />
				</Form.Item>
				<Form.Item name='' label='Equipment load out time'>
					<Controller as={Input} control={form.control} name='example' placeholder='Load out time' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item name='' label='Square footage of concert space'>
					<Controller as={Input} control={form.control} name='example' placeholder='Venue square footage' />
				</Form.Item>
				<Form.Item name='' label='Guest capacity'>
					<Controller as={Input} control={form.control} name='example' placeholder='Guest capacity' />
				</Form.Item>
			</Row>
			<Form.Item name='' label='Notes on accessibility'>
				<Controller as={TextArea} control={form.control} name='example' placeholder='Accessibility notes' />
			</Form.Item>
			<Row>
				<Form.Item name='' label='Host guest preferences'>
					<Select style={{ width: 400 }}>
						<Option> Guest preferences </Option>
					</Select>
				</Form.Item>
				<Form.Item name='' label='Host musical preferences'>
					<Controller as={Input} control={form.control} name='example' placeholder='Musical preferences' />
				</Form.Item>
			</Row>
			<Row>
				<Radio.Group>
                    <p>Owns a quality piano</p>
					<Form.Item label='Yes'>
						<Controller as={Radio} control={form.control} name='piano' value={1} />
					</Form.Item>
					<Form.Item label='No'>
						<Controller as={Radio} control={form.control} name='piano' value={2} />
					</Form.Item>
				</Radio.Group>
                <Radio.Group>
                    <p>Photography allowed</p>
					<Form.Item label='Yes'>
						<Controller as={Radio} control={form.control} name='example' value={1 } />
					</Form.Item>
					<Form.Item label='No'>
						<Controller as={Radio} control={form.control} name='example' value={2} />
					</Form.Item>
				</Radio.Group>
			</Row>
            <Form.Item name='' label='Notes about piano'>
				<Controller as={TextArea} control={form.control} name='example' placeholder='Piano notes' />
			</Form.Item>
            <Form.Item name='' label='Parking notes'>
				<Controller as={TextArea} control={form.control} name='example' placeholder='Parking notes' />
			</Form.Item>
            <Form.Item name='' label='Other notes on space'>
				<Controller as={TextArea} control={form.control} name='example' placeholder='Additional notes agbout venue' />
			</Form.Item>
            <Form.Item name='' label='Other relevant notes'>
				<Controller as={TextArea} control={form.control} name='example' placeholder='Additional notes' />
			</Form.Item>
            <Button>Submit</Button>
		</Form>
	);
};
export default HouseContactHostForm;
