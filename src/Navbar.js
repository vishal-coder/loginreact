import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/register")}>
          Register
        </Button>
        <Button color="inherit" onClick={() => navigate("/contact")}>
          Color Game
        </Button>
        <Button color="inherit" onClick={() => navigate("/about")}>
          Movie List
        </Button>
        <Button color="inherit" onClick={() => navigate("/faq")}>
          Add Movie
        </Button>
        <Button color="inherit" onClick={() => navigate("/logout")}>
          Logout
        </Button>
        <Button color="inherit" onClick={() => navigate("/register")}>
          Register
        </Button>
        //{" "}
        <Button color="inherit" onClick={() => navigate("/login")}>
          // Login //{" "}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
