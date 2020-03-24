import React from  "react";
import { useForm } from 'react-hook-form';


export default function Login() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log("Here's Johnny!", data) }  

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <input name="userName" defautValue="Email" ref={register({ required: true })} />
      <input name="password" defautValue="Password" ref={register({ required: true })} />
      {errors.userName && <span>This field is required</span>}
      {errors.password && <span>This field is required</span>}
    </form>    
  )
  
}

