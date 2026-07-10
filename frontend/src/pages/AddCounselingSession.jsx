import { useState } from "react";
import axios from "axios";

function AddCounselingSession() {
  const [formData, setFormData] = useState({
    student_id: "",
    counselor_id: "",
    notes: "",
    session_date: "",
    follow_up_date: "",
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
      await axios.post(`${import.meta.env.VITE_API_URL}/api/counseling-sessions`, formData);
      setMessage("Counseling session logged successfully!");
      setFormData({ student_id: "", counselor_id: "", notes: "", session_date: "", follow_up_date: "" });
    } catch (err) {
      setError("Failed to log session. Please check backend connection.");
    }
  };

  const inputStyle = { width: "100%", padding: "8px", marginTop: "5px", marginBottom: "15px" };

  return (
    <div style={{ maxWidth: "500px", margin: "60px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Log Counseling Session</h2>
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

        <label>Counselor ID (your user ID)</label>
        <input
          type="number"
          name="counselor_id"
          value={formData.counselor_id}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Session Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          required
          rows="4"
          style={inputStyle}
        />

        <label>Session Date</label>
        <input
          type="date"
          name="session_date"
          value={formData.session_date}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Follow-up Date</label>
        <input
          type="date"
          name="follow_up_date"
          value={formData.follow_up_date}
          onChange={handleChange}
          style={inputStyle}
        />

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Log Session
        </button>
      </form>
    </div>
  );
}

export default AddCounselingSession;