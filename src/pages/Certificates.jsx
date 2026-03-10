import { useState } from "react"
import { useNavigate } from "react-router-dom"
import resumeData from "../data/resumeData"

function Certificates(){
const navigate = useNavigate();
const [messages,setMessages] = useState([
{sender:"bot",text:"Ask about my certificates"}
])

const [input,setInput] = useState("")

function getReply(msg){

msg = msg.toLowerCase()

/* specific certificate check */

if(msg.includes("python")){
return "Yes, I have Python Programming certificates from Great Learning and Guvi."
}

if(msg.includes("web development")){
return "Yes, I have Web Development certification."
}

if(msg.includes("mongodb")){
return "Yes, I have MongoDB Node.js Developer Path certification."
}

if(msg.includes("digital marketing")){
return "Yes, I have Digital Marketing Internship certification."
}

/* show all certificates */

if(msg.includes("certificate")){

return `My Certificates

• Python Programming – Certified by Great Learning
• Python Programming – Certified by Guvi
• Web Development Internship Program – SkillUpgrade
• MongoDB Node.js Developer Path – SmartBridge
• Web Development Course Completion – Rinex Organization
• Digital Marketing Internship Certification – Here and Now`
}

return "No, I don't have that certificate"

}

function send(){

if(input.trim()==="") return

let user={sender:"user",text:input}

let bot={sender:"bot",text:getReply(input)}

setMessages([...messages,user,bot])

setInput("")

}

return(

<div className="chatbox">

<div className="messages">

{messages.map((m,i)=>(
<div key={i} className={m.sender}>{m.text}</div>
))}

</div>

<div className="input-area">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask about certificates"
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

export default Certificates