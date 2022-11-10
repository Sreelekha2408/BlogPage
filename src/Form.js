import './App.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup';
export const Form = () => {
   const [userName,setUserName]=useState('')
   const [password,setPassword]=useState('')
   const history=useNavigate()
   const formik=useFormik({
    initialValues:{username:"",password:""},
    validationSchema:Yup.object({
        username:Yup.string().required('Required'),
        password:Yup.string().required('Required')
    }),
    onSubmit:(values)=>{

    }
   })
    // function submitFunction(e){
    //     if(userName=="" || password == ""){
    //         let error = userName =='' ?"Username is Required":'Password is Required'  
    //         Swal.fire({
    //             icon:"warning",
    //             text:error
    //         })
    //         e.preventDefault()
    //     }
    //     else{
    //         history.push('/dashboard')
    //     }
    // }
    return (
        <div class="form">
             {/* <p><b>Login</b></p> */}
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <Field type="text" className="form-control" placeholder="UserName"></Field>
                    <ErrorMessage className='text-error' component="div"></ErrorMessage>
                </Form>
            </FormikProvider>
            {/* <form onSubmit={submitFunction}>
                <input type="text" name="username" placeholder="username" onChange={(e)=>setUserName(e.target.value)}></input>
                <input type="password" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
                <button type="submit">login</button>
            </form> */}
        </div>
    )
}