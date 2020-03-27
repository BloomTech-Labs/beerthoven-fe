import React from 'react';
import { useForm, Controller} from 'react-hook-form';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;
const { Search } = Input;

const PerformerForm = () => {
	const { control, handleSubmit, errors, reset } = useForm();
	const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset(); //supposed to reset
	};

	return (
		<Form>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item>
					<Select style={{ width: 400 }}>
						<Option>Performer Form</Option>
					</Select>
				</Form.Item>
				<Form.Item>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Performer Form</h1>
				<Form.Item label='Instrument'>
					<Controller as={Input} control={control} name='instrument' placeholder='Instrument' type='text' />
				</Form.Item>
				<Form.Item label='Beerthoven events performed'>
					<Controller
						as={Input}
						control={control}
						name='events_performed'
						placeholder='Beerthoven events performed'
						type='text'
					/>
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default PerformerForm;
