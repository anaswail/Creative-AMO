// src/context/data.jsx
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [title, setTitle] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = Cookies.get("token"); 
    if (storedToken) { 
      setSuccess(true); 
    }
  }, []);

  const ResetData = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  const Register = () => {
    if (!fname || !email || !password) {
      return toast.error("Please provide an email and password");
    } else {
      axios
        .post("http://fi3.bot-hosting.net:22756/api/v1/users/register", {
          firstname: fname,
          lastname: lname || null,
          email,
          password,
        })
        .then((res) => {
          const { success, token } = res.data;
          setSuccess(success);
          Cookies.set("token", token, { expires: 7 });
          navigate("/courses");
          toast.success("login successfull");
          ResetData();
        })
        .catch((err) => {
          console.log(err);
          toast.error("try again")
        });
    }
  };

  const Login = () => {
    if (!email || !password) {
      toast.error("Please provide an email and password");
    } else {
      axios
        .post("http://fi3.bot-hosting.net:22756/api/v1/users/login", {
          email,
          password,
        })
        .then((res) => {
          const { success, token } = res.data;
          setSuccess(success);
          Cookies.set("token", token, { expires: 7 });
          ResetData();
        });
    }
  };

  let data = {
    success,
    email,
    password,
    fname,
    lname,
    setSuccess,
    setEmail,
    setPassword,
    setFname,
    setLname,
    Register,
    Login,
    title,
    setTitle
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
