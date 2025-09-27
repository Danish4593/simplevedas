import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function HeaderPage() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://example.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, email }),
      });

      const data = await response.json();
      console.log("API response:", data);
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
