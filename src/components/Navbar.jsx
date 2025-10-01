import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import SimpleVedaLogo from "../assets/images/simple-vedas-logo.png";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Menu state
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [mediaAnchor, setMediaAnchor] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleAboutClose = () => setAboutAnchor(null);
  const handleMediaClose = () => setMediaAnchor(null);

  // Drawer items
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Course", to: "/course" },
    { label: "Quotes", to: "/quotes" },
    { label: "Shop", to: "/shop" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: 80, px: 2 }}>
        {/* Logo */}
        <Box>
          <Link to="/">
            <img
              src={SimpleVedaLogo}
              alt="Logo"
              style={{ height: 70, width: "auto", margin: "10px auto" }}
            />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: 16,
                "&:hover": { color: "primary.main" },
              }}
            >
              Home
            </Button>

            {/* About dropdown */}
            <Box
              onMouseEnter={(e) => setAboutAnchor(e.currentTarget)}
              onMouseLeave={handleAboutClose}
              sx={{ display: "inline-block" }}
            >
              <Button
                sx={{
                  color: aboutAnchor ? "primary.main" : "black",
                  textTransform: "none",
                  fontSize: 16,
                  "&:hover": { color: "primary.main" },
                }}
                endIcon={<ArrowDropDownIcon />}
              >
                About
              </Button>

              <Menu
                anchorEl={aboutAnchor}
                open={Boolean(aboutAnchor)}
                onClose={handleAboutClose}
                MenuListProps={{
                  onMouseEnter: () => setAboutAnchor(aboutAnchor),
                  onMouseLeave: handleAboutClose,
                }}
                sx={{ "& .MuiPaper-root": { backgroundColor: "black" } }}
              >
                {["Simple Vedas", "Sarila Prabhupada", "Our Inspiration", "Madhusudan Visnu Dev"].map(
                  (item) => (
                    <MenuItem
                      key={item}
                      onClick={handleAboutClose}
                      component={Link}
                      to={`/about/${item.replace(/\s+/g, "-").toLowerCase()}`}
                      sx={{ color: "white", "&:hover": { backgroundColor: "#333" } }}
                    >
                      {item}
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>

            <Button
              component={Link}
              to="/courses"
              sx={{
                color: "black",
                textTransform: "none",
                fontSize: 16,
                "&:hover": { color: "primary.main" },
              }}
            >
              Course
            </Button>

            {/* Media dropdown */}
            <Box
              onMouseEnter={(e) => setMediaAnchor(e.currentTarget)}
              onMouseLeave={handleMediaClose}
              sx={{ display: "inline-block" }}
            >
              <Button
                sx={{
                  color: mediaAnchor ? "primary.main" : "black",
                  textTransform: "none",
                  fontSize: 16,
                  "&:hover": { color: "primary.main" },
                }}
                endIcon={<ArrowDropDownIcon />}
              >
                Media
              </Button>

              <Menu
                anchorEl={mediaAnchor}
                open={Boolean(mediaAnchor)}
                onClose={handleMediaClose}
                MenuListProps={{
                  onMouseEnter: () => setMediaAnchor(mediaAnchor),
                  onMouseLeave: handleMediaClose,
                }}
                sx={{ "& .MuiPaper-root": { backgroundColor: "black" } }}
              >
                {["Audio", "Video"].map((item) => (
                  <MenuItem
                    key={item}
                    onClick={handleMediaClose}
                    component={Link}
                    to={`/media/${item.toLowerCase()}`}
                    sx={{ color: "white", "&:hover": { backgroundColor: "#333" } }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {navItems.slice(2).map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.to}
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: 16,
                  "&:hover": { color: "primary.main" },
                }}
              >
                {item.label}
              </Button>
            ))}

            <IconButton sx={{ color: "black" }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
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
          <Divider sx={{ my: 1 }} />

          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

            {/* Extra icons */}
            <ListItem>
              <IconButton sx={{ color: "black" }}>
                <SearchIcon />
              </IconButton>
              <IconButton sx={{ color: "black", ml: 1 }}>
                <ShoppingCartIcon />
              </IconButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
