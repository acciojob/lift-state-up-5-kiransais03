import React,{useState} from "react";
import Login from "./Login"

const Parent = ()=>{

    let [isLoggedIn,setIsLoggedIn]= useState(false);
    return (<>
    <h1>Parent Component</h1>
    <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </>)
}

export default Parent;