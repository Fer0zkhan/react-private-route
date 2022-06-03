import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const TopNavbar = () => {
  const { isAuthenticated, changeAuthentication } = useContext(AuthContext);

  const logoutChangeHandler = () => {
    changeAuthentication(false);
  };

  const loginChangeHandler = () => {
    changeAuthentication(true);
    return <Navigate to="/"/>
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="top-navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="top-navbar-icon" to="/">
              Home
            </Link>
          </Typography>
          <Button color="inherit">
            {isAuthenticated ? (
              <span onClick={logoutChangeHandler}>Logout</span>
            ) : (
              <span onClick={loginChangeHandler}>Login</span>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavbar;
