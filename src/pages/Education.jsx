import { useState } from "react"
import { useNavigate } from "react-router-dom"
import resumeData from "../data/resumeData"

function Education(){

const navigate = useNavigate()

const [messages,setMessages] = useState([
{sender:"bot",text:"Ask about my education"}
])

const [input,setInput] = useState("")

function getReply(msg){

msg = msg.toLowerCase()

if(msg.includes("education")){
return `My Education

• ${resumeData.education.sslc}
• ${resumeData.education.hsc}
• ${resumeData.education.college}
• Passout Year : ${resumeData.education.passout}`
}

if(msg.includes("10") || msg.includes("sslc"))
return resumeData.education.sslc

if(msg.includes("12") || msg.includes("hsc"))
return resumeData.education.hsc

if(msg.includes("college"))
return resumeData.education.college

return "Ask about my education"

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
placeholder="Ask about education"
/>

<button onClick={send}>Send</button>

</div>

{/* Back Button */}

<button className="back-btn" onClick={() => navigate("/dashboard")}>
⬅ Back to Home
</button>

</div>

)

}

export default Education