import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../MainComponents/Loading";
import { Course } from "../MainComponents/CourseContext";
import { DataContext } from "../../data/data";
import Cookies from "js-cookie";

const SeparateCourses = () => {
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  return (
    <div className="separate-courses">
      {coursesLoading ? (
        <Loading setCoursesLoading={setCoursesLoading} />
      ) : (
        <Cards
          setLoad={setCoursesLoading}
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
      )}
    </div>
  );
};

const Cards = ({ setLoad, searchTerm, setSearchTerm }) => {
  const { courses = [], setSelectedCourse, setCourses } = useContext(Course);
  const { url, setSuccess, getYtData } = useContext(DataContext);

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    if (!Cookies.get("token")) {
      setSuccess(false);
    }

    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${url}/api/v1/courses/get`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setCourses(response.data.courses);
        setLoad(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoad(false);
      }
    };

    fetchCourses();
  }, [setLoad]);

  useEffect(() => {
    if (!courses.length) return;
    const loadAllCourses = async () => {
      const coursePromises = courses.flatMap(async (category) => {
        const categoryCourses = Object.values(category)[0] || [];
        const updatedCourses = await Promise.all(
          categoryCourses.map(async (course) => {
            const ytData = await getYtData(course.playListId);
            return {
              ...course,
              image: ytData.image,
              channelTitle: ytData.channelTitle,
            };
          })
        );
        return updatedCourses;
      });

      const resolvedCourses = (await Promise.all(coursePromises)).flat();
      setAllCourses(resolvedCourses);
    };

    loadAllCourses();
  }, [courses]);

  const handleSelectedCourse = (res) => {
    setSelectedCourse(res);
  };

  // filter search by title, channel title, instructor and lang
  const filteredCourses = allCourses.filter(
    (course) =>
      (course.title && course.title.toLowerCase().includes(searchTerm.toLowerCase())) || 
      (course.channelTitle && course.channelTitle.toLowerCase().includes(searchTerm.toLowerCase())) || 
      (course.instructor && course.instructor.toLowerCase().includes(searchTerm.toLowerCase())) || 
      (course.lang && course.lang.toLowerCase().includes(searchTerm.toLowerCase())) 
  );

  return (
    <div className="cards-container">
      {/* Search input */}
<div className="w-full flex justify-center p-5">
  <input
    type="text"
    placeholder="Search courses..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400 text-lg"
  />
</div>


      <div className="cards flex justify-center gap-9 items-center mt-10 flex-wrap">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((res, index) => (
            <div
              key={index}
              className="card w-72 bg-[#0d0b21] h-[380px] rounded-2xl p-4 border-tr overflow-hidden relative z-10 grid"
            >
              <div className="image-container">
                <img
                  className="rounded-md w-fit h-fit"
                  loading="lazy"
                  src={res.image}
                  alt={res.channelTitle || res.instructor}
                />
              </div>
              <div className="information my-5 p-1 flex justify-between items-center">
                <span className="bg-[#ffac15] py-1 px-4 rounded-md text-[#0d0b21] text-xs font-semibold">
                  {res.channelTitle || res.instructor}
                </span>
                <span className="bg-[#ffac15] py-1 px-4 rounded-md text-[#0d0b21] text-xs font-semibold">
                  {res.lang}
                </span>
              </div>
              <div className="description">
                <p className="text-white mt-1 mb-2 p-3 text-sm">{res.advantages}</p>
              </div>
              <div className="wrapper flex justify-center">
                <Link
                  className="cta"
                  to={`/course/${res.id}`}
                  onClick={() => {
                    handleSelectedCourse(res);
                    window.scrollTo(0, 0);
                  }}
                >
                  <span>Start Now</span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No courses found for "{searchTerm}"</p> 
        )}
      </div>
    </div>
  );
};

export default SeparateCourses;
