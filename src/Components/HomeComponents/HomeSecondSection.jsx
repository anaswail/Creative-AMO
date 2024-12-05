import React from "react";
import { Link } from "react-router-dom";

const HomeSecondSection = (props) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-screen md:h-[100vh] flex justify-center items-center gap-10 md:p-20 p-8 max-md:flex-col-reverse">
      <img
        className="w-[400px] max-lg:w-[300px]"
        src={props.image}
        alt="group developers"
      />
      <div className="flex flex-col gap-5 w-1/2 max-md:w-full max-md:text-center">
        <div className="dark:text-white text-black">
          <h2 className="text-xl font-bold">Free Courses</h2>
          <p className="dark:font-normal font-medium">
            Access free resources with YouTube classes organized, convenient,
            and designed to track your progress. Advance your skills from any
            place, at your own speed, and elevate your future with the ease of
            online education.{" "}
            <Link
              to="/Courses"
              onClick={scrollToTop}
              className="text-[#ffac15] hover:text-yellow-600 max-md:block transition-all"
            >
              go to courses!
            </Link>
          </p>
        </div>
        <div className="dark:text-white text-black">
          <h2 className="text-xl font-bold">Road Maps</h2>
          <p className="dark:font-normal font-medium">
            Explore our roadmaps and build your skills with ease. Crafted for
            learners and professionals, these clear, simple guides offer
            structured learning that fits into your routine. Focus on your path
            and achieve success in less time. Shape your future with the power
            of easy roadmaps!{" "}
            <Link
              onClick={scrollToTop}
              to="/Courses"
              className="text-[#ffac15] hover:text-yellow-600 max-md:block transition-all"
            >
              go to Road Maps!
            </Link>
          </p>
        </div>
        <div className="dark:text-white text-black">
          <h2 className="text-xl font-bold">learn with experts</h2>
          <p className="dark:font-normal font-medium">
            Explore various courses to grow your skills and knowledge. Learn
            in-demand topics like web development, mobile development, cyber
            security, graphic design, desktop development, UI/UX, and more to
            enhance your career and build a strong professional foundation.{" "}
            <Link
              to="/Courses"
              onClick={scrollToTop}
              className="text-[#ffac15] hover:text-yellow-600 max-md:block transition-all "
            >
              go to courses!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSection;
