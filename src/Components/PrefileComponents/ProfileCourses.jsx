import React, { useContext } from "react";
import { DataContext } from "../../data/data";
import { Link } from "react-router-dom";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCourses = () => {
  const { userData, setUserData } = useContext(DataContext);

  const handleSelectedCourses = (courseIndex) => {
    if (!userData || !userData.courses) return;

    // Remove course from the courses array
    const updatedCourses = userData.courses.filter(
      (_, index) => index !== courseIndex
    );

    // Update userData state
    setUserData((prevData) => ({
      ...prevData,
      courses: updatedCourses,
    }));

    console.log("Updated courses:", updatedCourses);
  };

  return (
    <div className="text-center text-white font-bold">
      {userData ? (
        <div className="text-3xl w-full flex gap-9 justify-center flex-wrap">
          {userData.courses?.map((course, index) => (
            <div
              key={index}
              className="card w-72 bg-[#0d0b21] h-[400px] rounded-2xl p-4 border-tr overflow-hidden relative z-10 grid max-md:w-72"
            >
              <div className="image-container">
                <img
                  className="rounded-md w-fit h-fit"
                  loading="lazy"
                  src={course.img}
                  alt={course.title}
                />
              </div>
              <div className="information my-5 p-1 flex justify-between items-center">
                <span className="bg-[#ffac15] py-1 px-4 rounded-md text-[#0d0b21] text-xs font-semibold truncate w-28">
                  {course.lang}
                </span>
                <span
                  className="text-[#ffac15] text-2xl hover:text-red-700 cursor-pointer transition-all"
                  onClick={() => handleSelectedCourses(index)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
              <div className="description"></div>
              <div className="wrapper flex justify-center">
                <Link className="cta" to={`/learn/${course.playlistId}`}>
                  <span>Start Now</span>
                  <span>
                    <svg
                      width="66px"
                      height="43px"
                      viewBox="0 0 66 43"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          className="one"
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          className="two"
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          className="three"
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 Z"
                          fill="#FFFFFF"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default ProfileCourses;
