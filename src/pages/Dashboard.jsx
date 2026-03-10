import { useNavigate } from "react-router-dom"

function Dashboard(){

const navigate = useNavigate()

return(

<div className="layout">

{/* Sidebar */}

<div className="sidebar">

<h2 className="logo">Portfolio</h2>

<button onClick={()=>navigate("/skills")}>💻 Skills</button>

<button onClick={()=>navigate("/certificates")}>📜 Certificates</button>

<button onClick={()=>navigate("/education")}>🎓 Education</button>

<button onClick={()=>navigate("/contact")}>📞 Contact</button>

<button onClick={()=>navigate("/projects")}>🚀 Projects</button>

</div>

{/* Main Section */}

<div className="main">

<h1 className="title">AI Chat Box 🤖</h1>

<div className="welcome-card">

<h2>Hello 👋 I'm Jegathish</h2>

<p>
Welcome to my AI Portfolio Chatbot.
</p>

<p>
You can explore my professional profile by selecting a section from the left sidebar.
</p>

<ul>
<li>💻 Skills</li>
<li>🚀 Projects</li>
<li>🎓 Education</li>
<li>📜 Certificates</li>
<li>📞 Contact Details</li>
</ul>

<p className="tip">
Tip: Click a section and ask the chatbot questions!
</p>

</div>

</div>

</div>

)

}

export default Dashboard