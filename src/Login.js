import { ErrorMessage, Field, Form, FormikProvider, useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import * as Yup from 'yup'
import * as UI from 'react-bootstrap'
import './App.css'
import {useNavigate} from 'react-router-dom';
import Context from './Components/context';
const LoginForm = () => {
      const { user,getUser } = useContext(Context);
      const [showError,setShowError]=useState(false);
      const navigate=useNavigate()
        const formik = useFormik({
        initialValues: {
            username: "", password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username Required!!'),
            password: Yup.string().required('Password Required!')
        }),
        onSubmit: (values) => {
            setShowError(false)
            if(values.password=="admin@123"){
                getUser(values.username)
                navigate('/dashboard')
            }
            else{
                setShowError(true)
            }            
        }
    })
    return (
        <FormikProvider value={formik}>
            <UI.Container className='form'>
                <UI.Row>
                    <UI.Col xs={4} sm={4} md={4} lg={1} xl={1} xxl={1}>
                    </UI.Col>
                    <UI.Col xs={4} sm={4} md={4} lg={10} xl={10} xxl={10}>
                        <p><b>Login</b></p>
                        <Form onSubmit={formik.handleSubmit}>
                            <Field type="text" name="username" placeholder="Username" className="form-control"/>
                            <ErrorMessage className='text-error' name="username" component="div"/>
                            <Field type="password" name="password" placeholder="Password" className="form-control"/>
                            <ErrorMessage className='text-error' name="password" component="div"/>
                            {showError == true &&
                                <span className='text-error'>Invalid Username/Password</span>
                            }
                            <button type="submit" className='btn btn-success'>Login</button>
                            <UI.Col xs={4} sm={4} md={4} lg={12} xl={12} xxl={12}>
                            <p className="message">Not registered? <a href="#">Create an account</a></p>
                            </UI.Col>
                        </Form>
                    </UI.Col>
                    <UI.Col xs={4} sm={4} md={4} lg={1} xl={1} xxl={1}>
                    </UI.Col>
                </UI.Row>
            </UI.Container>
        </FormikProvider>
    )
}


export default LoginForm;