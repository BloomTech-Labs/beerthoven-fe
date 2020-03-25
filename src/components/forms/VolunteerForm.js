import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Input, Button } from 'antd';

function VolunteerForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item>Example
      <Input name="example" inputRef={register} />
</Form.Item>
	  <label>Name</label>
      <input name="name" ref={register} /> 
	  {errors.name && <p>Required</p>}

      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
	  <button>Submit</button>
    </form>
  );
}

export default VolunteerForm;
