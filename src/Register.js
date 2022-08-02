import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { formik, useFormik } from "formik";
import * as yup from "yup";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
function Register({ setCurrentUser }) {
  const navigate = useNavigate();
  const userValidation = yup.object({
    fullName: string().required().min(6),
    username: string().email().required().min(5),
    password: string().required().min(6),
  });
  const {
    formik,
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
    },
    validationSchema: userValidation,
    onSubmit: (values) => {
      console.log("submitting form", values);
      submitRegistration(values);
    },
  });

  const submitRegistration = async (values) => {
    console.log(values);
    const response = await fetch(`HTTP://localhost:4044/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    console.log("response response", response);
    const data = await response.json();
    console.log("response data", data);
    console.log("response data", data.token);
    if (data.token) {
      //
      localStorage.setItem("user", JSON.stringify(data.token));
      console.log(localStorage);
      console.log(localStorage.getItem("user"));
      navigate("/dashboard");
      setCurrentUser(localStorage.getItem("user"));
      //window.location.reload();
    }
  };

  return (
    <Paper elevation={3} className="regPaper">
      <form className="regform" onSubmit={handleSubmit}>
        <h1>Sign up for free</h1>
        {touched.fullName && errors.fullName ? (
          <div className="error">{errors.fullName}</div>
        ) : (
          ""
        )}
        <TextField
          value={values.fullName}
          id="fullName"
          label="Full Name"
          name="fullName"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username ? (
          <div className="error">{errors.username}</div>
        ) : (
          ""
        )}
        <TextField
          value={values.username}
          id="Email-id"
          label="username"
          name="username"
          type="email"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password ? (
          <div className="error">{errors.password}</div>
        ) : (
          ""
        )}
        <TextField
          value={values.password}
          id="password"
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" variant="contained" size="large">
          Register
        </Button>
      </form>
    </Paper>
  );
}

export default Register;
