import React, { useContext, useEffect, useState } from "react";
import { RoadMapContext } from "../MainComponents/RoadContext";

const Track = () => {
  const { selectedRoad } = useContext(RoadMapContext);

  if (!selectedRoad) {
    <h1>Loading...</h1>;
  }

  return (
    <div className="track">
      <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-96 flex justify-center items-center pt-28 flex-col">
        <h1 className="text-white font-bold text-center text-5xl">
          {selectedRoad.track}
        </h1>
        <p className="text-white text-center w-1/2 mt-5">
          {selectedRoad.details}
        </p>
      </div>
      <RoadTimeLine selectedRoad={selectedRoad} />
    </div>
  );
};

const RoadTimeLine = ({ selectedRoad }) => {
  return (
    <div className="timeLineContainer">
      {selectedRoad.RoadMap.map((road, index) => {
        const sectionKey = Object.keys(road)[0];
        const sectionData = road[sectionKey];

        return (
          <div
            key={index}
            className={`flex mt-28 justify-between items-center ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div
              className={`text-[#ffac15] p-5 bg-[#0d0b21] w-[40%] text-center ${sectionData[0].design}`}
            >
              <h1 className="font-bold text-2xl my-3">
                {sectionData[0].title}
              </h1>
              <p>{sectionData[0].description}</p>
              <button className="mt-5 bg-white hover:bg-[#ffac15] transition-all font-bold text-[#0d0b21] rounded-full py-2 px-10">
                Let's learn
              </button>
            </div>
            <div
              className={`bg-[#ffac15] py-10 px-5 text-2xl mx-[13%] text-[#0d0b21] rounded-[50%] font-bold relative ${
                index === selectedRoad.RoadMap.length - 1
                  ? ""
                  : "after:content-[''] after:absolute after:top-20 after:left-1/2 after:w-[2px] after:h-40 after:rounded-2xl after:bg-[#ffac15]"
              } `}
            >
              <h1>{sectionData[1].title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Track;
