import React, { useContext, useState } from "react";
import { Course } from "../MainComponents/CourseContext";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { DataContext } from "../../data/data";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const { url } = useContext(DataContext);
  const { updateCourseProgress } = useContext(DataContext);

  const { selectedCourse } = useContext(Course);

  const addToProfile = () => {
    const swalWithTailwindButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-[#0d0b21] text-white font-bold py-2 px-4 rounded transition-all hover:bg-green-600",
        cancelButton:
          "bg-[#0d0b21] text-white font-bold py-2 px-4 mx-5 transition-all rounded hover:bg-red-600",
      },
      buttonsStyling: false, // Disable default SweetAlert2 styling
    });

    swalWithTailwindButtons
      .fire({
        title: "Do you really want to join the course?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, i'm ready 💪",
        cancelButtonText: "No, i'm not sure 😞",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          updateCourseProgress(
            Cookies.get("token"),
            selectedCourse.playListId,
            0,
            selectedCourse.lang,
            selectedCourse.image
          );
          swalWithTailwindButtons.fire({
            title: "Subscribed",
            text: "I wish you an enjoyable learning journey.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithTailwindButtons.fire({
            title: "Count soon",
            text: "The course has not been added to the profile, but you can view the content.",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="pt-52 w-full">
      <div className="title w-full flex justify-center items-center">
        <h1 className="bg-[#ffac15] text-[#080c14] py-3 px-12 font-bold text-2xl rounded-full">
          {selectedCourse.lang}
        </h1>
      </div>

      <div className="details flex items-start justify-center gap-20 mt-20 max-md:flex-col-reverse max-md:items-center max-md:gap-10">
        <div className="text-content w-1/2 max-md:text-center max-md:w-[90%] text-xl">
          <h1 className="text-[#ffac15] font-bold mb-5">
            Instructor:{"  "}
            <span className="text-white">{selectedCourse.instructor}</span>
          </h1>
          <p className="text-[#ffac15] font-bold">
            Description:{"  "}
            <span className="text-white font-light text-lg ">
              {selectedCourse.discription}
            </span>
          </p>
        </div>
        <img
          className="w-1/3 border-[4px] border-solid border-white rounded-xl max-md:w-[90%] max-md:text-center"
          src={selectedCourse.image}
          alt={selectedCourse.instructor}
        />
      </div>

      <div className="start-learning w-full flex justify-center mt-20">
        <Link to={`/learn/${selectedCourse.playListId}`}>
          <button
            onClick={addToProfile}
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
