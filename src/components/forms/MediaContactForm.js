import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Select} from 'antd';
const { Option } = Select;
const { Search } = Input;

const MediaContactForm = ({onSubmit}) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>
				
				<h1>Media Contact Form</h1>
				<Form.Item label='Job title' name='job_title' >
					<Input type='text' placeholder='Business Name' />
					{/* {errors.job_title && <p>Required</p>} */}
				</Form.Item>
				<Form.Item label='Media organization name' name='media_organization'>
					<Input
						type='text'
						placeholder='Media organization'
					/>
					{/* {errors.media_organization && <p>Required</p>} */}
				</Form.Item>
				<Form.Item label='Website' name='website' >
					<Input type='text' placeholder='Website address' />
					{/* {errors.website && <p>Required</p>} */}
				</Form.Item>
				<Form.Item>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>

	);
};
export default MediaContactForm;
