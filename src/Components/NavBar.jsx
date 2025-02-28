import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Container } from "@mui/system";

export default function NavBar({ links }) {
  return (
    <AppBar
      position="sticky" // ✅ Fixed lowercase "sticky"
      sx={{
        bgcolor: "primary.main", // ✅ Fixed invalid "color.primary"
        color: "white",
        px: 3, // ✅ Added better padding
        py: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Button
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "white",
              textTransform: "none",
            }}
          >
            <WorkIcon sx={{ fontSize: "2rem", mr: 1 }} />
            Job Application Tracker
          </Button>
        </Typography>

        {links.map(({ label, path, onClick }) => (
          <Button
            key={label}
            color="inherit"
            component={Link}
            to={path}
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
            onClick={onClick} // ✅ Styled buttons
          >
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
};
