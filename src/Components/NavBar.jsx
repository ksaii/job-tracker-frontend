import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../Contexts/AuthContext"; // Import the Auth context

export default function NavBar({ links }) {
  const { user, logout } = useAuth(); // Access user and logout from context

  const [anchorEl, setAnchorEl] = useState(null);

  // Opens user dropdown menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Closes dropdown menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        px: 4,
        py: 1.5,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Button
          component={Link}
          to="/"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "primary.main",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            "&:hover": { bgcolor: "transparent", opacity: 0.8 },
          }}
        >
          <WorkIcon sx={{ fontSize: "2rem", mr: 1, color: "primary.main" }} />
          Job Tracker
        </Button>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {links.map(({ label, path, onClick }) => (
            <Button
              key={label}
              component={Link}
              to={path}
              onClick={onClick}
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "text.secondary",
                "&:hover": {
                  color: "primary.main",
                  bgcolor: "action.hover",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* User Section */}
        {user ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="h6" color="textSecondary">
              {user.name}
            </Typography>
            <IconButton onClick={handleMenuOpen} color="inherit">
              <AccountCircleIcon fontSize="large" />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  logout(); // Call logout from context
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            component={Link}
            to="/login"
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              "&:hover": { bgcolor: "primary.light", color: "white" },
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Define prop types
NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};
