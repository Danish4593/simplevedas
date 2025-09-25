import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Icons
import LockIcon from "@mui/icons-material/Lock";
import KeyIcon from "@mui/icons-material/Key";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Header() {
  const phone = "+91 9999999998";
  const email = "info@simplevedas.com";

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFC13C", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 80,
          padding: 0, // remove default padding
        }}
      >
        {/* Left items */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
            {phone}
          </Button>
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
            {email}
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
          <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }} startIcon={<FavoriteIcon />}>
            Support Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
