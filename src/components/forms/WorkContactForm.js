import React from 'react';
import { Form, Input, Button} from 'antd';

const WorkContactForm = ({onSubmit}) => {

	return (
		<Form layout='vertical' onFinish={onSubmit}>

				<h1>Work Contact Form</h1>
				<Form.Item label='Email' name='email'>

					<Input type='text' placeholder='Email address' />
					{/* {errors.email && <p>Required</p>} */}
				</Form.Item>

				<Form.Item label='Phone number' name='phone_number'>
					<Input
						type='text'
						placeholder='(XXX) XXX-XXXX'
					/>
					{/* {errors.phone_number && <p>Required</p>} */}
				</Form.Item>

				<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};
export default WorkContactForm;
