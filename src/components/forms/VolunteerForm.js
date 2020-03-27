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

	return (
		<Form>
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
				<Form.Item label='Event date'>
					<Controller
						as={DatePicker}
						type='text'
						control={control}
						name='event_date'
						placeholder='Select event date'
					/>
					{errors.firstName && <p>Required</p>}
				</Form.Item>
				<Form.Item label='Role served'>
					<Controller as={Input} control={control} name='role' placeholder='Enter volunteer role' />
					{errors.example && <p>Required</p>}
				</Form.Item>
				<Row>
					<Form.Item label='Time in'>
						<Controller as={Input} control={control} name='time_in_hour' placeholder='Hour' type='text' />
					</Form.Item>
					<Form.Item>
						<Controller
							as={Input}
							control={control}
							name='time_in_minute'
							placeholder='Minute'
							type='text'
						/>
					</Form.Item>
					<Radio.Group>
						<Form.Item label='AM'>
							<Controller as={Radio} control={control} name='time_in_am' value={1} />
						</Form.Item>
						<Form.Item label='PM'>
							<Controller as={Radio} control={control} name='time_in_pm' value={2} />
						</Form.Item>
					</Radio.Group>
					<Form.Item label='Time out'>
						<Controller as={Input} control={control} name='time_out_hour' placeholder='Hour' />
					</Form.Item>
					<Form.Item>
						<Controller as={Input} control={control} name='time_out_minute' placeholder='Minute' />
					</Form.Item>
					<Radio.Group>
						<Form.Item label='AM'>
							<Controller as={Radio} control={control} name='time_out_am' value={1} />
						</Form.Item>
						<Form.Item label='PM'>
							<Controller as={Radio} control={control} name='time_out_pm' value={2} />
						</Form.Item>
					</Radio.Group>
				</Row>
				<Row>
					<Form.Item label='Total hours served'>
						<Controller as={Input} control={control} name='total_hours' placeholder='Total hours' />
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Certifications'>
						<Controller as={Input} control={control} name='certifications' placeholder='Certifications' />
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Notes on performance'>
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
