import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const defaultValues = { firstName: '', example: '', name: '', exampleRequired: '' };

const PerformerForm = () => {
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
					<Option>Performer Form</Option>
				</Select>
			</Form.Item>
			<Form.Item name=''>
				<Search placeholder='Search for record' onSearch={value => console.log(value)} style={{ width: 400 }} />
			</Form.Item>
			<h1>Performer Form</h1>
			<Form.Item label='Instrument'>
				<Controller as={Input} control={form.control} name='example' placeholder='Instrument' type='text' />
			</Form.Item>
			<Form.Item label='Beerthoven events performed'>
				<Controller
					as={Input}
					control={form.control}
					name='example'
					placeholder='Beerthoven events performed'
					type='text'
				/>
			</Form.Item>
			<Button> Submit</Button>
		</Form>
	);
};
export default PerformerForm;
