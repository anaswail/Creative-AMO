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
  const [userData, setUserData] = useState(null);
  const [url , setUrl] = useState("http://fi3.bot-hosting.net:22756");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = Cookies.get("token"); 
    if (storedToken) { 
      setSuccess(true);
      
    }
    fetch('/config.json')
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.url)
        fetchData();
      })
      .catch((error) => console.error('Error loading config:', error));
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
        .post(`${url}/api/v1/users/register`, {
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
          fetchData();
        })
        .catch((err) => {
          console.log(err);
          toast.error("try again")
        });
    }
  };

  const Login = async () => {
    if (!email || !password) {
      toast.error("Please provide an email and password");
    } else {
      try{
        await axios
        .post(`${url}/api/v1/users/login`, {
          email,
          password,
        })
        .then((res) => {
          const { success, token } = res.data;
          setSuccess(success);
          Cookies.set("token", token, { expires: 7 });
          ResetData();
          fetchData();
        });
      } catch (err) { toast.error("try again after a few minutes") }
      
    }
  };

  async function fetchData () {
    await axios.get(`${url}/api/v1/users/me`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    })
    .then(res => {
      setUserData(res.data);
      console.log(res.data)
    })
    .catch(err => {
      console.log("Error fetching data:", err); 
    });
  };

  const logout = async () => {
    try {
      Cookies.remove("token");
      navigate("/login");
      setSuccess(false);
      setUserData(null)
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  let data = {
    success,
    email,
    password,
    fname,
    lname,
    userData,
    url,
    setSuccess,
    setEmail,
    setPassword,
    setFname,
    setLname,
    Register,
    Login,
    logout,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
