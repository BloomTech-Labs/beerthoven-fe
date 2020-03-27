import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Form, Input } from "antd";

const defaultValues = { example: "" };

export default function App() {
  const { errors, handleSubmit, control } = useForm();
  const [dataInput, setDataInput] = useState(defaultValues);
  const some = useForm(defaultValues);

  const onSubmit = data => {
    setDataInput(data);
  };

  console.log('dataInput insdie', dataInput)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

	  <Form.Item label="Example" >
        <Controller
          as={Input}
          control={control}
          name="example"
          rules={{
            required: true,
            validate: value => value.length >= 0 || "error message"
          }}
        />
        {errors.singleErrorInput && <span>Required</span>}
		</Form.Item>

    <Form.Item label="Demo" >
        <Controller
          as={Input}
          control={control}
          name="demo"
          rules={{
            required: true,
            validate: value => value.length >= 0 || "error message"
          }}
        />
        {errors.singleErrorInput && <span>Required</span>}
		</Form.Item>

    

        <button type="submit">Submit</button>
      </form>

{/* {console.log('dataInput insdie', dataInput)} */}

      

      <pre style={{ marginTop: 54 }}>
      {JSON.stringify(dataInput, null, 2)}
      </pre>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
