import React, { useContext } from "react";
import { RoadMapContext } from "../MainComponents/RoadContext";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";

const Track = () => {
  const { selectedRoad } = useContext(RoadMapContext);

  // Return a loading message if selectedRoad is null or undefined
  if (!selectedRoad) {
    <div className="flex h-screen bg-[#0d0b21] w-full fixed top-0 left-0 justify-center items-center z-50">
      <PulseLoader color="#ffac15" size={30} margin={4} />
    </div>;
  }

  return (
    <div className="track">
      <div className="mainSection bg-[#100d30] w-full rounded-bl-[30%] md:rounded-bl-[50%] pb-5 max-md:pt-44 min-h-96 flex justify-center items-center pt-36 flex-col">
        <h1 className="text-white font-bold text-center text-5xl max-md:text-4xl">
          {selectedRoad.track || "No Track Data"}
        </h1>
        <p className="text-white text-center w-1/2 mt-5 max-md:w-[80%] max-md:text-base">
          {selectedRoad.details || "No Details Available"}
        </p>
      </div>
      <RoadTimeLine selectedRoad={selectedRoad} />
    </div>
  );
};

const RoadTimeLine = ({ selectedRoad }) => {
  return (
    <div className="timeLineContainer">
      {selectedRoad.RoadMap?.map((road, index) => {
        const sectionKey = Object.keys(road)[0];
        const sectionData = road[sectionKey];

        return (
          <div
            key={index}
            className={`flex mt-28 justify-between items-center max-md:flex-col-reverse ${
              index % 2 === 0 ? "" : "flex-row-reverse max-md:flex-col-reverse"
            }`}
          >
            <div
              className={`text-[#ffac15] p-5 bg-[#100d30] w-[40%] text-center max-md:w-[85%] max-md:rounded-md  ${
                sectionData?.[0]?.design || "rounded-lg"
              }`}
            >
              <h1 className="font-bold text-2xl my-3">
                {sectionData?.[0]?.title || "No Title"}
              </h1>
              <p>{sectionData?.[0]?.description || "No Description"}</p>
              <button className="mt-5 bg-white hover:bg-[#ffac15] transition-all font-bold text-[#0d0b21] rounded-full py-2 px-10">
                <Link to="/Courses/SeparateCourses">Let's learn</Link>
              </button>
            </div>
            <div
              className={`bg-[#ffac15] py-10 px-5 text-2xl max-md:text-xl max-md:py-7 max-md:px-3 mx-[13%] text-[#0d0b21] rounded-[50%] font-bold relative max-md:mb-20 ${
                index === selectedRoad.RoadMap.length - 1
                  ? ""
                  : "after:content-[''] after:absolute after:top-20 after:left-1/2 after:w-[2px] after:h-40 max-md:after:h-20 after:rounded-2xl after:bg-[#ffac15]"
              }`}
            >
              <h1>{sectionData?.[1]?.title || "No Section Title"}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Track;
