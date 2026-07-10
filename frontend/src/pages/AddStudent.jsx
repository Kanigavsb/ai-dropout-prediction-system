import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    roll_no: "",
    department: "",
    semester: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/students`, formData);
      setMessage("Student added successfully!");
      setFormData({ name: "", roll_no: "", department: "", semester: "" });
    } catch (err) {
      setError("Failed to add student. Please check backend connection.");
    }
  };

  const inputStyle = { width: "100%", padding: "8px", marginTop: "5px", marginBottom: "15px" };

 return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "500px", margin: "60px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Roll Number</label>
        <input
          type="text"
          name="roll_no"
          value={formData.roll_no}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Department</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Semester</label>
        <input
          type="number"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
          required
          min="1"
          max="8"
          style={inputStyle}
        />

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Add Student
        </button>
     </form>
      </div>
    </div>
  );
}

export default AddStudent;