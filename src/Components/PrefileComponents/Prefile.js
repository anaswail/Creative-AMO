import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../data/data";
import profileImage from "../../images/profileImage.webp";
import profileImage2 from "../../images/profileImage2.webp";
import profileImage3 from "../../images/profileImage3.webp";
import profileImage4 from "../../images/profileImage4.webp";
import profileImage5 from "../../images/profileImage5.webp";
import profileImage6 from "../../images/profileImage6.webp";
import profileImage7 from "../../images/profileImage7.webp";
import profileImage8 from "../../images/profileImage8.webp";
import profileImage9 from "../../images/profileImage9.webp";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleChangedData } from "../MainComponents/ChangedDataContext";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import ProfileCourses from "./ProfileCourses";

const MainProfile = () => {
  // Check if there's a saved image in localStorage
  const savedImage = localStorage.getItem("profileImage") || profileImage;
  const [image, setImage] = useState(savedImage);

  useEffect(() => {
    // Save the selected image to localStorage whenever it changes
    localStorage.setItem("profileImage", image);
  }, [image]);

  return (
    <div className="flex min-h-screen bg-transparent text-white pt-32 relative">
      <Sidebar />
      <main className="flex-1 p-6 space-y-11">
        <ProfileHeader image={image} setImage={setImage} />
        <Outlet />
      </main>
    </div>
  );
};

// Sidebar Component

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  const handleShowMenu = () => {
    setMenu(!menu);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    const handleProfileHome = () => {
      if (
        location.pathname === "/Profile/DashboardLayout" ||
        location.pathname === "/Profile"
      ) {
        navigate("/Profile/Profile-Courses");
      }
    };
    handleProfileHome();
  }, [location, navigate]);

  return (
    <>
      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={handleShowMenu}
        className={`fixed md:hidden left-0 top-60 text-2xl text-[#ffac15] bg-[#0d0b21] rounded-r-full p-3 hover:text-white transition-all pl-0 cursor-pointer ${
          menu ? "hidden" : "block"
        } transition-all`}
        aria-label="Open menu"
      />
      <aside
        className={`w-64 bg-transparent max-md:bg-[#0d0b21] dark:text-gray-400 text-[#0d0b21] max-md:text-white flex flex-col p-2 mt-20 max-md:fixed sticky max-md:z-40 h-[calc(100vh-4rem)] transition-all max-md:top-20  ${
          menu ? "" : " overflow-hidden max-md:hidden"
        } t`}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={handleShowMenu}
          className="absolute -right-10 top-8 text-2xl text-[#ffac15] bg-[#0d0b21] rounded-r-full p-3 hover:text-white transition-all pl-0 cursor-pointer md:hidden"
          aria-label="Close menu"
        />
        <div
          className={`text-2xl p-2 text-center font-bold mb-4 dark:text-neutral-400 dark:hover:text-yellow-200 rounded-t-2xl dark:bg-slate-500 bg-slate-600 hover:text-[#6356e3]   ${
            menu ? "" : "max-md:hidden"
          }  transition-all`}
        >
          Creative AMO
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            to="DashboardLayout"
            className="dark:hover:text-yellow-200 hover:text-[#6356e3] text-2xl ml-2 py-3"
            onClick={scrollToTop}
          >
            Home
          </Link>

          <Link
            to="Profile-Courses"
            className="dark:hover:text-yellow-200 hover:text-[#6356e3] text-2xl ml-2 py-3"
            onCanPlay={scrollToTop}
          >
            Courses
          </Link>
          <Link
            to="Settings"
            className="dark:hover:text-yellow-200 hover:text-[#6356e3] text-2xl py-3 ml-2 block"
            onClick={scrollToTop}
          >
            Settings & information
          </Link>
        </nav>
      </aside>
    </>
  );
};

const Images = ({ hiddenCase, setHiddenCase, setImage }) => {
  const { setChangedImage } = useContext(handleChangedData);
  const imagesList = [
    profileImage,
    profileImage2,
    profileImage3,
    profileImage4,
    profileImage5,
    profileImage6,
    profileImage7,
    profileImage8,
    profileImage9,
  ];
  const [selectedImage, setSelectedImage] = useState(profileImage);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleImageDelete = () => {
    setHiddenCase(true);
    setSelectedImage("");
  };

  const handleChangeImage = () => {
    setImage(selectedImage);
    setHiddenCase(true);
    setChangedImage(selectedImage);
  };

  return (
    <div
      className={`bg-white rounded-md p-8 grid grid-cols-3 gap-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-sm:w-[90%] ${
        hiddenCase ? "hidden" : ""
      }`}
    >
      {imagesList.map((image, index) => (
        <div
          key={index}
          className={`bg-slate-400 rounded-full w-32 h-32 overflow-hidden image max-md:w-20 max-md:h-20 ${
            selectedImage === image ? "border-4 border-[#ffac15]" : ""
          }`}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            loading="lazy"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
      <div className="btns flex gap-2 w-full mt-4">
        <button
          className="bg-[#0d0b21] p-2 rounded-md text-white w-72 hover:bg-green-600 transition-all"
          onClick={handleChangeImage}
        >
          Change Image
        </button>
        <button
          className="bg-[#6356e3] p-2 rounded-md text-white w-32 hover:bg-red-600 transition-all"
          onClick={handleImageDelete}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// Profile Header Component
const ProfileHeader = ({ image, setImage }) => {
  const { userData } = useContext(DataContext);
  const location = useLocation();
  const [hiddenCase, setHiddenCase] = useState(true);

  const handleOnClick = () => {
    setHiddenCase(!hiddenCase); // Toggle the hiddenCase state
  };

  return (
    <div className="flex text-center items-center mb-4 mt-4 gap-4 p-4 bg-transparent rounded-md dark:text-orange-200 text-[#0d0b21]  h-[150px] border-b-[2px] border-white border-solid width-full ">
      <div className="bg-slate-400 rounded-full w-32 h-32 overflow-hidden relative group max-sm:w-20 max-sm:h-20">
        {/* Pass hiddenCase as a prop to Images component */}
        <Images
          hiddenCase={hiddenCase}
          setHiddenCase={setHiddenCase}
          setImage={setImage}
          image={image}
        />

        {/* Only render icon in Profile/Settings path */}
        {location.pathname === "/Profile/Settings" && (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={handleOnClick} // Call handleOnClick when clicked
            className="bg-white text-xl cursor-pointer hover:bg-[#0d0b21] hover:text-white text-[#0d0b21] rounded-bl-full p-5 absolute transition-all duration-300 rounded-t-md rounded-b-md group-hover:top-0 group-hover:right-0 -right-10 -top-10 max-md:text-base max-md:p-2"
          />
        )}

        {/* Profile Image */}
        <img
          src={image}
          loading="lazy"
          alt="Creative AMO"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User information */}
      <div className="text-base p-2">
        <h2 className="text-3xl font-bold mb-2 max-sm:text-xl ">
          {userData?.fname && userData?.lname
            ? `Welcome ${userData.fname} ${userData.lname}`
            : "Creative User"}
        </h2>
        <p className=" mb-2 max-sm:text-xs ">
          Email:{" "}
          {userData?.email ? `${userData.email}` : "anaswail246@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default MainProfile;
