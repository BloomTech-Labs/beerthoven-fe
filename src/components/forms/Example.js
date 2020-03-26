import React from 'react';
import { useForm, Controller, FormContext } from "react-hook-form";
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const {Option} = Select;
const {Search} = Input;

const defaultValues = {example: "", exampleRequired: ""}


export default function Example() {
	const { control, register, handleSubmit, errors, reset, rules } = useForm();
	const form = useForm({ defaultValues });

  const onSubmit = data => { console.log(data) }

  return (
	  <>
	  <h1>Example Form</h1>

	  
	  <input type="checkbox" name="validation" checked/>
	  <label>Validation</label>

	  <input type="checkbox" name="validationmessage" checked/>
	  <label>Validation</label>
	  
		  {/* <input type="checkbox" id="scales" name="scales"
         checked />
			 <label for="scales">Validation</label>

			 <input type="checkbox" id="message" name="message"/>
			 <label for="message">Error Message</label> */}
		 
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={form.handleSubmit(onSubmit)}>




	  <Form.Item label="Example" >
	<Controller 
	as={Input} 
	control={form.control}
	rules={{ required: true }}
	error={!!errors.example}
	helperText={errors.example && "Required."}
	name="example" placeholder="example" type="text"/>
  </Form.Item>
      
      {/* include validation with required or other standard HTML validation rules */}
      <Form.Item label="Example Required" >
	  <Controller as={Input} control={form.control} name="exampleRequired"/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
	  </Form.Item>
      
      <input type="submit" />
    </form>

	<pre style={{marginTop: 54 }}>
          {JSON.stringify(form.watch(), null, 2)}
        </pre>
	</>
  )
}