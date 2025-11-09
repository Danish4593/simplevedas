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
  Typography
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
  const [phone, setPhone] = useState("9987318251");
  const [email, setEmail] = useState("info@simplevedas.com");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Fetch header details on load
  useEffect(() => {
    const fetchHeaderDetails = async () => {
      try {
        const data = await apiFetch("/header-details");
        if (data) {
          setPhone(data.phone || "9987318251");
          setEmail(data.email || "info@simplevedas.com");
        }
      } catch (error) {
        console.error("Failed to fetch header details:", error);
      }
    };

    fetchHeaderDetails();
  }, []);

  // Drawer content for mobile view
  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem>
          <ListItemText
            primary={`+91 ${phone}`}
            secondary={email}
            sx={{ textAlign: "center" }}
          />
        </ListItem>
        <Divider />
        <ListItemButton component={Link} to="/admin">
          <ListItemText primary="Admin" />
        </ListItemButton>
        <ListItemButton>
          <LockIcon sx={{ mr: 1 }} /> <ListItemText primary="Login" />
        </ListItemButton>
        <ListItemButton>
          <KeyIcon sx={{ mr: 1 }} /> <ListItemText primary="Register" />
        </ListItemButton>
        <ListItemButton>
          <FavoriteIcon sx={{ mr: 1 }} color="warning" />{" "}
          <ListItemText primary="Support Us" />
        </ListItemButton>
      </List>
    </Box>
  );

const [openLogin, setOpenLogin] = useState(false);
const [openRegister, setOpenRegister] = useState(false);

const handleOpenLogin = () => setOpenLogin(true);
const handleCloseLogin = () => setOpenLogin(false);

const handleOpenRegister = () => setOpenRegister(true);
const handleCloseRegister = () => setOpenRegister(false);


  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#FFC13C", boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: 80,
            height: 68,
          }}
        >
          {/* Left items */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
                {`+91 ${phone}` || "Loading..."}
              </Button>
              <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
                {email || "Loading..."}
              </Button>
            </Box>
          ) : (
            <Box sx={{ fontWeight: 600, color: "black", fontSize: 20 }}>
              SimpleVedas
            </Box>
          )}

          {/* Right items */}
          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                component={Link}
                to="/admin"
                sx={{ color: "black", textTransform: "none", fontSize: 16 }}
              >
                Admin
              </Button>
              <Button
                sx={{ color: "black", textTransform: "none", fontSize: 16 }}
                startIcon={<LockIcon />}
                onClick={handleOpenLogin}
              >
                <span style={{ color: theme.palette.warning.main }}>Login</span>
              </Button>
              <LoginModal open={openLogin} handleClose={handleCloseLogin} />
              <Button
                sx={{ color: "black", textTransform: "none", fontSize: 16 }}
                startIcon={<KeyIcon />}
                onClick={handleOpenRegister}
              >
                Register
              </Button>
                <RegisterModal open={openRegister} handleClose={handleCloseRegister} />
              <Button
                sx={{
                  color: theme.palette.warning.main,
                  textTransform: "none",
                  fontSize: 16,
                }}
                startIcon={<FavoriteIcon />}
              >
                Support Us
              </Button>
            </Box>
          ) : (
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "black" }}>
              <MenuIcon />
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
