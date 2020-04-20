import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENT } from '../graphql/queries';
import { Link } from 'react-router-dom';
import moment from 'moment';


import { Form, Input, Button, Row, Col, Radio, DatePicker } from 'antd';

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
		// convert strings that are expected to be numbers
		values.max_capacity = Number(values.max_capacity);
		values.min_capacity = Number(values.min_capacity);
		values.min_income = Number(values.min_income);
		values.deposit_amount = Number(values.deposit_amount);
		values.tickets_sold = Number(values.tickets_sold);
		values.setup_costs = Number(values.setup_costs);
		values.talent_costs = Number(values.talent_costs);
		values.event_date = values.event_date || new Date().toString();
		values.parking_max_capacity = Number(values.parking_max_capacity);
		values.sales_gross = Number(values.sales_gross);
		values.sales_net = Number(values.sales_net);
		setSubmitted(true);
		console.log('On Submit values', values)
		onSubmit(values, params.id);
	};

	const [
		form,
	] = Form.useForm();

	if (!loading && data) {
		data.event.event_date = moment(data.event.event_date);
		form.setFieldsValue(data.event);
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
							{ required: true, message: "'event name' is required" },
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
							{ required: true, message: "'event type' is required" },
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
					<Form.Item label='Address line 2' name='address2'>
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
							{ required: true, message: "'event description' is required" },
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
				<Col span={5}>
					<Form.Item label='Smoking Allowed' name='smoking_allowed'>
						<Radio.Group aria-label='Smoking Allowed'>
							<Radio value={false} name='smoking_allowed'>
								No
							</Radio>
							<Radio value={true} name='smoking_allowed'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col span={5}>
					<Form.Item label='Under 21 Allowed' name='under21_allowed'>
						<Radio.Group aria-label='Under 21 Allowed'>
							<Radio value={false} name='under21_allowed'>
								No
							</Radio>
							<Radio value={true} name='under21_allowed'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col span={5}>
					<Form.Item label='Under 18 Allowed' name='under18_allowed'>
						<Radio.Group aria-label='Under 18 Allowed'>
							<Radio value={false} name='under18_allowed'>
								No
							</Radio>
							<Radio value={true} name='under18_allowed'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col span={5}>
					<Form.Item label='Wheelchair Accessible' name='wheelchair_accessible'>
						<Radio.Group aria-label='Wheelchair Accessible'>
							<Radio value={false} name='wheelchair_accessible'>
								No
							</Radio>
							<Radio value={true} name='wheelchair_accessible'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Form.Item label='Tickets Sold' name='tickets_sold'>
					<Input placeholder='Tickets Sold' type='number' />
				</Form.Item>
			</Row>
			<Row>
				<Col span={6}>
					<Form.Item label='Alcohol Beer Served' name='alcohol_beer_served'>
						<Radio.Group aria-label='Alcohol Beer Served'>
							<Radio value={false} name='alcohol_beer_served'>
								No
							</Radio>
							<Radio value={true} name='alcohol_beer_served'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Alcohol Wine Served' name='alcohol_wine_served'>
						<Radio.Group aria-label='Alcohol Wine Served'>
							<Radio value={false} name='alcohol_wine_served'>
								No
							</Radio>
							<Radio value={true} name='alcohol_wine_served'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Alcohol Spirits Served' name='alcohol_spirits_served'>
						<Radio.Group aria-label='Alcohol Spirits Served'>
							<Radio value={false} name='alcohol_spirits_served'>
								No
							</Radio>
							<Radio value={true} name='alcohol_spirits_served'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Food Served' name='food_served'>
						<Radio.Group aria-label='Food Served'>
							<Radio value={false} name='food_served'>
								No
							</Radio>
							<Radio value={true} name='food_served'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
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
					<Input placeholder='Opening Time' />
				</Form.Item>
				<Form.Item label='Closing Time' name='closing_time'>
					<Input placeholder='Closing Time' />
				</Form.Item>
			</Row>
			<Row>
				<Form.Item
					label='Event Date'
					name='event_date'
					rules={[
						{ required: true,  message: "'event date' is required" },
					]}
				>
					<DatePicker aria-label="Event Date"/>
				</Form.Item>

				<Col span={6}>
					<Form.Item label='TabC Certified' name='smoking_allowed'>
						<Radio.Group aria-label='TabC Certified'>
							<Radio value={false} name='smoking_allowed'>
								No
							</Radio>
							<Radio value={true} name='smoking_allowed'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<Form.Item label='Indoor Event' name='indoor_event'>
						<Radio.Group aria-label='Indoor Event'>
							<Radio value={false} name='indoor_event'>
								No
							</Radio>
							<Radio value={true} name='indoor_event'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Outdoor Event' name='outdoor_event'>
						<Radio.Group aria-label='Outdoor Event'>
							<Radio value={false} name='outdoor_event'>
								No
							</Radio>
							<Radio value={true} name='outdoor_event'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<Form.Item label='Parking Lot Available' name='parking_lot_available'>
						<Radio.Group aria-label='Parking Lot Available'>
							<Radio value={false} name='parking_lot_available'>
								No
							</Radio>
							<Radio value={true} name='parking_lot_available'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Parking Max Capacity' name='parking_max_capacity'>
						<Input placeholder='Max Capacity' type='number' />
					</Form.Item>
				</Col>
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
		<div>
			<p>Submitted successfully</p>
			<Link to='/event'>
				<Button>Continue</Button>
			</Link>
		</div>
	);
};
export default EventForm;
