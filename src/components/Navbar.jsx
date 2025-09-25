import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  const logoUrl = "https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/logo-of-simple-vedas.png";

  // Menu state
  const [aboutAnchor, setAboutAnchor] = React.useState(null);
  const [mediaAnchor, setMediaAnchor] = React.useState(null);

  const handleAboutClick = (event) => setAboutAnchor(event.currentTarget);
  const handleAboutClose = () => setAboutAnchor(null);

  const handleMediaClick = (event) => setMediaAnchor(event.currentTarget);
  const handleMediaClose = () => setMediaAnchor(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 80, padding: 0 }}>
        {/* Logo */}
        <Box>
          <Link to="/">
            <img src={logoUrl} alt="Logo" style={{ height: 50, width: "auto" }} />
          </Link>
        </Box>

        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button component={Link} to="/" sx={{ color: "black", textTransform: "none", fontSize: 16 }}>
            Home
          </Button>

          {/* About menu */}
          <Button
            sx={{ color: "black", textTransform: "none", fontSize: 16 }}
            endIcon={<ArrowDropDownIcon />}
            onClick={handleAboutClick}
          >
            About
          </Button>
          <Menu
            anchorEl={aboutAnchor}
            open={Boolean(aboutAnchor)}
            onClose={handleAboutClose}
            sx={{ "& .MuiPaper-root": { backgroundColor: "black" } }}
          >
            {["Simple Vedas", "Sarila Prabhupada", "Our Inspiration", "Madhusudan Visnu Dev"].map((item) => (
              <MenuItem
                key={item}
                onClick={handleAboutClose}
                component={Link}
                to={`/about/${item.replace(/\s+/g, "-").toLowerCase()}`}
                sx={{ color: "white", "&:hover": { backgroundColor: "#333" } }}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>

          <Button component={Link} to="/course" sx={{ color: "black", textTransform: "none", fontSize: 16 }}>
            Course
          </Button>

          {/* Media menu */}
          <Button
            sx={{ color: "black", textTransform: "none", fontSize: 16 }}
            endIcon={<ArrowDropDownIcon />}
            onClick={handleMediaClick}
          >
            Media
          </Button>
          <Menu
            anchorEl={mediaAnchor}
            open={Boolean(mediaAnchor)}
            onClose={handleMediaClose}
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

          <Button component={Link} to="/quotes" sx={{ color: "black", textTransform: "none", fontSize: 16 }}>
            Quotes
          </Button>
          <Button component={Link} to="/shop" sx={{ color: "black", textTransform: "none", fontSize: 16 }}>
            Shop
          </Button>
          <Button component={Link} to="/contact" sx={{ color: "black", textTransform: "none", fontSize: 16 }}>
            Contact
          </Button>

          <IconButton sx={{ color: "black" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
