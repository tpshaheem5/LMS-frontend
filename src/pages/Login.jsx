import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setCookie } from 'cookies-next';
import { getCookie } from 'cookies-next';


function Login() {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const getCookies = getCookie('adminToken')
  // const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "admin@1" && password === "admin369") {
      try {
        const response = await axios.post("http://localhost:5000/admin/login", {
          email,
          password,
        });
        const adminToken = response.data.token;
        // console.log(adminToken,"adminnnnnnn");
        setCookie("adminToken", adminToken);
        toast.success("Admin login successfully");
        setIsAdminLogin(true);
        navigate("/dashboard"); // Navigate after setting isAdminLogin
      } catch (error) {
        console.error("Error during admin login:", error);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5000/user/login", {
          email,
          password,
        });

        if (response.status === 200) {
          const userToken = response.data.token;
          setCookie("userToken", userToken);
          toast.success("Login successful");
          navigate("/");
        } else {
          toast.error("Login failed");
        }
      } catch (error) {
        console.error("Error during user login:", error);
        toast.error("Error occurred during login");
      }
    }
  };

  useEffect(() => {
    if (getCookies) {
      setIsAdminLogin(true);
      navigate("/dashboard"); 
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input type="text" name="email" ref={email} id="email" placeholder="Email" />
        <input type="password" name="password" id="password" ref={password} placeholder="Password" />
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
