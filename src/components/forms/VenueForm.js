// type Venue {
//   x  Id: ID! @id
//   x  date_created: DateTime! @createdAt
//   x  name: String!
//   x  venue_type: String!
//   x  address: String!
//   x  city: String!
//   x  state: String!
//   x  zip: String!
//   x  max_capacity: Int
//   x  min_income: Float
//   x  deposit_amount: Float
//   x  smoking_allowed: Boolean!
//   x  under21_allowed: Boolean!
//   x  under18_allowed: Boolean!
//   x  wheelchair_accessible: Boolean!
//   x  alcohol_beer_provided: Boolean!
//   x  alcohol_wine_provided: Boolean!
//   x  alcohol_spirits_provided: Boolean!
//   x  food_served: Boolean!
//   x  vendors: [Vendor!]!
//   x  max_decibel: Float
//   x  opening_time: String
//   x  closing_time: String
//   x  dance_floor_size: String
//   x  indoor_venue: Boolean!
//   x  outdoor_venue: Boolean!
//   x  parking_lot_available: Boolean!
//     parking_max_capacity: Int
//     tabc_certified: Boolean!
// }



import React, { useState } from 'react';
import { Form, Input, Button, Row, Checkbox, Col } from 'antd';

const VenueForm = ({ onSubmit }) => {
	const [
		submitted,
		setSubmitted,
	] = useState(false);

	const submitForm = values => {
        console.log('IT SUBMITS', values)
		setSubmitted(true);
        onSubmit(values);
        console.log(onSubmit)
	};

	return !submitted ? (
		<Form layout='vertical' onFinish={submitForm}>
			<h1>Add New Profile</h1>
			<Row
				gutter={[
					16,
					16,
				]}>
				<Col span={12}>
					<Form.Item
						label='First Name'
						name='first_name'>
						<Input placeholder='Enter first name' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label='Last Name'
						name='last_name'
					>
						<Input placeholder='Enter last name' />
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
						label='Email'
						name='email'
					>
						<Input type='email' placeholder='Enter email address' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='Phone number' name='phone'>
						<Input type='number' placeholder='Enter phone number' />
					</Form.Item>
				</Col>
                <Col span={12}>
					<Form.Item label='Venue Type' name='venue_type'>
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
					<Form.Item label='Address' name='address'>
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
					<Form.Item label='Address line 2 (optional)' name='address2'>
						<Input placeholder='Enter apartment, suite, etc' />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label='City' name='city'>
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
					<Form.Item label='State' name='state'>
						<Input placeholder='Enter state' />
					</Form.Item>
				</Col>
				<Col span={6}>
					<Form.Item
						label='Zip code'
						name='zip'
					>
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
						<Input type="number" placeholder='Max Capacity' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Min Capacity' name='min_capacity'>
						<Input type="number" placeholder='Min Capacity' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Deposit Amount' name='deposit_amount'>
						<Input placeholder='Deposit Amount' type="number" />
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
                        <Checkbox>Smoking Allowed</Checkbox>
					</Form.Item>
				{/* </Col> */}

                <Col span={6}>
					<Form.Item label='Under 21 Allowed' name='under21_allowed'>
						<Input value="true" type="checkbox"/>
					</Form.Item>
</Col>
                    <Col span={6}>
					<Form.Item label='Under 18 Allowed' name='under18_allowed'>
						<Input type="checkbox" placeholder='Under 18 Allowed' />
					</Form.Item>
				</Col>
				
                <Col span={6}>
					<Form.Item label='Wheelchair Accessible' name='wheelchair_accessible'>
						<Input type="checkbox" placeholder='Wheelchair accessible' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Alcohol Beer Provided' name='alcohol_beer_provided'>
						<Input type="checkbox" placeholder='Alcohol Beer Provided' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Alcohol Wine Provided' name='alcohol_wine_provided'>
						<Input type="checkbox" placeholder='Alcohol Wine Provided' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Alcohol Spirits Provided' name='alcohol_spirits_provided'>
						<Input type="checkbox" placeholder='Alcohol Spirits Provided' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Food Served' name='food_served'>
						<Input type="checkbox" placeholder='Food Served' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Vendors' name='vendors'>
						<Input placeholder='Vendors' />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Max Decibel' name='max_decibel'>
						<Input type="number" placeholder='Max Decibel' />
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
						<Input placeholder='Parking Max Capacity' type="number" />
					</Form.Item>
				</Col>

                <Col span={6}>
					<Form.Item label='Tab C Certified' name='tabc_certified'>
						<Input type="checkbox" placeholder='Tab C Certified' />
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
