import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

// const defaultValues = { firstName: '', example: '', name: '', exampleRequired: '' };

const HouseContactHostForm = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset(); //supposed to reset
	};
	return (
		<Form layout='vertical'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item>
					<Select style={{ width: 400 }}>
						<Option>House Concert Host Form</Option>
					</Select>
				</Form.Item>
				<Form.Item>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>House Concert Host Form</h1>
				<Row>
					<Form.Item label='Event hosted'>
						<Controller as={Input} control={control} name='event_hosted' placeholder='Event hosted' />
					</Form.Item>
					<Form.Item label='Event date'>
						<Controller
							as={DatePicker}
							control={control}
							name='event_date'
							placeholder='Select event date'
						/>
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Equipment load in time'>
						<Controller as={Input} control={control} name='equipment_load_in' placeholder='Load in time' />
					</Form.Item>
					<Form.Item label='Equipment load out time'>
						<Controller
							as={Input}
							control={control}
							name='equipment_load_out'
							placeholder='Load out time'
						/>
					</Form.Item>
				</Row>
				<Row>
					<Form.Item label='Square footage of concert space'>
						<Controller
							as={Input}
							control={control}
							name='square_footage'
							placeholder='Venue square footage'
						/>
					</Form.Item>
					<Form.Item label='Guest capacity'>
						<Controller as={Input} control={control} name='guest_capacity' placeholder='Guest capacity' />
					</Form.Item>
				</Row>
				<Form.Item label='Notes on accessibility'>
					<Controller
						as={TextArea}
						control={control}
						name='accessibility_notes'
						placeholder='Accessibility notes'
					/>
				</Form.Item>
				<Row>
					<Form.Item label='Host guest preferences'>
						<Select style={{ width: 400 }}>
							<Controller as={Option} control={control} name='host_guest_preferences' />
						</Select>
					</Form.Item>
					<Form.Item label='Host musical preferences'>
						<Controller
							as={Input}
							control={control}
							name='musical_preferences'
							placeholder='Musical preferences'
						/>
					</Form.Item>
				</Row>
				<Row>
					<Radio.Group>
						<p>Owns a quality piano</p>
						<Form.Item label='Yes'>
							<Controller as={Radio} control={control} name='owns_piano' value={1} />
						</Form.Item>
						<Form.Item label='No'>
							<Controller as={Radio} control={control} name='owns_piano' value={2} />
						</Form.Item>
					</Radio.Group>
					<Radio.Group>
						<p>Photography allowed</p>
						<Form.Item label='Yes'>
							<Controller as={Radio} control={control} name='photography_allowed' value={1} />
						</Form.Item>
						<Form.Item label='No'>
							<Controller as={Radio} control={control} name='photography_allowed' value={2} />
						</Form.Item>
					</Radio.Group>
				</Row>
				<Form.Item label='Notes about piano'>
					<Controller as={TextArea} control={control} name='piano_notes' placeholder='Piano notes' />
				</Form.Item>
				<Form.Item label='Parking notes'>
					<Controller as={TextArea} control={control} name='parking_notes' placeholder='Parking notes' />
				</Form.Item>
				<Form.Item label='Other notes on space'>
					<Controller
						as={TextArea}
						control={control}
						name='other_space_notes'
						placeholder='Additional notes about venue'
					/>
				</Form.Item>
				<Form.Item label='Other relevant notes'>
					<Controller
						as={TextArea}
						control={control}
						name='other_relevant_notes'
						placeholder='Additional notes'
					/>
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default HouseContactHostForm;
