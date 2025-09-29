import React, { useState } from "react";
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
  ListItemText,
  Divider,
} from "@mui/material";

// Icons
import LockIcon from "@mui/icons-material/Lock";
import KeyIcon from "@mui/icons-material/Key";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const phone = "+91 9999999998";
  const email = "info@simplevedas.com";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // below md = mobile
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { label: "Admin", icon: null, to: "/admin" },
    { label: "Login", icon: <LockIcon />, to: "/login" },
    { label: "Register", icon: <KeyIcon />, to: "/register" },
    {
      label: "Support Us",
      icon: <FavoriteIcon />,
      to: "/support",
      color: theme.palette.warning.main,
    },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFC13C", boxShadow: "none" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 80,
          px: 2,
        }}
      >
        {/* Left items */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {!isMobile && (
            <>
              <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
                {phone}
              </Button>
              <Button sx={{ color: "black", textTransform: "none", fontSize: 18 }}>
                {email}
              </Button>
            </>
          )}
        </Box>

        {/* Right items (desktop vs mobile) */}
        {isMobile ? (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                sx={{
                  color: item.color || "black",
                  textTransform: "none",
                  fontSize: 18,
                }}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          <List>
            <ListItem>
              <ListItemText primary={phone} />
            </ListItem>
            <ListItem>
              <ListItemText primary={email} />
            </ListItem>

            <Divider sx={{ my: 1 }} />

            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.to}
                onClick={() => setDrawerOpen(false)}
              >
                {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    color: item.color || "black",
                    fontSize: 16,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
