import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from 'yup'


export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema: formSchema,
        onSubmit: async (values) => {
        
            try {
                let resp = await fetch("https://pets-backend-nlog.onrender.com/users", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values, null , 2),
                });

                if (resp.ok) {
                    let re = await resp.json();
                    localStorage.setItem("loginToken", re.access_token) 
                    localStorage.setItem("user_id", re.user_id)
                    console.log(re)  
                    setIsLoading(true);
                    setTimeout(() => {
                        setIsLoading(false);
                        navigate("/home")
                    }, 200);
                
                } else {
                    let errorData = await resp.json();
                    if (resp.status === 500 || resp.status === 401 ) {
                      setErrors("Invalid username or password.");
                    } else {
                      setErrors(errorData.message);
                    }
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
                <>
                  <div>
                    <div style={{textAlign: "center"}}>
                      <h1 style={{...style1,...style2}}>SIgn In</h1>
                      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
                        <label htmlFor="username">Username</label>
                        <br />
                        <input
                          id="username"
                          name="username"
                          onChange={formik.handleChange}
                          value={formik.values.username}
                          placeholder="username"
                          className="signin"
                        />
                        {formik.touched.username && formik.errors.username ? (
                          <div style={{ color: 'red' }}>{formik.errors.username}</div>
                        ) : null}
                        <br />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input
                          id="password"
                          name="password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          placeholder="password"
                          className="signin"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div style={{ color: 'red' }}>{formik.errors.password}</div>
                        ) : null}
                        <br />
                        <br />
                        <button type="submit" className="signinb">Sign In</button>
                      </form>
                      {Object.keys(errors).length > 0 && (
                        <p style={{ color: "red" }}>{errors}</p>
                      )}
                      <p>Don't have an account? <Link to="/">Sign up here</Link></p>
                    </div>
                  </div>
                </>
              );  
}

