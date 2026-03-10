import { useState } from "react";
import resumeData from "../data/resumeData";

function ChatBot(){

const [messages,setMessages] = useState([
{sender:"bot",text:"Hello! Ask me about skills, projects or education"}
]);

const [input,setInput] = useState("");

function getResponse(msg){

msg = msg.toLowerCase();

/* greeting */

if(msg.includes("hi") || msg.includes("hello")){
return "Hello! Ask me about my skills, projects or education.";
}

/* skills */

if(msg.includes("skill")){
return "My skills are: " + resumeData.skills.join(", ");
}

/* projects */

if(msg.includes("project")){

return resumeData.projects
.map(p => p.name + " : " + p.description)
.join("\n");

}

/* education */
/* all education */

if(msg.includes("education")){

return `
SSLC: ${resumeData.education.sslc}
HSC: ${resumeData.education.hsc}
College: ${resumeData.education.college}
`;

}

if(msg.includes("10") || msg.includes("sslc")){
return resumeData.education.sslc;
}

if(msg.includes("12") || msg.includes("hsc")){
return resumeData.education.hsc;
}

if(msg.includes("college") || msg.includes("degree")){
return resumeData.education.college;
}

if(msg.includes("passout")){
return "My passout year is " + resumeData.education.passout;
}

/* certificates */

if(msg.includes("certificate")){
return resumeData.certificates.join(", ");
}

/* contact */

if(msg.includes("email")){
return "My email is " + resumeData.contact.email;
}

return "Ask me about skills, projects or education.";

}

function send(){

if(input.trim() === "") return;

let userMessage = {
sender:"user",
text:input
};

let botMessage = {
sender:"bot",
text:getResponse(input)
};

setMessages([...messages,userMessage,botMessage]);

setInput("");

}

return(

<div className="chatbox">

<div className="messages">

{messages.map((m,i)=>(
<div key={i} className={m.sender}>
{m.text}
</div>
))}

</div>

<div className="input-area">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask something..."
/>

<button onClick={send}>
Send
</button>

</div>

</div>

)

}

export default ChatBot;