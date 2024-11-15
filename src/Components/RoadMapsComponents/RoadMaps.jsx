import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RoadMapContext } from "../MainComponents/RoadContext";

const RoadMaps = () => {
  const [search, setSearch] = useState("");
  const [filteredRoad, setFilteredRoad] = useState([]);
  const {
    roads = [],
    setRoads,
    setSelectedRoad,
    selectedRoad,
  } = useContext(RoadMapContext);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("/RoadMap.json");
        setRoads(response.data);
        setFilteredRoad(response.data);
      } catch (error) {
        console.error("Error fetching the road maps:", error);
      }
    };

    fetchTracks();
  }, []);

  useEffect(() => {
    if (!roads.length) return;

    const filteredRoadMaps = roads.filter((Road) =>
      Road.track.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredRoad(filteredRoadMaps);
  }, [search]);

  const handleSelectedTrack = (track) => {
    setSelectedRoad(track);
    window.scrollTo(0, 0);
  };

  return (
    <div className="roadMaps">
      <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-96 flex justify-center items-center pt-28 flex-col">
        <h1 className="text-white font-bold text-center text-5xl">Road Maps</h1>
        <p className="text-white text-center w-1/2 mt-5">
          Our Road Maps: Comprehensive Guides to Help You Navigate Your Learning
          Path and Master Various Tracks, Including Web Design, Web Development,
          Graphic Design, and More.
        </p>
      </div>
      {/* Search Bar */}
      <div className="searchBar w-full text-center my-10">
        <input
          className="p-3 text-xl w-96 rounded-2xl placeholder:text-sm outline-none mt-6 mb-3 dark:bg-white bg-[#0d0b21] text-white dark:text-[#0d0b21]"
          type="text"
          placeholder="Search for the tracks..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="RoadSections p-5 flex flex-wrap justify-center gap-6 items-center">
        {filteredRoad.map((track, index) => (
          <Link
            key={index}
            to={`/RoadMaps/${index}`}
            onClick={() => {
              handleSelectedTrack(track);
            }}
            className="frontRoad cursor-pointer hover:shadow-md hover:bg-[#17143a] transition-all bg-[#0d0b21] p-5 flex items-center rounded-lg justify-between h-32 w-96"
          >
            <img src={track.image} alt={track.track} className="w-1/4" />
            <h1 className="text-white text-xl w-[65%] truncate">
              {track.track}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoadMaps;
