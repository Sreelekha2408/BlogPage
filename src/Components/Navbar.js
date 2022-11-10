import { useNavigate } from "react-router-dom"
import * as UI from 'react-bootstrap';
import { useContext, useEffect } from "react";
import Context from "./context";
import { BiPowerOff } from "react-icons/bi";
import Swal from "sweetalert2";

export const Nav = () => {
    const { user, logOut } = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        if (user == "") {
            navigate('/')
        }
    }, [user])
    function logOutFunction() {
        Swal.fire({
            icon: "question",
            text: "Are you sure want to log out?",
            showCancelButton: true
        }).then(function (result) {
            if (result.isConfirmed) {
                logOut()
            }
        })
    }
    function abouUs() {
        navigate('/about')
    }
    function home(){
        navigate('/dashboard')
    }
    return (
        <div>
            <UI.Container>
                <UI.Row>
                    <UI.Col xs={4} sm={4} md={4} lg={6} xl={6} xxl={6}></UI.Col>
                    <UI.Col xs={4} sm={4} md={4} lg={2} xl={2} xxl={2}>
                        <br /> <span onClick={()=>home()}><b>Home</b></span>
                    </UI.Col>
                    <UI.Col xs={4} sm={4} md={4} lg={2} xl={2} xxl={2}>
                        <br /> <span onClick={()=>abouUs()}><b>About Us</b></span>
                    </UI.Col>
                    <UI.Col xs={4} sm={4} md={4} lg={2} xl={2} xxl={2}>
                        <br />
                            <span style={{ fontSize: "16px" ,color:"red" }} onClick={() => logOutFunction()}><b>LogOut</b></span><br />
                    </UI.Col>
                </UI.Row>
            </UI.Container>
        </div>
    )
}