import React, { useContext } from "react";
import { DataContext } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";

const ProfileCourses = () => {
  const { userData} = useContext(DataContext);
  
  return (
    <div className="text-white font-bold text-3xl w-full text-center">
      {userData ? 
      <div>
        {userData.courses.map((course) => (
          
          <Link to={`/learn/${course.playlistId}`}
            key={course._id}>
            <h1>{course.title}</h1>
            <img src={course.img} alt="" />
          </Link>
        ))}
      </div>
      : ""}
    </div>
  );
};


export default ProfileCourses;
