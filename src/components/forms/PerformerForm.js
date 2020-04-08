import React from 'react';
import { useForm, Controller} from 'react-hook-form';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const { Search } = Input;

const PerformerForm = ({onSubmit}) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
				<h1>Performer Form</h1>
				<Form.Item label='Instrument' name='instrument'>
					<Input  placeholder='Instrument' type='text' />
				</Form.Item>
				<Form.Item name='events_performed' label='Beerthoven events performed'>
					<Input
						placeholder='Beerthoven events performed'
						type='text'
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
export default PerformerForm;
