import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_VENUE } from '../graphql/queries';
import { Form, Input, Button, Row, Checkbox, Col, Radio } from 'antd';
import { Link } from 'react-router-dom';

const VenueForm = ({ onSubmit }) => {
	const params = useParams();

	const editingVenue = params.id != null;

	const { loading, data } = useQuery(GET_VENUE, {
		skip      : !editingVenue,
		variables : { id: params.id },
	});

	const [
		submitted,
		setSubmitted,
	] = useState(false);

	const submitForm = values => {
		setSubmitted(true);
		onSubmit(values, params.id);
	};

	const [
		form,
	] = Form.useForm();

	if (!loading && data) {
		form.setFieldsValue(data.venue);
	}

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
							{ required: true, message: "'venue type' is required" }
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
				<Col span={6}>
					<Form.Item
						label='Smoking Allowed'
						name='smoking_allowed'
						rules={[
							{ required: true },
						]}>
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

				<Col span={6}>
					<Form.Item
						label='Under 21 Allowed'
						name='under21_allowed'
						rules={[
							{ required: true },
						]}>
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
				<Col span={6}>
					<Form.Item
						label='Under 18 Allowed'
						name='under18_allowed'
						rules={[
							{ required: true },
						]}>
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

				<Col span={6}>
					<Form.Item
						label='Wheelchair Accessible'
						name='wheelchair_accessible'
						rules={[
							{ required: true },
						]}>
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

				<Col span={6}>
					<Form.Item
						label='Beer Served'
						name='alcohol_beer_provided'
						rules={[
							{ required: true },
						]}>
						<Radio.Group aria-label='Beer Served'>
							<Radio value={false} name='alcohol_beer_provided'>
								No
							</Radio>
							<Radio value={true} name='alcohol_beer_provided'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item
						label='Wine Served'
						name='alcohol_wine_provided'
						rules={[
							{ required: true },
						]}>
						<Radio.Group aria-label='Wine Served'>
							<Radio value={false} name='alcohol_wine_provided'>
								No
							</Radio>
							<Radio value={true} name='alcohol_wine_provided'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item
						label='Alcohol Spirits Served'
						name='alcohol_spirits_provided'
						rules={[
							{ required: true },
						]}>
						<Radio.Group aria-label='Alcohol Spirits Served'>
							<Radio value={false} name='alcohol_spirits_provided'>
								No
							</Radio>
							<Radio value={true} name='alcohol_spirits_provided'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item
						label='Food Served'
						name='food_served'
						rules={[
							{ required: true },
						]}>
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
					<Form.Item
						label='Indoor Venue'
						name='indoor_venue'
						rules={[
							{ required: true },
						]}>
						<Radio.Group aria-label='Indoor Venue'>
							<Radio value={false} name='indoor_venue'>
								No
							</Radio>
							<Radio value={true} name='indoor_venue'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item
						label='Outdoor Venue'
						name='outdoor_venue'
						rules={[
							{ required: true },
						]}>
						<Radio.Group aria-label='Outdoor Venue'>
							<Radio value={false} name='outdoor_venue'>
								No
							</Radio>
							<Radio value={true} name='outdoor_venue'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>

				<Col span={6}>
					<Form.Item
						label='Parking Lot Available'
						name='parking_lot_available'
						rules={[
							{ required: true },
						]}>
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
			</Row>
			<Row>
				<Col span={6}>
					<Form.Item label='Parking Max Capacity' name='parking_max_capacity'>
						<Input placeholder='Parking Max Capacity' type='number' />
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<Form.Item
						label='TabC Certified'
						name='tabc_certified'
						rules={[
							{ required: true },
						]}>
						<Radio.Group aria-label='TabC Certified'>
							<Radio value={false} name='tabc_certified'>
								No
							</Radio>
							<Radio value={true} name='tabc_certified'>
								Yes
							</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
			</Row>

			{/* <Row>
				<input type="radio" name="radio"/>

				</Row> */}

			<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	) : (
		<div>
			<p>Submitted successfully</p>
			<Link to='/venue'>
				<Button>Continue</Button>
			</Link>
		</div>
	);
};

export default VenueForm;
