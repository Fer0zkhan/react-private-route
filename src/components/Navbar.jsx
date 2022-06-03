import * as React from "react";
import { Link, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }} className="navbar-bottom">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/about"
          label="About"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navbar;
