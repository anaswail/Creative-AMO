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

const MainProfile = () => {
  const navigate = useNavigate();
  // Check if there's a saved image in localStorage
  const savedImage = localStorage.getItem("profileImage") || profileImage;
  const [image, setImage] = useState(savedImage);

  useEffect(() => {
    navigate("DashboardLayout");
  }, []);

  useEffect(() => {
    // Save the selected image to localStorage whenever it changes
    localStorage.setItem("profileImage", image);
  }, [image]);

  return (
    <div className="flex min-h-screen bg-transparent text-white pt-32">
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
          Settings & information
        </Link>
      </nav>
    </aside>
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
      className={`bg-white rounded-md p-8 grid grid-cols-3 gap-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${
        hiddenCase ? "hidden" : ""
      }`}
    >
      {imagesList.map((image, index) => (
        <div
          key={index}
          className={`bg-slate-400 rounded-full w-32 h-32 overflow-hidden image ${
            selectedImage === image ? "border-4 border-[#ffac15]" : ""
          }`}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        </div>
      ))}
      <div className="btns flex gap-2 w-full mt-4">
        <button
          className="bg-[#0d0b21] p-2 rounded-md text-white w-72 hover:bg-green-600 transition-all"
          onClick={handleChangeImage} // Add your logic here
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
    <div className="flex text-center items-center mb-4 mt-4 gap-4 p-4 bg-transparent rounded-md text-orange-200 h-[150px] border-b-[2px] border-white border-solid width-full ">
      <div className="bg-slate-400 rounded-full w-32 h-32 overflow-hidden relative group">
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
            className="bg-white text-xl cursor-pointer hover:bg-[#0d0b21] hover:text-white text-[#0d0b21] rounded-bl-full p-5 absolute transition-all duration-300 rounded-t-md rounded-b-md group-hover:top-0 group-hover:right-0 -right-10 -top-10"
          />
        )}

        {/* Profile Image */}
        <img
          src={image}
          alt="Creative AMO"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User information */}
      <div className="text-base p-2">
        <h2 className="text-3xl font-bold mb-2">
          {userData?.fname && userData?.lname
            ? `Welcome ${userData.fname} ${userData.lname}`
            : "Creative User"}
        </h2>
        <p className="font-light mb-2">
          Email:{" "}
          {userData?.email ? `${userData.email}` : "anaswail246@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default MainProfile;
