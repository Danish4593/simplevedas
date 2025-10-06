import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Box, Toolbar, AppBar, useTheme } from "@mui/material";

// Icons
import LockIcon from "@mui/icons-material/Lock";
import KeyIcon from "@mui/icons-material/Key";
import FavoriteIcon from "@mui/icons-material/Favorite";

// Import your API wrapper
import { apiFetch } from "../../api/api.js"; // adjust path if needed

export default function Header() {
  const [phone, setPhone] = useState("9987318251");
  const [email, setEmail] = useState("info@simplevedas.com");
  const theme = useTheme();

  // Fetch header details on load
  useEffect(() => {
    const fetchHeaderDetails = async () => {
      try {
        const data = await apiFetch("/header-details"); // GET endpoint
        if (data) {
          // Assuming API returns an array of details
          setPhone(data.phone || "9987318251");
          setEmail(data.email || "info@simplevedas.com");
        }
      } catch (error) {
        console.error("Failed to fetch header details:", error);
      }
    };

    fetchHeaderDetails();
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFC13C", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 80,
          padding: 0,
        }}
      >
        {/* Left items */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
            {'+91 '+phone || "Loading..."}
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
            {email || "Loading..."}
          </Button>
        </Box>

        {/* Right items */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} to="/admin" sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
            Admin
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }} startIcon={<LockIcon />}>
            Login
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }} startIcon={<KeyIcon />}>
            Register
          </Button>
          <Button sx={{ color: theme.palette.warning.main, textTransform: "none", fontSize: 18 }} startIcon={<FavoriteIcon />}>
            Support Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
