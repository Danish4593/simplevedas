import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button, Divider } from "@mui/material";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your enquiry has been submitted.");
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, fontSize:"45px" }}>
        Enquiry <span style={{ color: "#fbbf24" }}>Form</span>
      </Typography>
      <Divider sx={{ width: 60, borderBottomWidth: 3, bgcolor: "#fbbf24", mb: 2 }} />
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        GET IN TOUCH
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* First Row - First Name and Last Name */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f9fafb' } }}
            />
            <TextField
              fullWidth
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f9fafb' } }}
            />
          </Box>

          {/* Second Row - Phone and Email */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f9fafb' } }}
            />
            <TextField
              fullWidth
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f9fafb' } }}
            />
          </Box>

          {/* Message Field */}
          <TextField
            fullWidth
            placeholder="Message"
            name="message"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f9fafb' } }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "#fbbf24",
              color: "#7b2b00",
              fontWeight: "bold",
              py: 1.5,
              px: 4,
              fontSize: "0.95rem",
              textTransform: "uppercase",
              alignSelf: 'flex-start',
              "&:hover": { bgcolor: "#f59e0b" },
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}