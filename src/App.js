import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/education" element={<Education />} />

      <Route path="/certificates" element={<Certificates />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;