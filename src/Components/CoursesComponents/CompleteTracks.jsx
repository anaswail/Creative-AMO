import React from "react";
import { Link } from "react-router-dom";

const CompleteTracks = () => {
  return (
    <div className="complete-tracks w-full flex justify-center items-center flex-col">
      <h1 className="text-white font-bold text-5xl mt-16">
        It will be added soon
      </h1>
      <Link
        to="Courses/SeparateCourses"
        className="text-[#ffac15] text-3xl mt-3 hover:text-yellow-600 "
      >
        Go to separate courses
      </Link>
    </div>
  );
};

export default CompleteTracks;
