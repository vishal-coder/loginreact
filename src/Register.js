import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { formik, useFormik } from "formik";
import * as yup from "yup";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
// import dotenv from "dotenv";
import { UserContext } from "./Context/UserContext.js";
import { submitRegistration } from "./auth/auth.js";
function Register() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
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
    setFieldError,
  } = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      password: "",
    },
    validationSchema: userValidation,
    onSubmit: async (values) => {
      const data = await submitRegistration(values);

      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data.token));

        navigate("/dashboard");
        login(data.username, data.token); // change 'myUser' to actual username
      } else {
        setFieldError("fullName", data.message);
      }
    },
  });

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
