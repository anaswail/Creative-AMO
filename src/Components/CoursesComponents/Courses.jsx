import React, { useState, useEffect, useContext } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import SeparateCourses from "./SeparateCourses";
import CompleteTracks from "./CompleteTracks";
import { DataContext } from "../../data/data";

const Courses = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    navigate("SeparateCourses");
  }, []);

  useEffect(() => {
    if (location.pathname === "/Courses/SeparateCourses") {
      setActiveButton("separateCourses");
    }
  }, [location]);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="courses">
        <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-96 flex justify-center items-center pt-28 flex-col">
          <h1 className="text-white font-bold text-center text-5xl">Courses</h1>
          <p className="text-white text-center w-1/2 mt-5">
            Our Courses: Educational Programs Offered by Expert Instructors to
            Help You Gain Knowledge and Skills in a Specific Field.
          </p>
        </div>
        <div className="sections text-center mt-20">
          <Link to="SeparateCourses" className="font-bold text-2xl">
            <button
              onClick={() => handleButtonClick("separateCourses")}
              className="rounded-3xl px-5 py-3 mr-4"
              style={{
                backgroundColor:
                  activeButton === "separateCourses" ? "#ffac15" : "#6356e3",
                color: "white",
              }}
            >
              Separate Courses
            </button>
          </Link>
          <Link to="CompleteTracks" className="font-bold text-2xl">
            <button
              onClick={() => handleButtonClick("completeTracks")}
              className="rounded-3xl px-5 py-3"
              style={{
                backgroundColor:
                  activeButton === "completeTracks" ? "#ffac15" : "#6356e3",
                color: "white",
              }}
            >
              Complete Tracks
            </button>
          </Link>
        </div>

        <div className="course-content">
          <Routes>
            <Route path="SeparateCourses" element={<SeparateCourses />} />
            <Route path="CompleteTracks" element={<CompleteTracks />} />
            <Route
              path="*"
              element={<Navigate to="SeparateCourses" replace />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Courses;
