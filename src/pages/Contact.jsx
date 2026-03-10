import { useState } from "react"
import resumeData from "../data/resumeData"
import { useNavigate } from "react-router-dom";

function Contact(){


const navigate = useNavigate();
const [messages,setMessages] = useState([
{sender:"bot",text:"Ask about my contact details"}
])

const [input,setInput] = useState("")

function getReply(msg){

msg = msg.toLowerCase()

/* show all contact */

if(msg.includes("contact")){

return `
<b>Contact Details</b>
<ul>
<li>Email : ${resumeData.contact.email}</li>
<li>Phone : ${resumeData.contact.phone}</li>
<li>LinkedIn : ${resumeData.contact.linkedin}</li>
</ul>
`
}

/* email */

if(msg.includes("email")){
return `My email is ${resumeData.contact.email}`
}

/* phone */

if(msg.includes("phone") || msg.includes("number")){
return `My phone number is ${resumeData.contact.phone}`
}

/* linkedin */

if(msg.includes("linkedin")){
return `My LinkedIn profile is ${resumeData.contact.linkedin}`
}

return "Ask about email, phone or contact"

}

function send(){

if(input.trim()==="") return

let user = {
sender:"user",
text:input
}

let bot = {
sender:"bot",
text:getReply(input)
}

setMessages([...messages,user,bot])

setInput("")

}

return(

<div className="chatbox">

<div className="messages">

{messages.map((m,i)=>(
<div
key={i}
className={m.sender}
dangerouslySetInnerHTML={{ __html: m.text }}
></div>
))}

</div>

<div className="input-area">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask about contact"
/>

<button onClick={send}>
Send
</button>

</div>
<button className="back-btn" onClick={() => navigate("/dashboard")}>
⬅ Back to Home
</button>

</div>

)

}

export default Contact