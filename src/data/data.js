// src/context/data.jsx
import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "./axios";

export const DataContext = createContext();

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://wholesome-consideration-production.up.railway.app",
  withCredentials: true, // عشان الكوكيز تشتغل تمام
});

export const DataProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [url, setUrl] = useState(axiosInstance.defaults.baseURL);

  useEffect(() => {
    const initialize = async () => {
      try {
        const storedToken = Cookies.get("token");
        if (storedToken) setSuccess(true);
        // لو في config.json هنحملها
        const response = await fetch("/config.json");
        const data = await response.json();
        if (data.url) setUrl(data.url);
        await fetchData();
      } catch (error) {
        console.error("Initialization Error:", error);
      }
    };
    initialize();
  }, [url]);

  const ResetData = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  const Register = async () => {
    if (!fname || !email || !password) {
      return toast.error("Please provide an email and password");
    }

    try {
      const res = await axios.post(`${url}/api/v1/users/register`, {
        firstname: fname || "",
        lastname: lname || "",
        email,
        password,
      });

      const { success, token } = res.data;
      setSuccess(success);
      Cookies.set("token", token, { expires: 7 });
      navigate("/courses");
      toast.success("Registration successful!");
      ResetData();
      await fetchData();
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Registration failed!";
      toast.error(message);
    }
  };

  const Login = async () => {
    if (!email || !password) {
      return toast.error("Please provide an email and password");
    }

    try {
      const res = await axios.post(`${url}/api/v1/users/login`, {
        email,
        password,
      });

      const { success, token } = res.data;
      setSuccess(success);
      Cookies.set("token", token, { expires: 7 });
      ResetData();
      await fetchData();
    } catch (err) {
      console.error(err);
      const message = err.response?.data?.message || "Login failed!";
      toast.error(message);
      Cookies.remove("token");
      setSuccess(false);
      setUserData(null);
    }
  };

  const fetchData = useCallback(async () => {
    if (userData) return; // Skip if already fetched

    try {
      const res = await axios.get(`${url}/api/v1/users/me`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setUserData(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
      if (err.response?.status === 401) {
        Cookies.remove("token");
        setSuccess(false);
        navigate("/login");
      }
    }
  }, [userData, navigate, url]);

  useEffect(() => {
    const initialize = async () => {
      try {
        const storedToken = Cookies.get("token");
        if (storedToken) setSuccess(true);

        await fetchData();
      } catch (error) {
        console.error("Initialization Error:", error);
      }
    };
    initialize();
  }, [fetchData]);

  const logout = () => {
    Cookies.remove("token");
    navigate("/login");
    setSuccess(false);
    setUserData(null);
  };

  const getYtData = async (id) => {
    const apiKey =
      "AIzaSyDcx-nZ3fkqEcSF_WXutU82YvatKmBUB6w" ||
      "AIzaSyCppfZDUwgSiyjA6U406JfeCLAfwE2daMo" ||
      "AIzaSyA2JnlMIimu2d-negu7kZIamjtraPD8Zc0" ||
      "AIzaSyC3gSv4-ql6XaxPW_rQZm4hZTsXZeF6tQU";
    const ytUrl = `https://www.googleapis.com/youtube/v3/playlistItems`;
    const params = {
      part: "snippet",
      maxResults: 100,
      playlistId: id,
      key: apiKey,
    };

    try {
      const res = await axios.get(ytUrl, { params });
      const data = res.data;

      if (data.items && data.items.length > 0) {
        const firstVideo = data.items[0].snippet;
        return {
          image: firstVideo.thumbnails.high.url,
          channelTitle: firstVideo.channelTitle,
        };
      }
    } catch (err) {
      console.error("Error fetching YouTube data:", err);
      return {};
    }
  };

  const updateCourseProgress = async (
    token,
    playlistId,
    videoIndex,
    lang = null,
    img = null
  ) => {
    try {
      const response = await axios.post(
        `${url}/api/v1/users/progress`,
        {
          playlistId,
          videoIndex,
          lang,
          img,
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
        console.error("Failed to update progress:", response.data.error);
        return null;
      }
    } catch (error) {
      console.error(
        "Error while updating progress:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  const data = {
    success,
    email,
    password,
    fname,
    lname,
    userData,
    setUserData,
    setSuccess,
    setEmail,
    setPassword,
    url,
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
