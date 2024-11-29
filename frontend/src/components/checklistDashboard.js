import React, { useEffect, useState } from "react";
import { fetchChecklistResults } from "../services/apiservices";

const ChecklistDashboard = () => {
  const [checklist, setChecklist] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getChecklist = async () => {
      try {
        const results = await fetchChecklistResults();
        console.log("API Response:", results);
        setChecklist(results || []); // Access array inside the response
      } catch (err) {
        setError(err.message);
        setChecklist([]); // Reset checklist to avoid invalid state
      }
    };

    getChecklist();
  }, []);

  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checklist Dashboard</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Rule</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {checklist.map((item, index) => (
            <tr
              key={index}
              style={{
                ...styles.row,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <td style={styles.cell}>{item.rule}</td>
              <td
                style={{
                  ...styles.cell,
                  ...(item.status === "Passed" ? styles.pass : styles.fail),
                }}
              >
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    background: "linear-gradient(135deg, #6f86d6, #48c6ef)",
    minHeight: "100vh",
    color: "#fff",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  table: {
    margin: "20px auto",
    borderCollapse: "collapse",
    width: "80%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
  },
  tableHeader: {
    background: "#48c6ef",
    color: "#fff",
    fontWeight: "bold",
    padding: "15px",
    textTransform: "uppercase",
  },
  row: {
    animation: "fadeIn 0.5s ease-out forwards",
    opacity: 0,
  },
  cell: {
    padding: "15px",
    textAlign: "center",
    fontSize: "1rem",
    borderBottom: "1px solid #ddd",
    color: "#333",

  },
  pass: {
    color: "green",
    fontWeight: "bold",
  },
  fail: {
    color: "red",
    fontWeight: "bold",
  },
  error: {
    color: "#ff6b6b",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

export default ChecklistDashboard;
