import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select, DatePicker} from 'antd';
const { Option } = Select;
const { Search } = Input;

const ComposerForm = () => {
	const { handleSubmit, control } = useForm();
    const onSubmit = (data, e) => {
		console.log(data);
		e.target.reset();
	};
    
    const fieldProps = {
		colon : false,
	};

	return (
		<Form layout='vertical'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Item name=''>
					<Select style={{ width: 400 }}>
						<Option>Composer Form</Option>
					</Select>
				</Form.Item>
				<Form.Item name=''>
					<Search
						placeholder='Search for record'
						onSearch={value => console.log(value)}
						style={{ width: 400 }}
					/>
				</Form.Item>
				<h1>Composer Form</h1>
				<Form.Item label='Beerthoven world premieres' {...fieldProps}>
					<Controller as={Input} control={control} name='works' placeholder='Works' />
				</Form.Item>
				<Form.Item label='Date work was featured' {...fieldProps}>
					<Controller as={DatePicker} control={control} name='featured_date' placeholder='Select event date' />
				</Form.Item>
				<Form.Item label='Composer personal appearances' {...fieldProps}>
					<Controller as={DatePicker} control={control} name='composer_date' placeholder='Select event date' />
				</Form.Item>
				<Controller name='submit' as={Button} type='primary' htmlType='submit' control={control}>
					Submit
				</Controller>
			</form>
		</Form>
	);
};
export default ComposerForm;
