import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate()

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

function login(){

let user = JSON.parse(localStorage.getItem("user"))

if(user && user.username===username && user.password===password)
navigate("/dashboard")
else
alert("Invalid login")

}

return(

<div className="auth">

<h2>Login</h2>

<input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>

<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

<button onClick={login}>Login</button>

<p onClick={()=>navigate("/register")}>Create Account</p>

</div>

)

}

export default Login