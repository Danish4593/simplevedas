import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Toolbar,
  AppBar,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

// Icons
import LockIcon from "@mui/icons-material/Lock";
import KeyIcon from "@mui/icons-material/Key";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

// Import your API wrapper
import { apiFetch } from "../../api/api.js"; // adjust path if needed
import LoginModal from "../pages/modal/LoginModal";
import RegisterModal from "../pages/modal/RegisterModal";

export default function Header() {
  const [phone, setPhone] = useState("99873 18251");
  const [email, setEmail] = useState("info@simplevedas.com");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Fetch header details on load
  useEffect(() => {
    const fetchHeaderDetails = async () => {
      try {
        const data = await apiFetch("/header-details");
        if (data) {
          setPhone(data.phone || "99873 18251");
          setEmail(data.email || "info@simplevedas.com");
        }
      } catch (error) {
        console.error("Failed to fetch header details:", error);
      }
    };

    fetchHeaderDetails();
  }, []);

  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  // Drawer content for mobile view
  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem>
          <ListItemText
            primary={`+91 ${phone}`}
            secondary={email}
            sx={{ textAlign: "center", fontSize: "14px" }}
          />
        </ListItem>
        <Divider />
        <ListItemButton component={Link} to="/admin">
          <ListItemText primary="Admin" />
        </ListItemButton>
        <ListItemButton onClick={handleOpenLogin}>
          <LockIcon sx={{ mr: 1 }} /> <ListItemText primary="Login" />
        </ListItemButton>
        <ListItemButton onClick={handleOpenRegister}>
          <KeyIcon sx={{ mr: 1 }} /> <ListItemText primary="Register" />
        </ListItemButton>
        <ListItemButton>
          <FavoriteIcon sx={{ mr: 1 }} color="warning" />{" "}
          <ListItemText primary="Support Us" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: "#FFC13C", 
          boxShadow: "none",
          borderBottom: "none",
          px:20,
          height:45
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bottom:10
          }}
        >
          {/* Left items */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "black" }}>
                  +91 {phone}
                </span>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "black" }}>
                  {email}
                </span>
              </Box>
            </Box>
          ) : (
            <Box />
          )}

          {/* Right items */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button
                component={Link}
                to="/admin"
                sx={{ 
                  color: "black", 
                  textTransform: "none", 
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "2px 8px",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }
                }}
              >
                Admin
              </Button>
              <Button
                sx={{ 
                  color: "#800000", 
                  textTransform: "none", 
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "2px 8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }
                }}
                startIcon={<LockIcon sx={{ fontSize: "16px" }} />}
                onClick={handleOpenLogin}
              >
                Login
              </Button>
              <LoginModal open={openLogin} handleClose={handleCloseLogin} />
              <Button
                sx={{ 
                  color: "black", 
                  textTransform: "none", 
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "2px 8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }
                }}
                startIcon={<KeyIcon sx={{ fontSize: "16px" }} />}
                onClick={handleOpenRegister}
              >
                Register
              </Button>
              <RegisterModal open={openRegister} handleClose={handleCloseRegister} />
              <Button
                sx={{
                  color: "#800000",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "2px 8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }
                }}
                startIcon={<FavoriteIcon sx={{ fontSize: "16px" }} />}
              >
                Support Us
              </Button>
            </Box>
          ) : (
            <IconButton 
              onClick={() => setDrawerOpen(true)} 
              sx={{ color: "black", padding: "4px" }}
            >
              <MenuIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
