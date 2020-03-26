import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Select } from 'antd';
const {Option} = Select;


const defaultValues = {firstName: "", example: "", name: "", exampleRequired: ""}

function VolunteerForm() {
  const { control, register, handleSubmit, errors, reset } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset(); //supposed to reset
  }; 

  const form = useForm({ defaultValues });

  return (
    <>
    <h2>This form should work (look in console)</h2>
    <form onSubmit={form.handleSubmit(onSubmit)}>

    <Form.Item label="First Name">
    <Controller as={Input} type="text" control={form.control} name="firstName" />
    {errors.firstName && <p>Required</p>}
    </Form.Item>

 <Form.Item label="Example">
      <Controller as={Input} control={form.control} name="example"/>
      {errors.example && <p>Required</p>}
 </Form.Item>

 <Form.Item label="Name">
      <Controller as={Input} control={form.control} name="name" ref={register({ required: true})} /> 
	  {errors.name && <p>Required</p>}
    </Form.Item>

    <Form.Item label="Example Required">
    <Controller as ={Input} control={form.control}
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
       {errors.exampleRequired && <p>This field is required</p>}
    </Form.Item>

    <button>Submit</button>
    </form>

        <pre style={{marginTop: 54 }}>
          {JSON.stringify(form.watch(), null, 2)}
        </pre>
       
    </>
  );
}

export default VolunteerForm;
