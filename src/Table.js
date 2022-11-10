import { useState, useEffect } from "react";
import axios from "axios";
import * as UI from 'react-bootstrap';
export default function Table() {
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            console.log(JSON.stringify(res.data));
            setData(res.data);
        });
    }, []);
    function getData(e) {
        console.log(e.target.value);
        axios
            .get("https://fakestoreapi.com/products/category/" + e.target.value)
            .then((res) => {
                setTableData(res.data);
                console.log(JSON.stringify(res));
            });
    }
    return (
        <div className="App">
            <UI.Container>
                <form className="tableForm">
                    <br></br>
                    <p>Login</p>
                    <UI.Row>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                            <select onClick={(e) => getData(e)} className="form-control">
                                <option>-Select-</option>
                                {data.length > 0 &&
                                    data.map((item) => {
                                        return <option value={item}>{item}</option>;
                                    })}
                            </select>
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                        </UI.Col>
                    </UI.Row>
                    <UI.Row>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                            <button type="button" className="btn btn-success">Login</button>
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                        </UI.Col>
                    </UI.Row>
                    <UI.Row>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={2} xl={2} xxl={2}>
                            <span className="register">Not registered?</span>
                            {/* <button type="button" className="btn btn-success">Login</button> */}
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={2} xl={2} xxl={2}>
                            <span ><a className="create" href="#">Create Account</a></span>
                            {/* <button type="button" className="btn btn-success">Login</button> */}
                        </UI.Col>
                        <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                        </UI.Col>
                    </UI.Row>

                </form>
                {/* <h1>Browse</h1> */}
               
                {/* <table>
                    {tableData.length > 0 &&
                        <UI.Row>
                            {tableData.map((item) => {
                                return (
                                    <UI.Col sm={4} md={4} lg={4} xl={4} xxl={4}>
                                        <UI.Card className="card">
                                            <UI.Card.Title>products</UI.Card.Title>
                                            <UI.Card.Body>
                                        {item.title}
                                            </UI.Card.Body>
                                            <UI.Card.Footer>Footer</UI.Card.Footer>
                                        </UI.Card>
                                    </UI.Col>
                                );
                            })}
                        </UI.Row>
                    }
                </table> */}
                <table className="table">
                    <thead className="thead">
                        {/* <tr> */}
                        <th>No.</th>
                            <th>Title</th>
                            <th>Title</th>
                        {/* </tr> */}
                    </thead>
                    <tbody className="tbody">
                {tableData.length > 0 &&
                    tableData.map((item,index) => {
                        return (
                        <tr>
                            {/* <div>
                            <img src={item.image} width="50px" height="50px"></img>
                            <br /> */}
                            <td>{index+1}</td>
                            <td>{item.title}
                            </td>
                            <td>{item.title}
                            </td>
                       
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </UI.Container>
        </div>
    );
}
