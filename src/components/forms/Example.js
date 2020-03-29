import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Select, Button, Radio } from "antd";
import ReactSelect from "react-select";

const { Option } = Select;


const defaultValues = { singleErrorInput: "" };

export default function App() {
  const { errors, handleSubmit, control, register, setValue} = useForm();
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

  const fieldProps = {
		colon : false,
  };
  
  const emailError = errors.email && 'Enter your email address';



  return (
    <>
  
  {console.log('errors', errors)}
      <form onSubmit={handleSubmit(onSubmit)}>

      <Form.Item label='Normal Input'>
        <Controller
          as={Input}
          control={control}
          name="normal_input"
          rules={{
            required: true,
            validate: validError
          }}
        />
        {errors.normal_input && <span>Required</span>}
        </Form.Item>



        <Form.Item label='Normal Input Custom'
        // validateStatus="error"
        // help="Should be combination of numbers & alphabets"
        >
        <Controller
          as={Input}
          control={control}
          name="normal_input_custom"
          rules={{
            required: true,
            validate: validError,
            validateStatus:"error"
          }}
        />
        {errors.normal_input_custom && <span>Required</span>}
        </Form.Item>

    {/* <Form.Item name='method-of-add' label='Method of Add'>
      <Controller as={Select} control={control} name='method-of-add'>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Controller>
    </Form.Item> */}


    {/* <Controller 
                as={Input} 
                name="email" 
                control={control} 
                defaultValue=""
                rules={{
                    required: true
                }}
                validateStatus={emailError ? 'error' : ''}
                help={emailError}
            /> */}

           

{/* <Controller
        name="gemail"
        control={control}
        rules={{ required: "Please enter your email address" }}
        as={
          <Form.Item
            label="name"
            validateStatus={errors.email && "error"}
            help={errors.email && errors.email.message}
          >
            <Input />
          </Form.Item>
        }
      /> */}


<Form.Item label='React Select'>
            <Controller
              as={ReactSelect}
              options={[
                { value:"chocolate", label: "Chocolate" },
                // { value: "strawberry", label: "Strawberry" },
                // { value: "vanilla", label: "Vanilla" }
              ]}
              name="ReactSelect"
              isClearable
              control={control}
            />
            </Form.Item>


            <Form.Item label='React Select With Validation'>
            <Controller
              as={ReactSelect}
              options={[
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
              rules={{required: true}}
              name="reac_select_validation"
              isClearable
              control={control}
            />
              {errors.reac_select_validation && <span>Required</span>}

            </Form.Item>


            <section>
            <Form.Item label='Photography allowed'>
            <Controller
              as={
                <Radio.Group>
					<Form.Item label='Yes'>
						<Controller as={Radio} control={control} name='example' value="1" />
					</Form.Item>
					<Form.Item label='No'>
						<Controller as={Radio} control={control} name='example' value="2" />
					</Form.Item>
				</Radio.Group>
              }
              name="photography"
              control={control}
            />
            </Form.Item>
          </section>


          <section>
          <Form.Item label='Radio Group'>
            <Controller
              as={
                <Radio.Group aria-label="gender">
                  
                  {/* <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio> */}
                </Radio.Group>
              }
              name="radio_group"
              control={control}
            />
            </Form.Item>
          </section>


<label>Awesome</label>
          <Radio.Group ref={register({required: false})} name="awesome">
        <Radio value={1} label="A">A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>

      <section>
      <Form.Item label='RadioKilla'>
            <Controller
              as={Radio}
              options={[
                { value:"chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                // { value: "vanilla", label: "Vanilla" }
              ]}
              name="RadioKilla"
              control={control}
            />
            </Form.Item>
      </section>
         


      <section>
            <Form.Item label='Genderallowed'>
            <Controller
              as={
     <>
     {/* <input type="radio" id="male" name="gender2" value="male" ref={register({required: false})}/>
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender2" value="female" ref={register({required: false})}/>
  <label for="female">Female</label>
  <input type="radio" id="other" name="gender2" value="other" ref={register({required: false})}/>
  <label for="other">Other</label> */}
   <select name="Developer" ref={register({ required: true })}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
  </>
              }
              name="class_intensity2"
              control={control}
            />
            </Form.Item>
          </section>



          <section>
            <Form.Item label='Genderallowed 2'>
            <Controller
              as={
     <>
     <Radio type="radio" id="male" name="gender1" value="male" ref={register({required: false})}/>
  <label for="male">Male</label>
  <Radio type="radio" id="female" name="gender1" value="female" ref={register({required: false})}/>
  <label for="female">Female</label>
  <Radio type="radio" id="other" name="gender1" value="other" ref={register({required: false})}/>
  <label for="other">Other</label>
  </>
              }
              name="class_gender2"
              control={control}
            />
            </Form.Item>
          </section>

          <section>
            <Form.Item label='Genderallowed 3'>
            <Controller
            type="radio"
              as={Radio}
              name="class_gender3"
        
              options={[
                { value:"nigerian", label: "Nigegerian" },
                { value: "ghana", label: "Ghana" },
                // { value: "vanilla", label: "Vanilla" }
              ]}
              control={control}
              setValue={setValue}
            >


            {/* <Radio type="radio" id="male" name="gender3" value="male"/> */}
  <label for="male">Male</label>
  {/* <Controller as={Radio} control={control} type="radio" id="female" name="class_gender3" value="female">Female</Controller>
  <Controller as={Radio} control={control} type="radio" id="female2" name="class_gender" value="female2">Female2</Controller> */}

  {/* <Radio type="radio" id="female" name="gender3" value="female" ref={register({required: false})}/>
  <label for="female">Female</label>
  <Radio type="radio" id="other" name="gender3" value="other" ref={register({required: false})}/>
  <label for="other">Other</label> */}
</Controller>
            </Form.Item>
           
          </section>

          <section>

<Form.Item>
    <Controller
    type="radio"
    as={Radio.Group}
    rules= {[{
      required: true,
      message: 'Please Choose your option!',
      }]}
      as={<>
          <Radio name="chicko" label="true" value={true} ref={register({required: false})}>Taxable</Radio>
          <Radio name="chicko" label="false" value={false} ref={register({required: false})}>Non Taxable</Radio>
      </>}
      control={control}
      name="chicko"
    />

</Form.Item>
          </section>

{/* <section>
            <label>React Select</label>
            <Controller
              as={ReactSelect}
              name="ReactSelect"
              isClearable
              control={control}
            >
              <Option value="jack" label="Jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
              </Controller>
          </section> */}



        {/* <button type="submit">Submit</button> */}

      {/*Fixed button*/}
        <Button block type="primary" htmlType="submit">
        Submit
      </Button>

        
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
