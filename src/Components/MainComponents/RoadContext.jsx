import React, { createContext, useState } from "react";

export const RoadMapContext = createContext();

const RoadContext = ({ children }) => {
  const [roads, setRoads] = useState([]);
  const [selectedRoad, setSelectedRoad] = useState(null);

  return (
    <RoadMapContext.Provider
      value={{ roads, setRoads, selectedRoad, setSelectedRoad }}
    >
      {children}
    </RoadMapContext.Provider>
  );
};

export default RoadContext;
