import React, { useContext } from "react";
import { Course } from "../MainComponents/CourseContext";

const CourseDetails = () => {
  const { selectedCourse } = useContext(Course);
  return (
    <div className="h-screen flex justify-center items-center text-white text-2xl font-bold flex-col">
      <h1>{selectedCourse.id}</h1>
      <img src={selectedCourse.image} alt={selectedCourse.instructor} />
      <h2>{selectedCourse.instructor}</h2>
      <h2>{selectedCourse.lang}</h2>
      <h2>{selectedCourse.advantages}</h2>
    </div>
  );
};

export default CourseDetails;
