import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){

const navigate = useNavigate()

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

function register(){

localStorage.setItem("user",JSON.stringify({username,password}))

alert("Registered Successfully")

navigate("/")

}

return(

<div className="auth">

<h2>Register</h2>

<input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>

<input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>

<button onClick={register}>Register</button>

</div>

)

}

export default Register