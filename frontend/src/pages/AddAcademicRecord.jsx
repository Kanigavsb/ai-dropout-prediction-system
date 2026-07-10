import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function AddAcademicRecord() {
  const [formData, setFormData] = useState({
    student_id: "",
    attendance_pct: "",
    cgpa: "",
    backlogs: "",
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

    if (formData.attendance_pct < 0 || formData.attendance_pct > 100) {
      setError("Attendance must be between 0 and 100.");
      return;
    }
    if (formData.cgpa < 0 || formData.cgpa > 10) {
      setError("CGPA must be between 0 and 10.");
      return;
    }
    if (formData.backlogs < 0) {
      setError("Backlogs cannot be negative.");
      return;
    }
    if (formData.semester < 1 || formData.semester > 8) {
      setError("Semester must be between 1 and 8.");
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/academic-records`, formData);
      setMessage("Academic record added successfully!");
      setFormData({ student_id: "", attendance_pct: "", cgpa: "", backlogs: "", semester: "" });
    } catch (err) {
      setError("Failed to add record. Please check backend connection.");
    }
  };

  const inputStyle = { width: "100%", padding: "8px", marginTop: "5px", marginBottom: "15px" };

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "500px", margin: "60px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Add Academic Record</h2>
      <form onSubmit={handleSubmit}>
        <label>Student ID</label>
        <input
          type="number"
          name="student_id"
          value={formData.student_id}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Attendance (%)</label>
        <input
          type="number"
          name="attendance_pct"
          value={formData.attendance_pct}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.1"
          style={inputStyle}
        />

        <label>CGPA</label>
        <input
          type="number"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleChange}
          required
          min="0"
          max="10"
          step="0.01"
          style={inputStyle}
        />

        <label>Backlogs</label>
        <input
          type="number"
          name="backlogs"
          value={formData.backlogs}
          onChange={handleChange}
          required
          min="0"
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
          Add Record
        </button>
      </form>
      </div>
    </div>
  );
}

export default AddAcademicRecord;