import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.addEventListener("load", () => setLoading(true));
  });

  return (
    <div className="App bg-[#080c14] overflow-x-hidden">
      <BrowserRouter>
        <CourseContext>
          <RoadContext>
            <Navbar />
            {loading ? (
              <Loading setHomeLoad={setLoading} />
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Courses/*" element={<Courses />} />
                <Route path="/RoadMaps" element={<RoadMaps />} />
                <Route path="/RoadMaps/:id" element={<Track />} />
                <Route path="/Trainers" element={<Trainers />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="*" element={<Erorr />} />
              </Routes>
            )}
            <Footer />
          </RoadContext>
        </CourseContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
