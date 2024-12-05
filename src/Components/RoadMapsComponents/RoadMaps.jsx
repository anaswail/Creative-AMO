import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RoadMapContext } from "../MainComponents/RoadContext";
import PulseLoader from "react-spinners/PulseLoader";

const RoadMaps = () => {
  const [search, setSearch] = useState("");
  const [filteredRoad, setFilteredRoad] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    roads = [],
    setRoads,
    setSelectedRoad,
    selectedRoad,
  } = useContext(RoadMapContext);

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/RoadMap.json");
        setRoads(response.data);
        setFilteredRoad(response.data);
      } catch (error) {
        console.error("Error fetching the road maps:", error);
      } finally {
        setLoading(false);
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

  if (loading === true) {
    return (
      <div className="flex h-screen bg-[#0d0b21] w-full z-50 fixed top-0 left-0 justify-center items-center">
        <PulseLoader color="#ffac15" size={30} margin={4} />
      </div>
    );
  }

  return (
    <div className="roadMaps">
      <div className="mainSection bg-[#100d30] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-96 max-md:pt-24 flex justify-center items-center pt-28 flex-col">
        <h1 className="text-white font-bold text-center text-5xl max-md:text-4xl">
          Road Maps
        </h1>
        <p className="text-white text-center w-1/2 max-md:w-3/4 mt-5">
          Our Road Maps: Comprehensive Guides to Help You Navigate Your Learning
          Path and Master Various Tracks, Including Web Design, Web Development,
          Graphic Design, and More.
        </p>
      </div>
      {/* Search Bar */}
      <div className="searchBar w-full text-center my-10">
        <input
          className="p-3 text-xl max-md:text-lg max-md:w-72 w-96 rounded-2xl placeholder:text-sm outline-none mt-6 mb-3 dark:bg-white bg-[#0d0b21] text-white dark:text-[#0d0b21]"
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
            className="frontRoad cursor-pointer hover:shadow-md hover:bg-[#0d0b21] transition-all bg-[#100d30] p-5 flex items-center rounded-lg justify-between h-32 w-96 max-md:w-80"
          >
            <img src={track.image} alt={track.track} className="w-1/4" />
            <h1 className="text-white text-xl max-md:text-lg w-[65%] truncate">
              {track.track}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RoadMaps;
