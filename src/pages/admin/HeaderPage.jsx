import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { apiFetch } from "../../../api/api.js"; // Your api.js helper

export default function HeaderPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch latest header details on page load
  useEffect(() => {
    const fetchHeaderDetails = async () => {
      try {
        const data = await apiFetch("/header-details"); // GET endpoint
        console.log(data, 'dddddd')
        if (data) {
          // Assuming API returns single object
          setPhone(data.phone || "");
          setEmail(data.email || "");
        }
      } catch (error) {
        console.error("Failed to fetch header details:", error);
      }
    };

    fetchHeaderDetails();
  }, []);

  // Submit updated header details
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await apiFetch("/header-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email }),
      });
      const data = await response;
      alert("Submitted successfully!");
    } catch (error) {
      console.error("API error:", error);
      alert("Failed to submit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TextField
        id="phone"
        label="Phone Number"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </>
  );
}
