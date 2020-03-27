import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

function VolunteerForm () {
	const { control, handleSubmit, errors, reset } = useForm();
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
						<Option>Volunteer Form</Option>
					</Select>
				</Form.Item>
				<Form.Item>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Volunteer Form</h1>
				<Form.Item label='Event date' {...fieldProps}>
					<Controller
						as={DatePicker}
						type='text'
						control={control}
						name='event_date'
						placeholder='Select event date'
					/>
					{errors.firstName && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Role served' {...fieldProps}>
					<Controller as={Input} control={control} name='role' placeholder='Enter volunteer role' />
					{errors.example && <p>Required</p>}
				</Form.Item>
				<Row>
					<Form.Item label='Time in' {...fieldProps}>
						<Controller as={Input} control={control} name='time_in_hour' placeholder='Hour' type='text' />
					</Form.Item>
					<Form.Item {...fieldProps}>
						<Controller
							as={Input}
							control={control}
							name='time_in_minute'
							placeholder='Minute'
							type='text'
						/>
					</Form.Item>
					<Radio.Group>
						<Form.Item label='AM' {...fieldProps}>
							<Controller as={Radio} control={control} name='time_in_am' value={1} />
						</Form.Item>
						<Form.Item label='PM' {...fieldProps}>
							<Controller as={Radio} control={control} name='time_in_pm' value={2} />
						</Form.Item>
					</Radio.Group>
					<Form.Item label='Time out' {...fieldProps}>
						<Controller as={Input} control={control} name='time_out_hour' placeholder='Hour' />
					</Form.Item>
					<Form.Item>
						<Controller as={Input} control={control} name='time_out_minute' placeholder='Minute' />
					</Form.Item>
					<Radio.Group>
						<Form.Item label='AM' {...fieldProps}>
							<Controller as={Radio} control={control} name='time_out_am' value={1} />
						</Form.Item>
						<Form.Item label='PM' {...fieldProps}>
							<Controller as={Radio} control={control} name='time_out_pm' value={2} />
						</Form.Item>
					</Radio.Group>
				</Row>
				<Row>
					<Form.Item label='Total hours served' {...fieldProps}>
						<Controller as={Input} control={control} name='total_hours' placeholder='Total hours' />
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Certifications' {...fieldProps}>
						<Controller as={Input} control={control} name='certifications' placeholder='Certifications' />
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Notes on performance' {...fieldProps}>
						<Controller
							as={TextArea}
							control={control}
							name='performance_notes'
							placeholder='Performance notes'
						/>
					</Form.Item>
				</Row>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>{' '}
			</form>
		</Form>
	);
}
export default VolunteerForm;
