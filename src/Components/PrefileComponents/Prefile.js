import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../data/data";
import profileImage from "../../images/profileImage.webp";

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
          to="/courses"
          className="hover:text-yellow-200 text-2xl ml-2 py-3"
        >
          Courses
        </Link>
        <Link
          to="/settings"
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
    <div className="flex text-center mb-4 mt-4 gap-4 p-4 bg-transparent rounded-md text-orange-200 h-[200px] w-[500px]">
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
            : "Creative AMO"}
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

// Course Progress Component
const CourseProgress = ({ title, progress, color }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg text-gray-400">{title}</h4>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Prefile Component for User Context
const Prefile = () => {
  const { userData, logout } = useContext(DataContext);
  return (
    <div className="mt-36 h-10 bg-red-300 flex justify-center items-center">
      {userData ? (
        <>
          <h2>
            Welcome {userData.fname} {userData.lname}
          </h2>
          <button onClick={logout} className="py-2 px-4 bg-red-500 text-white">
            Logout
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

// Main Dashboard Layout
const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-transparent text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-11">
        <Navbar />
        <ProfileHeader />
        <Prefile />
        <div className="p-4 bg-gray-800 rounded-md">
          <h3 className="text-3xl text-yellow-200 mb-2">Completed Courses</h3>
          <CourseProgress
            title="Java Code"
            progress={75}
            color="bg-orange-500"
          />
          <CourseProgress
            title="Design Basics"
            progress={65}
            color="bg-blue-500"
          />
          <CourseProgress
            title="Team Building"
            progress={30}
            color="bg-purple-500"
          />
          <CourseProgress
            title="Business Marketing"
            progress={20}
            color="bg-pink-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1">
          <div className="p-4 mt-16 bg-gray-800 rounded-md">
            <h3 className="text-3xl text-orange-200 mb-2">Courses</h3>
            <CourseProgress title="HTML" progress={75} color="bg-orange-500" />
            <CourseProgress title="CSS" progress={65} color="bg-blue-500" />
            <CourseProgress
              title="Python"
              progress={30}
              color="bg-purple-500"
            />
            <CourseProgress
              title="JavaScript"
              progress={20}
              color="bg-pink-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
