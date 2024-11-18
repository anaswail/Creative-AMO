import React, { useContext } from "react";
import { DataContext } from "../../data/data";

// Prefile Component for User Context
const Settings = () => {
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

export default Settings;
