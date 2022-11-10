import { createContext, useState } from "react";

const Context=createContext();

export function Provider({children}){
    const [user,setUser]=useState('')
    const getUser=(userLogin)=>{
        setUser(userLogin)
    }
    const logOut=()=>{
        setUser('')
    }
    return(
        <Context.Provider value={{user,getUser,logOut}}>
            {children}
        </Context.Provider>
    )
}

export default Context;