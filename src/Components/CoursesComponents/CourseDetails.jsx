import React, { useContext } from "react";
import { Course } from "../MainComponents/CourseContext";

const CourseDetails = () => {
  const { selectedCourse } = useContext(Course);
  return (
    <div className="pt-52 w-full">
      <div className="title w-full flex justify-center items-center">
        <h1 className="bg-[#ffac15] text-[#080c14] py-3 px-12 font-bold text-2xl rounded-full">
          {selectedCourse.lang}
        </h1>
      </div>

      <div className="details flex items-center justify-center gap-20 mt-20 ">
        <p className="text-white text-2xl w-1/2">{selectedCourse.advantages}</p>
        <img
          className="w-1/3 border-[4px] border-solid border-white rounded-xl"
          src={selectedCourse.image}
          alt={selectedCourse.instructor}
        />
      </div>

      <div className="lessons bg-[#0d0b21]"></div>
    </div>
  );
};

export default CourseDetails;
