import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { DataContext } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCourses = () => {
  const { url } = useContext(DataContext);
 
  // const checkAuth = async (token) => {
  //   await axios
  //   .get(`http://fi3.bot-hosting.net:22756/api/v1/admin/auth`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((response) => {
  //     if (response.data.role !== "admin") {
  //       navigate("/");
  //     }
  //   })  
  //   .catch((error) => {
  //     navigate("/");
  //   });
  // }
    
  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   if (!token) {
  //     console.log("no token");
  //     navigate("/");
  //   } else {
  //     checkAuth(token)
  //   }
  // }, [navigate]);

  const AddCourse = () => {
    const token = Cookies.get("token");
    if (!token) {
      console.log("no token");
    } else {
      axios
        .post(
          `${url}/api/v1/courses/add`,
          {
            title: formData.title,
            instructor: formData.instructor,
            playListId: formData.playlistId,
            category: formData.category,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          toast.success("Course added successfully:");
        })
        .catch((error) => {
          toast.error("Error adding course");
        });
    }
  };
  const AddAdmin = async (email) => {
    const token = Cookies.get("token");

    if (!token) {
      console.log("No token provided");
      return;
    }

    try {
      await axios.post(
        `${url}/api/v1/admin/add`,
        { email }, 
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      toast.success("Admin added successfully");
    } catch (error) {
      toast.error("Error adding admin");
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    playlistId: "",
    category: "HTML",
  });

  const [categorys, setCategorys] = useState([
    "HTML",
    "CSS",
    "SASS",
    "Tailwind",
    "React",
    "Vue",
    "Angular",
    "git",
    "bootstrap",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "Java",
    "C++",
    "C#",
    "Go",
    "Swift",
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Courses added:", formData);
  };

  return (
    <div className="bg-[#080c14] w-screen h-fit pt-40">
      <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold text-[#ffac15] text-center mb-6">
          Add Courses
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 justify-center"
        >
          <div className="w-full sm:w-[48%]">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Courses Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="ex: HTML Tetorials"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <label
              htmlFor="instructor"
              className="block text-sm font-medium text-gray-700"
            >
              instructor:
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              placeholder="ex: Oussama Elzero"
              value={formData.instructor}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full sm:w-[48%]">
            <label
              htmlFor="playlistId"
              className="block text-sm font-medium text-gray-700"
            >
              playlistId:
            </label>
            <input
              type="text"
              id="playlistId"
              name="playlistId"
              value={formData.playlistId}
              onChange={handleChange}
              placeholder="ex: PLDoPjvoNmBAzRrd7N1pD1GhGdn4JysxFl"
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full sm:w-[48%]">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category:
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categorys.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full">
            <button
              onClick={AddCourse}
              type="submit"
              className="w-full px-4 py-2 bg-[#ffac15] text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Courses
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold text-[#ffac15] text-center mb-6">
          Add Admin
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 justify-center"
        >
          <div className="w-full sm:w-[48%]">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Admin Email:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="ex: HTML Tetorials"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full sm:w-[48%]">
            {/* button  */}
            <button
              onClick={AddAdmin}
              type="submit"
              className="w-full px-4 py-2 bg-[#ffac15] text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
