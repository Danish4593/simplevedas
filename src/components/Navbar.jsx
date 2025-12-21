import React from "react";
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
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SimpleVedaLogo from "../assets/images/simple-vedas-logo.png";

export default function Header() {
  const [aboutAnchor, setAboutAnchor] = React.useState(null);
  const [mediaAnchor, setMediaAnchor] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Menu handlers
  const handleAboutClick = (event) => setAboutAnchor(event.currentTarget);
  const handleAboutClose = () => setAboutAnchor(null);
  const handleMediaClick = (event) => setMediaAnchor(event.currentTarget);
  const handleMediaClose = () => setMediaAnchor(null);

  // Drawer toggle
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setDrawerOpen(open);
  };

  // Drawer Content (for mobile)
  const drawerContent = (
    <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ textAlign: "center", py: 2 }}>
        <img src={SimpleVedaLogo} alt="Logo" style={{ height: 60 }} />
      </Box>
      <Divider />
      <List>
        {[
          { label: "Home", to: "/" },
          { label: "Course", to: "/course" },
          { label: "Quotes", to: "/quotes" },
          { label: "Shop", to: "/shop" },
          { label: "Contact", to: "/contact" },
        ].map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* About Section */}
        <Divider />
        <ListItem>
          <ListItemText primary="About" sx={{ fontWeight: 600 }} />
        </ListItem>
        {["Simple Vedas", "Sarila Prabhupada", "Our Inspiration", "Madhusudan Visnu Dev"].map((item) => (
          <ListItemButton
            key={item}
            component={Link}
            to={`/about/${item.replace(/\s+/g, "-").toLowerCase()}`}
            sx={{ pl: 4 }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}

        {/* Media Section */}
        <Divider />
      </List>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, py: 1 }}>
        <IconButton sx={{ color: "black" }}>
          <SearchIcon />
        </IconButton>
        <IconButton sx={{ color: "black" }}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.08)",px:20 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: 80,
          height: 80,
          px: { xs: 2, sm: 3, md: 6 },
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            height: 65,
          }}
        >
          <Link to="/">
            <img
              src={SimpleVedaLogo}
              alt="Logo"
              style={{
                height: 55,
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Link>
        </Box>


        {/* Desktop Menu */}
        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 0.2, alignItems: "center", ml: "auto" }}>
            <Button component={Link} to="/" sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}>
              Home
            </Button>

            {/* About Menu */}
            <Button
              sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleAboutClick}
            >
              About
            </Button>

            <Menu
              anchorEl={aboutAnchor}
              open={Boolean(aboutAnchor)}
              onClose={handleAboutClose}
              sx={{ "& .MuiPaper-root": { backgroundColor: "#333" } }}
            >
              {["Simple Vedas", "Sarila Prabhupada", "Our Inspiration", "Madhusudan Visnu Dev"].map((item) => (
                <MenuItem
                  key={item}
                  onClick={handleAboutClose}
                  component={Link}
                  to={`/about/${item.replace(/\s+/g, "-").toLowerCase()}`}
                  sx={{ color: "white", "&:hover": { backgroundColor: "#333", color: "#FFB74D" } }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>

            <Button component={Link} to="/course" sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}>
              Courses
            </Button>

            {/* Media Dropdown */}
            <Button
              sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}
              endIcon={<ArrowDropDownIcon />}
              onClick={handleMediaClick}
            >
              Media
            </Button>

            <Menu
              anchorEl={mediaAnchor}
              open={Boolean(mediaAnchor)}
              onClose={handleMediaClose}
              sx={{ "& .MuiPaper-root": { backgroundColor: "#333" } }}
            >
              {["Videos", "Articles", "Podcasts"].map((item) => (
                <MenuItem
                  key={item}
                  onClick={handleMediaClose}
                  sx={{ color: "white", "&:hover": { backgroundColor: "#333", color: "#FFB74D" } }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>

            <Button component={Link} to="/quotes" sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}>
              Quotes
            </Button>
            <Button component={Link} to="/shop" sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}>
              Shop
            </Button>
            <Button component={Link} to="/contact" sx={{
                color: "#8B4513",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: "500",
                padding: "6px 14px",
                "&:hover": {
                  color: "#FFB74D",
                  backgroundColor: "transparent",
                },
              }}>
              Contact
            </Button>

            <Box sx={{ ml: 1.5, display: "flex", gap: 0.5 }}>
              <IconButton sx={{ color: "black", padding: "6px" }}>
                <SearchIcon sx={{ fontSize: "20px" }} />
              </IconButton>
              <IconButton sx={{ color: "black", padding: "6px" }}>
                <ShoppingCartIcon sx={{ fontSize: "20px" }} />
              </IconButton>
            </Box>
          </Box>
        ) : (
          // Mobile Menu Icon
          <IconButton
            sx={{
              color: "black",
              ml: 1,
              flexShrink: 0, // ensures icon doesn't disappear
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer (Mobile Navigation) */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
