import "./App.css";
import Register from "./Register.js";
import Navbar from "./Navbar.js";
import { useState, useEffect } from "react";
import AuthService from "./AuthService.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Faq from "./pages/Faq.js";
import Contact from "./pages/Contact.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Logout from "./pages/Logout.js";
import Login from "./pages/Login.js";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(undefined);
  //const { currentUser, setCurrentUser } = useState(null);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();
  //   console.log("user--is called", user);
  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    navigate("/");
  };

  return (
    <div className="App">
      {/* <Navbar />
      <Register /> */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/contact")}>
            Contact
          </Button>
          <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate("/faq")}>
            Faq
          </Button>
          {currentUser ? (
            <Button color="inherit" onClick={logOut}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* <Navbar /> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/register"
          element={<Register setCurrentUser={setCurrentUser} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<p>Overview</p>} />
          <Route path="AddUser" element={<p>AddUser</p>} />
          <Route path="ShowUserList" element={<p>ShowUserList</p>} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
