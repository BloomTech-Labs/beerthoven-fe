import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
// import {GET_USER} from '../graphql/queries'
import {Form, Input, Button, Row, Col} from 'antd'
import {Link} from 'react-router-dom'

const UserForm = (onSubmit) => {
    const params = useParams();

    const editingUser = params.id != null;

    const {loading, data} = useQuery(GET_USER, {
        skip: !editingUser,
        variables: {id: params.id},
    })

    const [
        submitted, setSubmitted,
    ] = useState(false)

    const submitForm = values => {
        setSubmitted(true)
        onSubmit(values, params.id)
    }

    const [form,] = Form.useForm()

    if (!loading && data) {
        form.setFieldsValue(data.user)
    }

    return !submitted ? (
        <Form form={form} layout='vertical' onFinish={submitForm}>
            <h1>Add New User</h1>

        </Form>
    )
}
export default UserForm