import React from  "react";
import { useForm } from 'react-hook-form';
import { Form, Input, Button } from 'antd';

function Login() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => { console.log("Here's Johnny!", data) }  

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>      
      <Input
        type='text'
        placeholder='Email'      
        ref={register({ required: true })} />
      <Input 
      type='text'
      placeholder='Password'      
      ref={register({ required: true })} />
      {errors.userName && <span>This field is required</span>}
      {errors.password && <span>This field is required</span>}
      <Button type='default'>Login</Button>   
    </Form>
  )
  
}

export default Login;