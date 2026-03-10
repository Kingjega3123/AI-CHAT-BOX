import { useState } from "react"
import resumeData from "../data/resumeData"
import { useNavigate } from "react-router-dom";

function Projects(){
const navigate = useNavigate();
const [messages,setMessages] = useState([
{sender:"bot",text:"Ask about my projects"}
])

const [input,setInput] = useState("")
function getReply(msg){

msg = msg.toLowerCase()

/* deep learning project */

if(msg.includes("deep learning")){
return `Deep Learning Nova Food Classifier
${resumeData.projects[0].description}`
}

/* portfolio project */

if(msg.includes("portfolio")){
return `Portfolio Website
${resumeData.projects[1].description}`
}

/* social media project */

if(msg.includes("social")){
return `Social Media App UI Clone
${resumeData.projects[2].description}`
}

/* show project list */

if(msg.includes("project")){

return `My Projects

• ${resumeData.projects[0].name}
• ${resumeData.projects[1].name}
• ${resumeData.projects[2].name}`

}

return "Ask about my projects"

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
placeholder="Ask about projects"
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

export default Projects