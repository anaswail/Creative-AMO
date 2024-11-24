import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import CourseContext from "./Components/MainComponents/CourseContext";
import RoadContext from "./Components/MainComponents/RoadContext";
import ChangedDataContext from "./Components/MainComponents/ChangedDataContext";

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
import CourseDetails from "./Components/CoursesComponents/CourseDetails";
import Track from "./Components/RoadMapsComponents/Track";
import { useContext } from "react";
import { DataContext } from "./data/data";
import Prefile from "./Components/PrefileComponents/Prefile";
import AdminPrefile from "./Components/PrefileComponents/AdminPrefile";
import Settings from "./Components/PrefileComponents/Settings";
import ProfileCourses from "./Components/PrefileComponents/ProfileCourses";
import DashboardLayout from "./Components/PrefileComponents/DashboardLayout";
import Learn from "./Components/CoursesComponents/Learn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const { success } = useContext(DataContext);
  const [mood, setMood] = useState(localStorage.getItem("mood") || "dark");

  useEffect(() => {
    localStorage.setItem("mood", mood);
  }, [mood]);

  useEffect(() => {
    const scrollToTop = document.querySelector(".scrollToTop");

    const clacScrollValue = () => {
      const pos = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollToTop) {
        scrollToTop.style.display = pos > 100 ? "flex" : "none";
        const percentValue = Math.round(
          (pos * 100) / document.documentElement.scrollHeight
        );
        scrollToTop.style.background = `linear-gradient(to top, #0d0b21 ${percentValue}%, #ffac15 ${percentValue}%)`;
      }
    };

    window.addEventListener("scroll", clacScrollValue);
    return () => window.removeEventListener("scroll", clacScrollValue);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`App overflow-x-hidden ${mood}`}>
      <div
        onClick={scrollTop}
        className="scrollToTop h-[50px] text-xl w-[50px] rounded-xl bg-blue-600 hidden justify-center items-center rounded-1/2 text-white cursor-pointer fixed bottom-8 right-8 max-md:h-[35px] max-md:w-[35px] max-md:text-lg hover:-translate-y-2 transition-all z-50"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
      <div className="dark:bg-[#080c14] bg-white">
        <CourseContext>
          <RoadContext>
            <ChangedDataContext>
              <Navbar Mood={setMood} /> {/* Pass Mood properly */}
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
                <Route path="/Guides" element={<Trainers />} />
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
                <Route
                  path="/learn/:playlistId"
                  element={success ? <Learn /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Erorr />} />
              </Routes>
              <Footer />
            </ChangedDataContext>
          </RoadContext>
        </CourseContext>
      </div>
    </div>
  );
}

export default App;
