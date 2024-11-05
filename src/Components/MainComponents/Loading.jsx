import React from "react";
import Logo from "../../images/Logo.webp";
import { useEffect, useState } from "react";

const Loading = ({ setHomeLoad, setCoursesLoading }) => {
  const [data, setData] = useState(true);

  useEffect(() => {
    // window.addEventListener("load", () => setData(true));

    setTimeout(() => {
      setData(false);
      if (setHomeLoad) setHomeLoad(false);
      else if (setCoursesLoading) setCoursesLoading(false);
    }, 3000);
    return () => {
      window.removeEventListener("load", () => setData(true));
    };
  }, []);

  return (
    data && (
      <div className="bg-[#080c14] h-screen overflow-hidden z-50 w-full fixed top-0 left-0 flex justify-center items-center">
        <img className="loaderLogo w-[17%] " src={Logo} alt="logo" />
      </div>
    )
  );
};

export default Loading;
