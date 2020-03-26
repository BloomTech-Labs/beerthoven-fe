import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const {Option} = Select;
const {Search} = Input;
const {TextArea} = Input;

const defaultValues = {firstName: "", example: "", name: "", exampleRequired: ""}


const ComposerForm = () => {
const {register, handleSubmit, errors} = useForm();
const form = useForm({ defaultValues })

const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset()
}

return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item name=''>   
				<Select style={{width: 400}}>
					<Option>Composer Form</Option>
				</Select>
			</Form.Item>
			<Form.Item name=''>
				<Search placeholder='Search for record' onSearch={value => console.log(value)} style={{ width: 400 }} />
			</Form.Item>
      <h1>Composer Form</h1>
      <Form.Item name="" label="Beerthoven world premieres">
          <Controller as={Input} control={form.control}  name="example" placeholder="Works" />
      </Form.Item>
      <Form.Item name="" label="Date work was featured">
          <Controller as={DatePicker} control={form.control}  name="example" placeholder="Select event date" />
      </Form.Item>
      <Form.Item name="" label="Composer personal appearances">
          <Controller as={DatePicker} control={form.control}  name="example" placeholder="Select event date" />
      </Form.Item>
    </Form>
)

}
export default ComposerForm

