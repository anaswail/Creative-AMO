import React, { useContext } from "react";
import { Course } from "../MainComponents/CourseContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { DataContext } from "../../data/data";

const CourseDetails = () => {
  const { url } = useContext(DataContext);
  const { updateCourseProgress } = useContext(DataContext);

  const { selectedCourse } = useContext(Course);
  return (
    <div className="pt-52 w-full">
      <div className="title w-full flex justify-center items-center">
        <h1 className="bg-[#ffac15] text-[#080c14] py-3 px-12 font-bold text-2xl rounded-full">
          {selectedCourse.lang}
        </h1>
      </div>

      <div className="details flex items-start justify-center gap-20 mt-20 max-md:flex-col-reverse max-md:items-center max-md:gap-10">
        <p className="text-white text-xl w-1/2 max-md:text-center max-md:w-[90%]">
          {selectedCourse.discription}
        </p>
        <img
          className="w-1/3 border-[4px] border-solid border-white rounded-xl max-md:w-[90%] max-md:text-center"
          src={selectedCourse.image}
          alt={selectedCourse.instructor}
        />
      </div>

      <div className="start-learning w-full flex justify-center mt-20">
        <Link to={`/learn/${selectedCourse.playListId}`}>
          <button
            onClick={() => {
              updateCourseProgress(
                Cookies.get("token"),
                selectedCourse.playListId,
                0,
                selectedCourse.lang,
                selectedCourse.image

              );
            }}
            className="bg-[#ffac15] transition-all text-[#080c14] hover:text-[#ffffff] hover:scale-105 hover:bg-[#3a319c] py-3 px-12 font-bold text-2xl rounded-full"
          >
            Start Learning
          </button>
        </Link>
      </div>

      <div className="lessons bg-[#0d0b21]"></div>
    </div>
  );
};

export default CourseDetails;
