import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.webp";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faLaptopCode,
  faUser,
  faX,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../data/data";

const Navbar = ({ Mood }) => {
  const { success } = useContext(DataContext);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  // handle nav hidden
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100 && toggleMenu == false) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // menu bar
  const active = () => {
    setToggleMenu(!toggleMenu);
  };

  // setScroll
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  return (
    <motion.nav
      className="bg-[#0d0b21]  h-36 rounded-bl-full flex justify-around items-center fixed top-0 right-0 z-50 w-full "
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <Link to="/" className="logo flex justify-center items-center ">
        <img src={Logo} alt="Creative AMO" className="w-32 max-md:w-28" />
        <h1 className="text-white font-bold text-2xl max-md:text-xl">
          Creative AMO
        </h1>
      </Link>
      <ul className="p-0 flex list-none max-lg:hidden  ">
        <li className="mx-3">
          <Link to="/" className="text-white hover:text-[#ffac15]">
            Home
          </Link>
        </li>
        <li className="mx-3">
          <Link to="/Courses" className="text-white hover:text-[#ffac15]">
            Courses
          </Link>
        </li>
        <li className="mx-3 group relative ">
          <Link to="/RoadMaps" className="text-white hover:text-[#ffac15] ">
            Road Maps
          </Link>
        </li>
        <li className="mx-3">
          <Link
            to="/Trainers"
            className="text-white hover:text-[#ffac15] group"
          >
            Trainers
          </Link>
        </li>
        <li className="mx-3">
          <Link to="/AboutUs" className="text-white hover:text-[#ffac15]">
            AboutUs
          </Link>
        </li>
      </ul>
      {success ? (
        <Link
          className="hidden lg:flex justify-center items-center w-10 h-10 rounded-full border border-white hover:border-[#ffac15] text-white hover:text-[#ffac15] "
          to="/Prefile"
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      ) : (
        <div className="profile max-lg:hidden">
          <Link to="/LogIn" className="text-[#0d0b21]">
            <button className="bg-white py-2 px-7 mr-5 text-sm rounded-xl hover:bg-[#ffac15] transition-all">
              Login
            </button>
          </Link>

          <Link to="/SignUp" className="text-[#0d0b21]">
            <button className="bg-white py-2 px-7 text-sm rounded-xl hover:bg-[#ffac15] transition-all">
              Sign up
            </button>
          </Link>
        </div>
      )}
      <div className="changeMode inline-block">
        <FontAwesomeIcon
          icon={faSun}
          className=" text-[#ffac15] hover:text-[#e7b454] text-2xl mr-6 cursor-pointer dark:block hidden "
          onClick={() => {
            Mood("light");
          }}
        />
        <FontAwesomeIcon
          icon={faMoon}
          className="text-[#7c75b4] text-2xl mr-6 cursor-pointer hover:text-[#a29bd8] dark:hidden block"
          onClick={() => {
            Mood("dark");
          }}
        />
      </div>
      {/*Toggle Menu*/}
      {toggleMenu ? (
        <div className="mobileMenu h-screen w-96 bg-[#0d0b21] fixed top-0 right-0 flex flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faX}
            className="text-white text-2xl absolute top-2 right-2 cursor-pointer "
            onClick={active}
          />
          {success ? (
            <div className="profile flex justify-center items-center absolute bottom-6 text-center h-12 w-full">
              <Link
                className="flex justify-center items-center w-10 h-10 rounded-full border border-white hover:border-[#ffac15] text-white hover:text-[#ffac15] "
                to="/Prefile"
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          ) : (
            <div className="profile absolute bottom-3 text-center w-full">
              <Link to="/LogIn" className="text-[#0d0b21]">
                <button className="bg-white py-2 px-7 mr-5 text-sm rounded-xl hover:bg-[#ffac15] transition-all">
                  Login
                </button>
              </Link>

              <Link to="/SignUp" className="text-[#0d0b21]">
                <button className="bg-white py-2 px-7 text-sm rounded-xl hover:bg-[#ffac15] transition-all">
                  Sign up
                </button>
              </Link>
            </div>
          )}
          <ul className="p-0 flex list-none flex-col justify-center items-center gap-10 text-2xl ">
            <li className="mx-3">
              <Link to="/" className="text-white hover:text-[#ffac15]">
                Home
              </Link>
            </li>
            <li className="mx-3">
              <Link to="/Courses" className="text-white hover:text-[#ffac15]">
                Courses
              </Link>
            </li>
            <li className="mx-3">
              <Link to="/RoadMaps" className="text-white hover:text-[#ffac15]">
                Road Maps
              </Link>
            </li>
            <li className="mx-3">
              <Link to="/Trainers" className="text-white hover:text-[#ffac15]">
                Trainers
              </Link>
            </li>
            <li className="mx-3">
              <Link to="/AboutUs" className="text-white hover:text-[#ffac15]">
                AboutUs
              </Link>
            </li>
          </ul>

          <Link
            to="/"
            className="logo flex justify-center items-center absolute top-8 left-1/2 -translate-x-1/2 w-full "
          >
            <img src={Logo} alt="Creative AMO" className="w-32" />
            <h1 className="text-white font-bold text-2xl">Creative AMO</h1>
          </Link>
        </div>
      ) : (
        <></>
      )}
      <FontAwesomeIcon
        onClick={active}
        className="text-white cursor-pointer md:text-3xl text-2xl lg:hidden "
        icon={faLaptopCode}
      />
    </motion.nav>
  );
};

export default Navbar;
