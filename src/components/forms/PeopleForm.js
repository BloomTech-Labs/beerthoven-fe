import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Input, Button } from 'antd';



const PeopleForm = () => {
	const { register, handleSubmit, errors, reset } = useForm();
	const submitHandler = data => console.log(data, 'Haw haw - nelson muntz');

	return (
		<div>
			<h1>PeopleForm</h1>
			<Form.Item  onSubmit={handleSubmit(submitHandler)}>
				<Input
					ref={register({ required: true, maxLength: 100 })}
					type='text'
					name='nameFirst'
					placeholder='first Name'
				/>
        <Input
					ref={register({ required: true, maxLength: 100 })}
					type='text'
					name='nameLast'
					placeholder='last Name'
				/>
				<Button type='primary'>Submit</Button>
			</Form.Item>

      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
		</div>
	);
};

export default PeopleForm;
