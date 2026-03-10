import { useState } from "react"
import resumeData from "../data/resumeData"
import { useNavigate } from "react-router-dom";

function Skills(){
const navigate = useNavigate();
const [messages,setMessages] = useState([
{sender:"bot",text:"Ask me about my skills"}
])

const [input,setInput] = useState("")

function getReply(msg){

msg = msg.toLowerCase()

/* if user asks skills */

if(msg.includes("skill")){

return `
<b>My Skills</b>
<ul>
${resumeData.skills.map(skill => `<li>${skill}</li>`).join("")}
</ul>
`

}

/* check specific skill */

for(let skill of resumeData.skills){

if(msg.includes(skill)){
return "Yes, I know " + skill
}
else{
    return  "No I Didn't have that skill"
}

}



}

function send(){

if(input.trim()==="") return

let user = {sender:"user",text:input}

let bot = {sender:"bot",text:getReply(input)}

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
placeholder="Ask about skills"
/>

<button onClick={send}>Send</button>

</div>

<button className="back-btn" onClick={() => navigate("/dashboard")}>
⬅ Back to Home
</button>

</div>

)

}

export default Skills