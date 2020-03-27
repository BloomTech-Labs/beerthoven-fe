import React from 'react';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const { Option } = Select;
const { Search } = Input;
const { TextArea } = Input;

const RecentBenefactorForm = () => {
	const { control, register, handleSubmit, errors, reset } = useForm();

	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset(); //supposed to reset
	};

	const fieldProps = {
		colon : false,
	};

	return (
		<Form>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item name=''>
					<Select style={{ width: 400 }}>
						<Option>Most Recent Benefactor Season Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Most Recent Benefactor Season Form</h1>
				<Row>
					<p>In-Kind donation</p>
					<Form.Item label='Yes' {...fieldProps}>
						<Controller as={Radio} type='text' control={control} name='in_kind_donation' value={1} />
					</Form.Item>
					<Form.Item label='No' {...fieldProps}>
						<Controller as={Radio} type='text' control={control} name='in_kind_donation' value={2} />
					</Form.Item>
					<Form.Item label='Date of donation' {...fieldProps}>
						<Controller
							as={DatePicker}
							type='text'
							control={control}
							name='date_of_donation'
							placeholder='Select donation'
						/>
						{errors.date_of_donation && <p>Required</p>}
					</Form.Item>
				</Row>
				<Form.Item label='Item(s) donated' {...fieldProps}>
					<Controller
						as={Input}
						type='text'
						control={control}
						name='items_donated'
						placeholder='Item(s) donated'
					/>
					{errors.items_donated && <p>Required</p>}
				</Form.Item>
				<Row>
					<Form.Item label='Amount given per season' {...fieldProps}>
						<Controller
							as={Input}
							type='text'
							control={control}
							name='donation_amount'
							placeholder='Donation amount'
						/>
						{errors.donation_amount && <p>Required</p>}
					</Form.Item>
                    <Form.Item label='Benefactor level per season' {...fieldProps}>
						<Controller
							as={Input}
							type='text'
							control={control}
							name='benefactor_level'
							placeholder='Benefactor level'
						/>
						{errors.benefactor_level && <p>Required</p>}
					</Form.Item>
				</Row>
				<Form.Item label='Automatic gift deposit info' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='gift_deposit' placeholder='Automatic gift deposit info' />
					{errors.gift_deposit && <p>Required</p>}
				</Form.Item>
                <Form.Item label='Saved cards for automatic gifts' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='saved_cards' placeholder='Saved cards for automatic gifts' />
					{errors.saved_cards && <p>Required</p>}
				</Form.Item>
                <Row>
                <Form.Item label='Date of gift 1' {...fieldProps}>
					<Controller as={DatePicker} type='text' control={control} name='gift1_date' placeholder='Select donation date' />
					{errors.gift1_date && <p>Required</p>}
				</Form.Item>
                <Form.Item label='Donation amount' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='donation_amount' placeholder='Donation amount' />
					{errors.donation_amount && <p>Required</p>}
				</Form.Item>
                </Row>
                <Row>
                <Form.Item label='Perk' {...fieldProps}>
					<Controller as={Input} type='text' control={control} name='perk' placeholder='Perk' />
					{errors.perk && <p>Required</p>}
				</Form.Item>
                <Form.Item label='Date thanked' {...fieldProps}>
					<Controller as={DatePicker} type='text' control={control} name='date_thanked' placeholder='Select park date' />
					{errors.date_thanked && <p>Required</p>}
				</Form.Item>
                </Row>
                
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default RecentBenefactorForm;
