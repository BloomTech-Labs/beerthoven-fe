import React from 'react';
import { useForm, Controller, FormContext } from "react-hook-form";
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const {Option} = Select;
const {Search} = Input;

const defaultValues = {example: "", exampleRequired: ""}




export default function Example() {
	const { control, register, handleSubmit, errors, reset, rules } = useForm({reValidateMode: "onSubmit"});
	const form = useForm({ defaultValues });

  const onSubmit = data => { console.log(data) }

  const isNotFilledTel = v => {
	const clearedTel = "clearTel(v)";
	return clearedTel;
  };

  return (
	  <>
	  <h1>Things to complete</h1>

	  
	 <span> <input type="checkbox" name="validation" checked/>
	  <label>Validation</label></span>

	 <span style={{marginLeft: '20px'}}> <input type="checkbox" name="errormessage"/>
	  <label>Error Message</label></span>

	 <div> <h1>Example Form</h1></div>
		 
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={form.handleSubmit(onSubmit)}>




	  <Form.Item label="Example" >
	<Controller 
	as={Input} 
	control={form.control}
	rules={{ required: true }}
	error={!!errors.example}
	helperText={errors.example && <span>This field is required</span>}
	name="example" placeholder="example" type="text"/>
  </Form.Item>

  <Form.Item label="Something" >
  <Controller 
	as={Input} 
	control={form.control}
	rules={{
		validate: {
		  inputreq: isNotFilledTel
		}
	  }}
	error={!!errors.something}
	helperText={errors.something && <span>This field is required</span>}
	name="something" placeholder="something" type="text"/>
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