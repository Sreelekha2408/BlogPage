import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import { useState } from "react"
import { Modal, ModalBody } from "react-bootstrap";
import * as Yup from 'yup';
import * as UI from 'react-bootstrap';
// import './form.css'
export const FolderForm=()=>{
    const [show,setShow]=useState(false)
    function showForm(){
        setShow(true);
    }
    const formik=useFormik({
        initialValues:{date:"",name:"",id:""},
        validationSchema:Yup.object({
            date:Yup.string().required('Required'),
            name:Yup.string().required('Required'),
        }),
        onSubmit:(values)=>{
            // values.id=
            alert(JSON.stringify(values))
        }
    })
    return(
        <>
        <button type="button" className="btn btn-primary" onClick={()=>showForm()}>Create Folder</button>
        <Modal show={show} size="md">
            <ModalBody>
                <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <UI.Row>
                        <UI.Col sm={12} xs={12} md={12} lg={10} xl={10} xxl={10}>
                            <Field type="date" name="date" className={`form-control ${formik?.values?.date!==""?"is-valid":"is-invalid"}`}/>
                            <ErrorMessage className="text-error" style={{color:"red"}} name="date" component="div"/>
                        </UI.Col>
                        <UI.Col sm={12} xs={12} md={12} lg={2} xl={2} xxl={2}></UI.Col>
                    </UI.Row>
                    <UI.Row>
                        <UI.Col sm={12} xs={12} md={12} lg={10} xl={10} xxl={10}>
                            <Field type="text" name="name" className={`form-control ${formik?.values?.name!==""?"is-valid":"is-invalid"}`}/>
                            <ErrorMessage className="text-error" style={{color:"red"}} name="name" component="div"/>
                        </UI.Col>
                        <UI.Col sm={12} xs={12} md={12} lg={2} xl={2} xxl={2}></UI.Col>
                    </UI.Row>
                    <UI.Row>
                        <UI.Col sm={12} xs={12} md={12} lg={8} xl={8} xxl={8}></UI.Col>
                        <UI.Col sm={12} xs={12} md={12} lg={4} xl={4} xxl={4}>
                            <button type="submit" className="btn btn-success">Create</button>
                        </UI.Col>
                    </UI.Row>
                </Form>
                </FormikProvider>
                {/* <h1>Test</h1> */}
            </ModalBody>
        </Modal>
        </>
    )
}