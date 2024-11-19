import React, { useContext } from "react";
import { DataContext } from "../../data/data";
import Swal from "sweetalert2";
import PulseLoader from "react-spinners/PulseLoader";

const Settings = () => {
  const { userData, logout } = useContext(DataContext);

  const handleDelete = () => {
    const swalWithTailwindButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-[#0d0b21] text-white font-bold py-2 px-4 rounded transition-all hover:bg-green-600",
        cancelButton:
          "bg-[#0d0b21] text-white font-bold py-2 px-4 mx-5 transition-all rounded hover:bg-red-600",
      },
      buttonsStyling: false, // Disable default SweetAlert2 styling
    });

    swalWithTailwindButtons
      .fire({
        title: "Are you sure?",
        text: "We are happy to have you with us!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Logout!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          logout();
          swalWithTailwindButtons.fire({
            title: "Deleted!",
            text: "Your account has been signed out 😔",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithTailwindButtons.fire({
            title: "Cancelled",
            text: "Your account is safe 😄",
            icon: "error",
          });
        }
      });
  };

  const settingsData = [
    { title: "First Name", value: userData?.fname || "" },
    { title: "Last Name", value: userData?.lname || "" },
    { title: "Email", value: userData?.email || "" },
    { title: "Password", value: userData?.password || "" },
  ];

  return (
    <div className="mt-36">
      {userData ? (
        <>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {settingsData.map((setting, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 shadow-md rounded-md overflow-hidden "
              >
                <h1 className="font-bold text-lg bg-[#ffac15] w-36 h-14 flex justify-center items-center text-center">
                  {setting.title}
                </h1>
                <input
                  type="text"
                  value={setting.value}
                  readOnly
                  className="flex-grow text-black font-medium text-lg p-2 outline-none h-14 w-72"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleDelete}
            className="py-2 px-6 bg-red-500 text-white font-bold rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <div className="flex h-screen bg-[#0d0b21] w-full fixed top-0 left-0 justify-center items-center">
          <PulseLoader color="#ffac15" size={15} margin={2} />
        </div>
      )}
    </div>
  );
};

export default Settings;
