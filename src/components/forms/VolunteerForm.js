import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Select } from 'antd';
const {Option} = Select;

function VolunteerForm() {
  const { control, register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; 

  return (
    <>
    <h2>This form should work (look in console)</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Controller as={Input} type="text" control={control} name="firstName" />
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
        // defaultValue={{}}
      /> */}

{/* <Form.Item name="method-of-add"  label="Method of Add">
						<Controller as={Select}>
							<Option>select</Option>
							<Option value="option1">Option 1</Option>
							<Option value="option2">Option 2</Option>	
						</Select>
					</Form.Item> */}

	  <button>Submit</button>
    </form>
    </>
  );
}

export default VolunteerForm;
