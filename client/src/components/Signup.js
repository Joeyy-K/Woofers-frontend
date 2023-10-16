import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom"
import * as yup from "yup";
export const SignupForm = () => {
  const [users, setUsers] = useState([{}]);
  const [refreshPage, setRefreshPage] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("FETCH! ");
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, [refreshPage]);

  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Must enter email"),
    username: yup.string().required("Must enter a username").max(15),
    password: yup.string().required("Must enter password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      if (values.profile_pic === '') {
        values.profile_pic = null;
      }

      try {
        let resp = await fetch("/user_posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null , 2),
        });
        if (resp.ok) {
          navigate("/home")
          setRefreshPage(!refreshPage);
        }
      } catch (error) {
        console.error("Network error:", error);
      }
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
      <label htmlFor="username" style={{...style3}}>Username:</label>
        <br />
        <input
          id="username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="username"
          className="signup"
        />
        <p style={{ color: "red" }}> {formik.errors.name}</p>
        <label htmlFor="email" style={{...style3}}>Email:</label>
        <br />
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email }
          placeholder="email"
          className="signup"
        />
        <p style={{ color: "red" }}> {formik.errors.email}</p>
        <label htmlFor="password" style={{...style3}}>Password:</label>
        <br />
        <input
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          className="signup"
        />
        <p style={{ color: "red" }}> {formik.errors.password}</p>
        <label htmlFor="phonenumber" style={{...style3}}>Phonenumber:</label>
        <br />
        <input
          id="phonenumber"
          name="phonenumber"
          onChange={formik.handleChange}
          value={formik.values.phonenumber}
          placeholder="phonenumber"
          className="signup"
        />
        <p style={{ color: "red" }}> {formik.errors.phonenumber}</p>
      
        <button type="submit" className="signupb"><Link to="/home">Sign Up</Link></button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign in here</Link></p>
    </div>
  );
};
