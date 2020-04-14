import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENT } from '../graphql/queries';
import { Form, Input, Checkbox, Button, Row, Col } from 'antd';

const EventForm = ({ onSubmit }) => {
	const params = useParams();

	const editingEvent = params.id != null;

	const { loading, data } = useQuery(GET_EVENT, {
		skip      : !editingEvent,
		variables : { id: params.id },
	});

	const [
		submitted,
		setSubmitted,
	] = useState(false);

	const submitForm = values => {
		setSubmitted(true);
		onSubmit(values);
	};

	const [form,] = Form.useForm()

	if (!loading && data) {
		form.setFieldsValue(data.event)
	}

	return !submitted ? (
		<Form form={form} layout='vertical' onFinish={submitForm}>
			<h1>Add New Event</h1>
			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='Event Name'
						name='event_name'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter event name' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='Event Type'
						name='event_type'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter event type' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label='Address'
						name='address'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter street address' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col>
					<Form.Item label='Address line 2 (optional)' name='address2'>
						<Input placeholder='Enter apartment, suite, etc' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='City'
						name='city'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter city' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label='State'
						name='state'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter state' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={6}>
					<Form.Item
						label='Zip code'
						name='zip'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter zip code' />
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						label='Event Description'
						name='event_description'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter event description' />
					</Form.Item>
				</Col>
				<Col span={12} />
			</Row>
			<Row>
				<Form.Item label='Max Capacity' name='max_capacity'>
					<Input placeholder='Max Capacity' type='number' />
				</Form.Item>
				<Form.Item label='Minimum Capacity' name='min_capacity'>
					<Input placeholder='Minimum Capacity' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item label='Minimum Income' name='min_income'>
					<Input placeholder='Minimum Income' type='number' />
				</Form.Item>
				<Form.Item label='Deposit Income' name='deposit_amount'>
					<Input placeholder='Deposit Income' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item name='smoking_allowed'>
					<Checkbox>Smoking Allowed</Checkbox>
				</Form.Item>
				<Form.Item name='under21_allowed'>
					<Checkbox>Under 21 Allowed</Checkbox>
				</Form.Item>
				<Form.Item name='under18_allowed'>
					<Checkbox>Under 18 Allowed</Checkbox>
				</Form.Item>
				<Form.Item name='wheelchair_accessible'>
					<Checkbox>Wheelchair Accessible</Checkbox>
				</Form.Item>
			</Row>
			<Row>
				<Form.Item label='Tickets Sold' name='tickets_sold'>
					<Input placeholder='Tickets Sold' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item name='alcohol_beer_served'>
					<Checkbox>Beer Served</Checkbox>
				</Form.Item>
				<Form.Item name='alcohol_wine_served'>
					<Checkbox>Wine Served</Checkbox>
				</Form.Item>
				<Form.Item name='alcohol_spirits_served'>
					<Checkbox>Spirits Served</Checkbox>
				</Form.Item>
				<Form.Item name='food_served'>
					<Checkbox>Food Served</Checkbox>
				</Form.Item>
			</Row>

			<Row>
				<Form.Item label='Setup Costs' name='setup_costs'>
					<Input placeholder='Setup Costs' type='number' />
				</Form.Item>
				<Form.Item label='Talent Costs' name='talent_costs'>
					<Input placeholder='Talent Costs' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item label='Opening Time' name='opening_time'>
					<Input placeholder='Opening Time' type='number' />
				</Form.Item>
				<Form.Item label='Closing Time' name='closing_time'>
					<Input placeholder='Closing Time' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item label='Event Date' name='event_date'>
					<Input placeholder='Event Date' type='number' />
				</Form.Item>
				<Form.Item name='tabc_certified'>
					<Checkbox>Tabc Certified</Checkbox>
				</Form.Item>
			</Row>
			<Row>
				<Form.Item name='indoor_event'>
					<Checkbox>Indoor Event</Checkbox>
				</Form.Item>
				<Form.Item name='outdoor_event'>
					<Checkbox>Outdoor Event</Checkbox>
				</Form.Item>
			</Row>
			<Row>
				<Form.Item name='parking_lot_available'>
					<Checkbox>Parking Lot Available</Checkbox>
				</Form.Item>
				<Form.Item label='Parking Max Capacity' name='parking_max_capacity'>
					<Input placeholder='Parking Max Capacity' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item label='Sales Gross' name='sales_gross'>
					<Input placeholder='Sales Gross' type='number' />
				</Form.Item>
				<Form.Item label='Sales Net' name='sales_net'>
					<Input placeholder='Sales Net' type='number' />
				</Form.Item>
			</Row>

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	) : (
		<p>Submitted successfully</p>
	);
};
export default EventForm;
