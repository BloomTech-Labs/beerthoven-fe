import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Select } from "antd";

const { Option } = Select;

const defaultValues = { singleErrorInput: "" };

export default function App() {
  const { errors, handleSubmit, control} = useForm();
  const [dataInput, setDataInput] = useState(defaultValues);

  const onSubmit = data => {
    setDataInput(data);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const validError = (value)=>{
    return value.length >= 0 || "error message"
  }



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

      <Form.Item label='singleErrorInput'>
        <Controller
          as={Input}
          control={control}
          name="singleErrorInput"
          rules={{
            required: true,
            validate: validError
          }}
        />
        {errors.singleErrorInput && <span>Required</span>}
        </Form.Item>

        <Form.Item label='dropDown'>
          
        <Select name="dropDown" defaultValue="" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    </Form.Item>



        <button type="submit">Submit</button>

        
      </form>

{console.log('dataInput insdie', dataInput)}

      

      <pre style={{ marginTop: 54 }}>
      {JSON.stringify(dataInput, null, 2)}
      </pre>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
