import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Select } from 'antd';

function VolunteerForm() {
  const { control, register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 

  return (
    <>
    <h2>This form should work (look in console)</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input control={control} name="firstName" ref={register({ required: true, maxLength: 20 })} />
    {errors.firstName && <p>Required</p>}

 <Form.Item label="Example">
      <Controller as={Input} control={control} name="example" inputRef={register} />
      {errors.example && <p>Required</p>}

 </Form.Item>

 <Form.Item label="Name">
      <Controller as={Input} control={control} name="name" ref={register({ required: true})} /> 
	  {errors.name && <p>Required</p>}
    </Form.Item>

    <Form.Item label="Example Required">
    <Controller as ={Input} control={control}
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
       {errors.exampleRequired && <p>This field is required</p>}
    </Form.Item>

    {/* <Controller
        as={Select}
        name="reactSelect"
        control={control}
        onChange={([selected]) => {
          // React Select return object instead of value for selection
          return { value: selected };
        }}
        defaultValue={{}}
      /> */}

	  <button>Submit</button>
    </form>
    </>
  );
}

export default VolunteerForm;
