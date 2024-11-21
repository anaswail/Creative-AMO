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
          toast.error(err);
        });
    }
  };

  const Login = async () => {
    if (!email || !password) {
      toast.error("Please provide an email and password");
    } else {
      
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
        })
        .catch( (err) => { toast.error(err) })
      
      
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

  async function getYtData(id) {
    const apiKey = "AIzaSyDcx-nZ3fkqEcSF_WXutU82YvatKmBUB6w";
    const url = `https://www.googleapis.com/youtube/v3/playlistItems`;
    const params = {
      part: 'snippet',
      maxResults: 1,
      playlistId: id,
      key: apiKey,
    };
  
    try {
      const res = await axios.get(url, { params });
      const data = res.data;
      if (data.items && data.items.length > 0) {
        const firstVideo = data.items[0].snippet;
        return {
          image: firstVideo.thumbnails.high.url,
          channelTitle: firstVideo.channelTitle,
        };
      }
    } catch (err) {
      console.log('Error fetching YouTube data:', err);
      return {};
    }
  }

  const updateCourseProgress = async (token, playlistId, videoIndex, lang = null, img = null) => {
    try {
      const response = await axios.post(
        `${url}/api/v1/users/progress`, 
        {
          playlistId,
          videoIndex,
          lang,
          img
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.data.success) {
        console.log("Progress updated successfully:", response.data.message);
        return response.data;
      } else {
        console.log("Failed to update progress:", response.data.error);
        return null;
      }
    } catch (error) {
      console.log("Error while updating progress:", error.response?.data || error.message);
      return null;
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
    getYtData,
    updateCourseProgress,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
