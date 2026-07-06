import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Dashboard() {
  // Placeholder data — will be replaced with real API data once backend is ready
  const summary = {
    totalStudents: 120,
    highRisk: 18,
    mediumRisk: 32,
    lowRisk: 70,
  };

  const chartData = [
    { name: "High Risk", value: summary.highRisk, color: "#e74c3c" },
    { name: "Medium Risk", value: summary.mediumRisk, color: "#f1c40f" },
    { name: "Low Risk", value: summary.lowRisk, color: "#2ecc71" },
  ];

  const cardStyle = {
    flex: 1,
    padding: "20px",
    borderRadius: "8px",
    color: "#fff",
    textAlign: "center",
    margin: "0 10px",
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", marginBottom: "40px" }}>
        <div style={{ ...cardStyle, background: "#3498db" }}>
          <h3>{summary.totalStudents}</h3>
          <p>Total Students</p>
        </div>
        <div style={{ ...cardStyle, background: "#e74c3c" }}>
          <h3>{summary.highRisk}</h3>
          <p>High Risk</p>
        </div>
        <div style={{ ...cardStyle, background: "#f1c40f" }}>
          <h3>{summary.mediumRisk}</h3>
          <p>Medium Risk</p>
        </div>
        <div style={{ ...cardStyle, background: "#2ecc71" }}>
          <h3>{summary.lowRisk}</h3>
          <p>Low Risk</p>
        </div>
      </div>

      <h3>Risk Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;