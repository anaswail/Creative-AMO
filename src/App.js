import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import CourseContext from "./Components/MainComponents/CourseContext";
import RoadContext from "./Components/MainComponents/RoadContext";

import Navbar from "./Components/MainComponents/Navbar";
import Home from "./Components/HomeComponents/Home";
import AboutUs from "./Components/AboutComponents/AboutUs";
import Courses from "./Components/CoursesComponents/Courses";
import RoadMaps from "./Components/RoadMapsComponents/RoadMaps";
import Trainers from "./Components/TrainersComponents/Trainers";
import LogIn from "./Components/SignComponents/LogIn";
import Erorr from "./Components/MainComponents/Erorr";
import Footer from "./Components/MainComponents/Footer";
import SignUp from "./Components/SignComponents/SignUp";
import Loading from "./Components/MainComponents/Loading";
import CourseDetails from "./Components/CoursesComponents/CourseDetails";
import Track from "./Components/RoadMapsComponents/Track";
import { useContext } from "react";
import { DataContext } from "./data/data";
import Prefile from "./Components/PrefileComponents/Prefile";
import AdminPrefile from "./Components/PrefileComponents/AdminPrefile";
import Settings from "./Components/PrefileComponents/Settings";
import ProfileCourses from "./Components/PrefileComponents/ProfileCourses";
import DashboardLayout from "./Components/PrefileComponents/DashboardLayout";

function App() {
  const { success } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState(() => {
    // Get the saved mood from localStorage or default to "dark"
    return localStorage.getItem("mood") || "dark";
  });

  // Update localStorage whenever the mood changes
  useEffect(() => {
    localStorage.setItem("mood", mood);
  }, [mood]);

  useEffect(() => {
    window.addEventListener("load", () => setLoading(true));
  }, []);

  return (
    <div className={`App overflow-x-hidden ${mood}`}>
      <div className="dark:bg-[#080c14] bg-white">
        <CourseContext>
          <RoadContext>
            <Navbar Mood={setMood} /> {/* Pass Mood properly */}
            {loading ? (
              <Loading setHomeLoad={setLoading} />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/Courses/*"
                  element={success ? <Courses /> : <Navigate to="/login" />}
                />
                <Route
                  path="/Profile"
                  element={success ? <Prefile /> : <Navigate to="/login" />}
                >
                  <Route path="DashboardLayout" element={<DashboardLayout />} />
                  <Route path="Settings" element={<Settings />} />
                  <Route path="Profile-Courses" element={<ProfileCourses />} />
                </Route>
                <Route path="/RoadMaps" element={<RoadMaps />} />
                <Route path="/RoadMaps/:id" element={<Track />} />
                <Route path="/Trainers" element={<Trainers />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route
                  path="/LogIn"
                  element={success ? <Navigate to="/" /> : <LogIn />}
                />
                <Route
                  path="/SignUp"
                  element={success ? <Navigate to="/" /> : <SignUp />}
                />
                <Route
                  path="/course/:id"
                  element={
                    success ? <CourseDetails /> : <Navigate to="/login" />
                  }
                />
                <Route path="/admin" element={<AdminPrefile />} />
                <Route path="*" element={<Erorr />} />
              </Routes>
            )}
            <Footer />
          </RoadContext>
        </CourseContext>
      </div>
    </div>
  );
}

export default App;
