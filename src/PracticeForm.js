import { ErrorMessage, Field, Form, FormikProvider, useFormik } from 'formik';
import * as UI from 'react-bootstrap';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import './Test.css'
// import {useHistory} from 'react-router'
export const PracticForm=()=>{
    // const history=useHistory()
    const formik=useFormik({
        initialValues:{username:"",password:""},
        validationSchema:Yup.object({
            username:Yup.string().required('Username Required'),
            password:Yup.string().required('Password Required')
        }),
        onSubmit:(values)=>{
            Swal.fire({
                icon:"success",
                text:"Form Submitted Successfully."
            }).then(function(){
                // history.go()
                alert(JSON.stringify(values))
            })
            
        }
    })
    return(
        <UI.Container >
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className='formContainer'>
                    <UI.Row className='row'>
                        <UI.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                            <UI.InputGroup className='inputGroup'>
                                <span className='label-text-style'><span className='mandatory'>*</span> Username:</span>
                                <Field type="text" name="username"
                                className={`form-control form-control-sm ${formik?.values?.username!==""?"is-valid":"is-invalid"}`}></Field>
                                 <ErrorMessage name="username" className='text-error' component="div"/>
                            </UI.InputGroup>
                        </UI.Col>
                        <UI.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></UI.Col>
                    </UI.Row>
                    <UI.Row className='row'>
                        <UI.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
                            <UI.InputGroup className='inputGroup'>
                            <span className='label-text-style'><span className='mandatory'>*</span> Password:</span>
                                <Field type="password" name="password"
                                className={`form-control form-control-sm ${formik?.values?.password!==""?"is-valid":"is-invalid"}`}></Field>
                                <ErrorMessage name="password" className='text-error' component="div"/>
                            </UI.InputGroup>
                        </UI.Col>
                        <UI.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}></UI.Col>
                    </UI.Row>
                   
                    <button type='submit' className='btn btn-success'>Submit</button>
                </Form>
            </FormikProvider>
        </UI.Container>
    )
}