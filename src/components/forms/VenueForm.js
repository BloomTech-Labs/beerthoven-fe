import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_VENUE } from '../graphql/queries';
import { Form, Input, Button, Row, Checkbox, Col, getFieldDecorator } from 'antd';

const VenueForm = ({ onSubmit }) => {
	const params = useParams();

	const editingVenue = params.id != null;

	const { loading, data } = useQuery(GET_VENUE, {
		skip      : !editingVenue,
		variables : { id: PageTransitionEvent.id },
	});

	const [
		submitted,
		setSubmitted,
	] = useState(false);

	const submitForm = values => {
		console.log('IT SUBMITS', values);
		setSubmitted(true);
		onSubmit(values);
	};

	const [
		checked,
		setChecked,
	] = useState(false);

	const [
		form,
	] = Form.useForm();

	if (!loading && data) {
		form.setFieldsValuue(data.venue);
	}

	const handleClick = () => setChecked(!checked);

	const Changing = e => {
		console.log('e.target.change', e.target.checked);
	};
	return !submitted ? (
		<Form form={form} layout='vertical' onFinish={submitForm}>
			<h1>Add New Venue</h1>
			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='Name'
						name='name'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter venue name' />
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
						label='Venue Type'
						name='venue_type'
						rules={[
							{ required: true },
						]}>
						<Input type='text' placeholder='Venue Type' />
					</Form.Item>
				</Col>
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col>
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
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={6}>
					<Form.Item
						label='State'
						name='state'
						rules={[
							{ required: true },
						]}>
						<Input placeholder='Enter state' />
					</Form.Item>
				</Col>
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
				<Col span={12} />
			</Row>

			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={6}>
					<Form.Item label='Max Capacity' name='max_capacity'>
						<Input type='number' placeholder='Max Capacity' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Min Income' name='min_income'>
						<Input type='number' placeholder='Minimum Income' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Deposit Amount' name='deposit_amount'>
						<Input placeholder='Deposit Amount' type='number' />
					</Form.Item>
				</Col>
			</Row>

			{/* Boolean Section */}
			<Row
				gutter={[
					16,
					16,
				]}>
				{/* <Col span={6}> */}
				<Form.Item name='smoking_allowed'>
					<Checkbox checked={checked} onClick={handleClick}>
						Smoking Allowed
					</Checkbox>
				</Form.Item>
				{/* </Col> */}

				<Col span={6}>
					<Form.Item name='under21_allowed'>
						<Checkbox>Under 21 Allowed</Checkbox>
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item name='under18_allowed'>
						{/* {getFieldDecorator()} */}
						<Checkbox onChange={Changing}>Under 18 Allowed</Checkbox>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item name='wheelchair_accessible'>
						<Checkbox>Wheelchair Accessible</Checkbox>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item name='alcohol_beer_served'>
						<Checkbox>Beer Served</Checkbox>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item name='alcohol_wine_served'>
						<Checkbox>Wine Served</Checkbox>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item name='alcohol_spirits_served'>
						<Checkbox>Spirits Served</Checkbox>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item name='food_served'>
						<Checkbox>Food Served</Checkbox>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Max Decibel' name='max_decibel'>
						<Input type='number' placeholder='Max Decibel' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Opening Time' name='opening_time'>
						<Input placeholder='Opening Time' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Closing Time' name='closing_time'>
						<Input placeholder='Closing Time' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Dance Floor Size' name='dance_floor_size'>
						<Input placeholder='Dance Floor Size' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Indoor Venue' name='indoor_venue'>
						<Input placeholder='Indoor Venue' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Outdoor Venue' name='outdoor_venue'>
						<Input placeholder='Outdoor Venue' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Parking Lot Available' name='parking_lot_available'>
						<Input placeholder='Parking Lot Available' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item label='Paking Max Capacity' name='parking_max_capacity'>
						<Input placeholder='Parking Max Capacity' type='number' />
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item name='tabc_certified'>
						<Checkbox>Tabc Certified</Checkbox>
					</Form.Item>
				</Col>
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

export default VenueForm;
