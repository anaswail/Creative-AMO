import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { DataContext } from "../../data/data";
import profileImage from "../../images/profileImage.webp";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("DashboardLayout");
  }, []);
  return (
    <div className="flex min-h-screen bg-transparent text-white pt-32">
      <Sidebar />
      <main className="flex-1 p-6 space-y-11">
        <ProfileHeader />
        <Outlet />
      </main>
    </div>
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
        <Link
          to="DashboardLayout"
          className="hover:text-yellow-200 text-2xl ml-2 py-3"
        >
          Home
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
    <div className="flex text-center items-center mb-4 mt-4 gap-4 p-4 bg-transparent rounded-md text-orange-200 h-[150px] border-b-[2px] border-white border-solid width-full ">
      <div className="bg-slate-400 rounded-full w-32 h-32 overflow-hidden relative group  ">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="bg-white text-xl cursor-pointer hover:bg-[#0d0b21] hover:text-white text-[#0d0b21] rounded-bl-full p-5 absolute  transition-all duration-300 rounded-t-md rounded-b-md group-hover:top-0 group-hover:right-0 -right-10 -top-10 "
        />
        <img
          src={profileImage}
          alt="Creative AMO"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-base p-2">
        <h2 className="text-3xl font-bold mb-2">
          {userData?.fname && userData?.lname
            ? `Welcome ${userData.fname} ${userData.lname}`
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
