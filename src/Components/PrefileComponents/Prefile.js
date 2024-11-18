import React, { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { DataContext } from "../../data/data";
import profileImage from "../../images/profileImage.webp";
import Settings from "./Settings";
import DashboardLayout from "./DashboardLayout";
import ProfileCourses from "./ProfileCourses";

const MainProfile = () => {
  return (
    <div className="flex min-h-screen bg-transparent text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-11">
        <Navbar />
        <ProfileHeader />
      </main>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  const { userData } = useContext(DataContext);

  return (
    <header className=" h-20 bg-transparent text-yellow-500 flex items-center px-4 z-10">
      <div className="text-3xl font-extrabold">Let's Code...</div>
      <div className="ml-auto flex gap-4">
        <div className="flex items-center space-x-2">
          <div className="text-white rounded-full w-10 h-10 bg-gray-600 overflow-hidden">
            <img src={profileImage} alt="Creative AMO" />
          </div>
          {userData && (
            <h1>
              {userData.fname} {userData.lname}
            </h1>
          )}
        </div>
      </div>
    </header>
  );
};
// Sidebar Component
const Sidebar = () => {
  return (
    <aside className="w-64 bg-transparent text-gray-400 flex flex-col p-2 mt-20 sticky h-[calc(100vh-4rem)]">
      <div className="text-2xl p-2 text-center font-bold mb-4 text-neutral-400 hover:text-yellow-200 rounded-t-2xl bg-slate-500">
        Creative AMO
      </div>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="hover:text-yellow-200 text-2xl ml-2 py-3">
          Home
        </Link>
        <Link
          to="/RoadMaps"
          className="hover:text-yellow-200 text-2xl ml-2 py-3"
        >
          RoadMaps
        </Link>
        <Link
          to="Profile-Courses"
          className="hover:text-yellow-200 text-2xl ml-2 py-3"
        >
          Courses
        </Link>
        <Link
          to="Settings"
          className="hover:text-yellow-200 text-2xl py-3 ml-2 block"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
};

// Profile Header Component
const ProfileHeader = () => {
  const { userData } = useContext(DataContext);

  return (
    <div className="flex text-center mb-4 mt-4 gap-4 p-4 bg-transparent rounded-md text-orange-200 h-[150px] border-b-[2px] border-white border-solid width-full ">
      <div className="bg-slate-400 rounded-full w-24 h-24 overflow-hidden">
        <img
          src={profileImage}
          alt="Creative AMO"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-base p-2">
        <h2 className="text-3xl font-bold mb-2">
          {userData?.fname && userData?.lname
            ? `${userData.fname} ${userData.lname}`
            : "Creative User"}
        </h2>
        {/* <p className="font-light mb-2">Contact: +2450000000</p> */}
        <p className="font-light mb-2">
          Email:{" "}
          {userData?.email ? `${userData.email}` : "anaswail246@gmail.com"}{" "}
        </p>
      </div>
    </div>
  );
};

export default MainProfile;
