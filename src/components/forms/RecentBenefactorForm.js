import React from 'react';
import { Form, Input, Button, DatePicker, Row, Radio } from 'antd';

const RecentBenefactorForm = ({onSubmit}) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
				
				<h1>Most Recent Benefactor Season Form</h1>
				<Row>
					<p>In-Kind donation</p>
					<Form.Item label='Yes' name='in_kind_donation'>
						<Radio type='text' value={1} />
					</Form.Item>
					<Form.Item label='No' name='in_kind_donation'>
						<Radio type='text' value={2} />
					</Form.Item>

					{/* this part won't pull up calendar if deleted */}
					<Form.Item label='Date of donation'>
						{/* <DatePicker
							type='text'
							placeholder='Select donation'
						/> */}
					</Form.Item>

					<Form.Item  label='Date of donation' name='date_of_donation'>
					<DatePicker type='text' placeholder='Select donation date' />
					{/* {errors.date_thanked && <p>Required</p>} */}
				</Form.Item>



				</Row>
				<Form.Item name='items_donated' label='Item(s) donated'>
					<Input
						type='text'
						placeholder='Item(s) donated'
					/>
					{/* {errors.items_donated && <p>Required</p>} */}
				</Form.Item>
				<Row>
					<Form.Item name='donation_amount' label='Amount given per season'>
						<Input
							type='text'
							placeholder='Donation amount'
						/>
						{/* {errors.donation_amount && <p>Required</p>} */}
					</Form.Item>
                    <Form.Item name='benefactor_level' label='Benefactor level per season' >
						<Input
							type='text'
							placeholder='Benefactor level'
						/>
						{/* {errors.benefactor_level && <p>Required</p>} */}
					</Form.Item>
				</Row>
				<Form.Item name='gift_deposit' label='Automatic gift deposit info'>
					<Input type='text' placeholder='Automatic gift deposit info' />
					{/* {errors.gift_deposit && <p>Required</p>} */}
				</Form.Item>
                <Form.Item name='saved_cards' label='Saved cards for automatic gifts'>
					<Input type='text' placeholder='Saved cards for automatic gifts' />
					{/* {errors.saved_cards && <p>Required</p>} */}
				</Form.Item>
                <Row>
                <Form.Item label='Date of gift 1' name='gift1_date'>
					<DatePicker type='text' placeholder='Select donation date' />
					{/* {errors.gift1_date && <p>Required</p>} */}
				</Form.Item>
                <Form.Item label='Donation amount' name='donation_amount'>
					<Input type='text' placeholder='Donation amount' />
					{/* {errors.donation_amount && <p>Required</p>} */}
				</Form.Item>
                </Row>
                <Row>
                <Form.Item label='Perk' name='perk'>
					<Input type='text' placeholder='Perk' />
					{/* {errors.perk && <p>Required</p>} */}
				</Form.Item>
                <Form.Item label='Date thanked' name='date_thanked'>
					<DatePicker type='text' placeholder='Select park date' />
					{/* {errors.date_thanked && <p>Required</p>} */}
				</Form.Item>
                </Row>
                
				<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>

		</Form>
	);
};
export default RecentBenefactorForm;
