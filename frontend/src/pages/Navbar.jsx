function Navbar() {
  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: "500",
  };

  return (
    <nav style={{ padding: "15px 20px", borderBottom: "1px solid #ddd", marginBottom: "20px", display: "flex", flexWrap: "wrap" }}>
      <a href="/dashboard" style={linkStyle}>Dashboard</a>
      <a href="/add-student" style={linkStyle}>Add Student</a>
      <a href="/add-academic-record" style={linkStyle}>Add Academic Record</a>
      <a href="/add-fee-record" style={linkStyle}>Add Fee Record</a>
      <a href="/add-counseling-session" style={linkStyle}>Add Counseling Session</a>
      <a href="/students" style={linkStyle}>View Students</a>
    </nav>
  );
}

export default Navbar;