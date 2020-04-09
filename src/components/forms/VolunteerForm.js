import React from 'react';
import { Form, Input, Button, DatePicker, Row, Radio } from 'antd';

const { TextArea } = Input;

function VolunteerForm ({onSubmit}) {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
				<h1>Volunteer Form</h1>
				<Form.Item label='Event date' name='event_date'>
					<DatePicker
						type='text'
						placeholder='Select event date'
					/>
					{/* {errors.firstName && <p>Required</p>} */}
				</Form.Item>

				<Form.Item label='Role served' name='role'>
					<Input placeholder='Enter volunteer role' />
					{/* {errors.example && <p>Required</p>} */}
				</Form.Item>

				<Row>
					<Form.Item label='Time in' name='time_in_hour'>
						<Input  placeholder='Hour' type='text' />
					</Form.Item>

					<Form.Item name='time_in_minute'>
						<Input
							placeholder='Minute'
							type='text'
						/>
					</Form.Item>

					<Radio.Group>
						<Form.Item name='time_in_am' label='AM'>
							<Radio  value={1} />
						</Form.Item>
						<Form.Item label='PM' name='time_in_pm'>
							<Radio value={2} />
						</Form.Item>
					</Radio.Group>
					<Form.Item label='Time out' name='time_out_hour'>
						<Input  placeholder='Hour' />
					</Form.Item>
					<Form.Item name='time_out_minute'>
						<Input placeholder='Minute' />
					</Form.Item>
					<Radio.Group>
						<Form.Item label='AM' name='time_out_am'>
							<Radio value={1} />
						</Form.Item>
						<Form.Item label='PM' name='time_out_pm'>
							<Radio value={2} />
						</Form.Item>
					</Radio.Group>
				</Row>
				<Row>
					<Form.Item label='Total hours served' name='total_hours'>
						<Input  placeholder='Total hours' />
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Certifications' name='certifications'>
						<Input placeholder='Certifications' />
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Notes on performance' name='performance_notes'>
						<TextArea
							placeholder='Performance notes'
						/>
					</Form.Item>
				</Row>
				<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}
export default VolunteerForm;
