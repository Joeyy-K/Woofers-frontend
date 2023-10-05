import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
export const SignupForm = () => {
  const [refreshPage, setRefreshPage] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("FETCH! ");
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [refreshPage]);


  const formSchema = yup.object().shape({
    username: yup.string().required("Must enter a name").max(15),
    email: yup.string().email("Invalid email").required("Must enter email"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("https://pets-backend-nlog.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status === 200) {
          setRefreshPage(!refreshPage);
          navigate("/home")
        }
      });
    },
  });
 
  const style1 = {fontSize: "80px"};
  const style2 = {color: "#6038D2"};
  const style3 = {fontWeight: "bold"}

  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{...style1}}>Welcome!</h1>
      <p style={{...style1, ...style2}}>Sign Up!</p>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name" style={{...style3}}>Username:</label>
        <br />
        <input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <p style={{ color: "red" }}> {formik.errors.name}</p>
        <label htmlFor="email" style={{...style3}}>Email:</label>
        <br />
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p style={{ color: "red" }}> {formik.errors.email}</p>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
