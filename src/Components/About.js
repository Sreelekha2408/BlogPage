import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import '../App.css'
import * as UI from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa'
import moment from 'moment'
import { Nav } from './Navbar';

export const About = () => {
    const location = useLocation()
    const [postData, setPostData] = useState('')
    return (
        <>
              <Nav></Nav>
              <UI.Container className="example">
            <div>
               <span style={{fontSize:"18px",fontWeight:"bold"}}>About Us</span>
                <div id="example">
                    <br></br>
                    <UI.Row>
                        <UI.Col sm={4} md={4} lg={6} xl={6} xxl={6}>
                            Hiii,I'm Sreelekha.I have done this using ReactJS and react-bootstrap.
                        </UI.Col>
                    </UI.Row>
                </div>
            </div>
        </UI.Container>
        </>
     
    )
}