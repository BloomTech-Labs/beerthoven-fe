import React from 'react';
import { useForm, Controller, FormContext } from "react-hook-form";
import { Form, Input, Button, Select, DatePicker, Row, Radio } from 'antd';
const {Option} = Select;
const {Search} = Input;
const {TextArea} = Input;



const defaultValues = {firstName: "", example: "", name: "", exampleRequired: ""}

function VolunteerForm() {
  const { control, register, handleSubmit, errors, reset } = useForm();
  const form = useForm({ defaultValues });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset(); //supposed to reset
  }; 

  

  return (
    <>
    
    
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <Form.Item name=''>
				<Select style={{width: 400}}>
					<Option>Volunteer Form</Option>
				</Select>
			</Form.Item>
			<Form.Item name=''>
				<Search placeholder='Search for record' onSearch={value => console.log(value)} style={{ width: 400 }} />
			</Form.Item>
      <h1>Volunteer Form</h1>
    <Form.Item label="Event date">
    <Controller as={DatePicker} type="text" control={form.control} name="firstName" placeholder="Select event date" />
    {errors.firstName && <p>Required</p>}
    </Form.Item>

 <Form.Item label="Role served">
      <Controller as={Input} control={form.control} name="example" placeholder="Enter volunteer role"/>
      {errors.example && <p>Required</p>}
 </Form.Item>
<Row>
  <Form.Item label="Time in" >
    <Controller as={Input} control={form.control} name="example" placeholder="Hour" type="text"/>
  </Form.Item>
  <Form.Item>
    <Controller as={Input} control={form.control} name="example" placeholder="Minute" type="text"/>
  </Form.Item>
  <Radio.Group >
  <Form.Item label="AM">
    <Controller as={Radio} control={form.control} name="example" value={1} /> 
  </Form.Item>
  <Form.Item label="PM">
    <Controller as={Radio} control={form.control} name="example" value={2} />
  </Form.Item>
  </Radio.Group>
  <Form.Item label="Time out">
    <Controller as={Input} control={form.control} name="example" placeholder="Hour"/>
  </Form.Item>
  <Form.Item>
    <Controller as={Input} control={form.control} name="example" placeholder="Minute"/>
  </Form.Item>
  <Radio.Group >
  <Form.Item label="AM">
    <Controller as={Radio} control={form.control} name="example" value={1} /> 
  </Form.Item>
  <Form.Item label="PM">
    <Controller as={Radio} control={form.control} name="example" value={2} />
  </Form.Item>
  </Radio.Group>
</Row>
<Row>
  <Form.Item label="Total hours served" >
    <Controller as={Input} control={form.control} name="example" placeholder="Total hours" />
  </Form.Item>
  </Row>
<Row>
  <Form.Item label="Certifications" >
    <Controller as={Input} control={form.control} name="example" placeholder="Certifications" />
  </Form.Item>
</Row>
<Row>
  <Form.Item label="Notes on performance">
    <Controller as={TextArea} control={form.control} name="example" placeholder="Performance notes"/>
  </Form.Item>
</Row>
 {/* <Form.Item label="Name">
      <Controller as={Input} control={form.control} name="name" ref={register({ required: true})} /> 
	  {errors.name && <p>Required</p>}
    </Form.Item>

    <Form.Item label="Example Required">
    <Controller as ={Input} control={form.control}
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
       {errors.exampleRequired && <p>This field is required</p>}
    </Form.Item> */}

    <button>Submit</button>
    </form>
{/* 
        <pre style={{marginTop: 54 }}>
          {JSON.stringify(form.watch(), null, 2)}
        </pre> */}
       
    </>
  );
}

export default VolunteerForm;
