import React, { createContext, useState, useEffect } from "react";
import profileImage from "../../images/profileImage.webp";

export const handleChangedData = createContext();

const ChangedDataContext = ({ children }) => {
  // Initialize the state with the image from localStorage if it exists, otherwise use the default image
  const [changedImage, setChangedImage] = useState(
    localStorage.getItem("changedImage") || profileImage
  );

  // Save the image to localStorage whenever it changes
  useEffect(() => {
    if (changedImage) {
      localStorage.setItem("changedImage", changedImage);
    }
  }, [changedImage]);

  return (
    <handleChangedData.Provider value={{ setChangedImage, changedImage }}>
      {children}
    </handleChangedData.Provider>
  );
};

export default ChangedDataContext;
