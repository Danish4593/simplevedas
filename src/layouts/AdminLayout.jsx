import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import BlurLinearIcon from '@mui/icons-material/BlurLinear';

export default function AdminLayout() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? 200 : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 200 : 60,
            transition: "width 0.3s",
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <img
            src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/logo-of-simple-vedas.png"
            alt="Logo"
            style={{
              maxWidth: open ? "130px" : "40px",
              transition: "max-width 0.3s",
            }}
          />
        </Box>

        {/* Sidebar Menu */}
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/admin/dashboard"
              selected={location.pathname === "/admin/dashboard"}
              sx={{
                "&.Mui-selected": { backgroundColor: "#ffe6a1" },
                "&.Mui-selected:hover": { backgroundColor: "#ffd84d" },
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/admin/users"
              selected={location.pathname === "/admin/users"}
              sx={{
                "&.Mui-selected": { backgroundColor: "#ffe6a1" },
                "&.Mui-selected:hover": { backgroundColor: "#ffd84d" },
              }}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Users" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/admin/header"
              selected={location.pathname === "/admin/header"}
              sx={{
                "&.Mui-selected": { backgroundColor: "#ffe6a1" },
                "&.Mui-selected:hover": { backgroundColor: "#ffd84d" },
              }}
            >
              <ListItemIcon>
                <BlurLinearIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Header" />}
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/admin/settings"
              selected={location.pathname === "/admin/settings"}
              sx={{
                "&.Mui-selected": { backgroundColor: "#ffe6a1" },
                "&.Mui-selected:hover": { backgroundColor: "#ffd84d" },
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Settings" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar position="static" sx={{ background: "#FFC13C" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box sx={{ padding: 2 }}>
          <Outlet /> {/* Pages will render here */}
        </Box>
      </Box>
    </Box>
  );
}
