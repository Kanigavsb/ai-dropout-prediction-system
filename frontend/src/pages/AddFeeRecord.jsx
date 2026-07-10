import { useState } from "react";
import axios from "axios";

function AddFeeRecord() {
  const [formData, setFormData] = useState({
    student_id: "",
    amount_due: "",
    amount_paid: "",
    status: "PENDING",
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
      await axios.post(`${import.meta.env.VITE_API_URL}/api/fee-records`, formData);
      setMessage("Fee record added successfully!");
      setFormData({ student_id: "", amount_due: "", amount_paid: "", status: "PENDING" });
    } catch (err) {
      setError("Failed to add record. Please check backend connection.");
    }
  };

  const inputStyle = { width: "100%", padding: "8px", marginTop: "5px", marginBottom: "15px" };

  return (
    <div style={{ maxWidth: "500px", margin: "60px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Add Fee Record</h2>
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

        <label>Amount Due</label>
        <input
          type="number"
          name="amount_due"
          value={formData.amount_due}
          onChange={handleChange}
          required
          step="0.01"
          style={inputStyle}
        />

        <label>Amount Paid</label>
        <input
          type="number"
          name="amount_paid"
          value={formData.amount_paid}
          onChange={handleChange}
          required
          step="0.01"
          style={inputStyle}
        />

        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="PENDING">Pending</option>
          <option value="PARTIAL">Partial</option>
          <option value="PAID">Paid</option>
        </select>

        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Add Record
        </button>
      </form>
    </div>
  );
}

export default AddFeeRecord;