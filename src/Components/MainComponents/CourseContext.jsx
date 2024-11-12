import { React, useState, createContext } from "react";
// import axios from "axios";

export const Course = createContext();

const CourseContext = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // useEffect(() => {
  //   const request = async () => {
  //     try {
  //       const response = await axios.get("Courses.json");
  //       setCourses(response.data);
  //     } catch (reason) {
  //       console.log(`Reason: ${reason}`);
  //     }
  //   };
  //   request();
  //   console.log(courses);
  // }, []);
  return (
    <Course.Provider
      value={{ selectedCourse, setSelectedCourse, courses, setCourses }}
    >
      {children}
    </Course.Provider>
  );
};

export default CourseContext;
