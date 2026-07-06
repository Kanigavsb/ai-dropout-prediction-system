import { useState, useEffect } from "react";
import axios from "axios";

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/students");
      setStudents(response.data);
    } catch (err) {
      setError("Could not load students. Please check backend connection.");
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.roll_no?.toLowerCase().includes(search.toLowerCase())
  );

  const thStyle = { padding: "10px", textAlign: "left", borderBottom: "2px solid #ccc" };
  const tdStyle = { padding: "10px", borderBottom: "1px solid #eee" };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h2>Students</h2>

      <input
        type="text"
        placeholder="Search by name or roll number..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Roll No</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Semester</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td style={tdStyle} colSpan="4">No students found.</td>
              </tr>
            ) : (
              filteredStudents.map((s) => (
                <tr key={s.id}>
                  <td style={tdStyle}>{s.name}</td>
                  <td style={tdStyle}>{s.roll_no}</td>
                  <td style={tdStyle}>{s.department}</td>
                  <td style={tdStyle}>{s.semester}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewStudents;