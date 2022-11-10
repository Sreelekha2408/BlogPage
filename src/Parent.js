import { useState } from "react"
import { Child } from "./Components/Child"

export const Parent = () => {
    const [data, setData] = useState([
    { id: 1, name: "Sreelekha", experience: "2" },
    { id: 2, name: "Sreelekha", experience: "2" },
    { id: 3, name: "Sreelekha", experience: "2" }
    ])
    // const [data,setData]=useState({email:'sree@gmail.com',name:"Sree",exp:"3"})
    return (
        <>
        <Child data={data}/>
        </>
    )
}