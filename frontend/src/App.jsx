import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import AddAcademicRecord from "./pages/AddAcademicRecord";
import AddFeeRecord from "./pages/AddFeeRecord";
import AddCounselingSession from "./pages/AddCounselingSession";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-academic-record" element={<AddAcademicRecord />} />
        <Route path="/add-fee-record" element={<AddFeeRecord />} />
        <Route path="/add-counseling-session" element={<AddCounselingSession />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;