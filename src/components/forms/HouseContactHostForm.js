import React from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { TextArea } = Input;

const HouseContactHostForm = ({onSubmit}) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
				<h1>House Concert Host Form</h1>
				<Row>
					<Form.Item label='Event hosted' name='event_hosted'>
						<Input  placeholder='Event hosted' />
					</Form.Item>
					<Form.Item label='Event date' name='event_date'>
						<DatePicker
							placeholder='Select event date'
						/>
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Equipment load in time' name='equipment_load_in'>
						<Input  placeholder='Load in time' />
					</Form.Item>
					<Form.Item name='equipment_load_out' label='Equipment load out time'>
						<Input
							placeholder='Load out time'
						/>
					</Form.Item>
				</Row>
				<Row>
					<Form.Item name='square_footage' label='Square footage of concert space'>
						<Input placeholder='Venue square footage'
						/>
					</Form.Item>
					<Form.Item label='Guest capacity' name='guest_capacity'>
						<Input  placeholder='Guest capacity' />
					</Form.Item>
				</Row>
				<Form.Item label='Notes on accessibility' name='accessibility_notes'>
					<TextArea placeholder='Accessibility notes'
					/>
				</Form.Item>
				<Row>
					<Form.Item label='Host guest preferences'>
						<Select style={{ width: 400 }}>
							<Option name='host_guest_preferences' />
						</Select>
					</Form.Item>
					<Form.Item name='musical_preferences' label='Host musical preferences'>
						<Input placeholder='Musical preferences'
						/>
					</Form.Item>
				</Row>
				<Row>
					<Radio.Group>
						<p>Owns a quality piano</p>
						<Form.Item label='Yes' name='owns_piano'>
							<Radio  value={1} />
						</Form.Item>
						<Form.Item label='No' name='owns_piano'>
							<Radio  value={2} />
						</Form.Item>
					</Radio.Group>
					<Radio.Group>
						<p>Photography allowed</p>
						<Form.Item label='Yes' name='photography_allowed'>
							<Radio value={1} />
						</Form.Item>
						<Form.Item label='No' name='photography_allowed'>
							<Radio value={2} />
						</Form.Item>
					</Radio.Group>
				</Row>
				<Form.Item label='Notes about piano' name='piano_notes'>
					<TextArea placeholder='Piano notes' />
				</Form.Item>
				<Form.Item label='Parking notes' name='parking_notes'>
					<TextArea placeholder='Parking notes' />
				</Form.Item>
				<Form.Item label='Other notes on space' name='other_space_notes'>
					<TextArea 
						placeholder='Additional notes about venue'
					/>
				</Form.Item>
				<Form.Item label='Other relevant notes' name='other_relevant_notes'>
					<TextArea 
						placeholder='Additional notes'
					/>
				</Form.Item>
				<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default HouseContactHostForm;
