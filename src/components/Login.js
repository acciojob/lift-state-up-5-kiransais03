import React from "react";

const Login = ({isLoggedIn,setIsLoggedIn})=>{

if(isLoggedIn){
    return(<><p>You are logged in!</p></>)
}
    return (<>
    <form onSubmit={()=>{setIsLoggedIn(true)}}>
       <label htmlFor="username">Username</label>
       <input required type="text" id="username"/>
       <label htmlFor="password">Password</label>
       <input required type="password" id="password"/>
       <button type="submit">Login</button>
    </form>
    </>)
}

export default Login;