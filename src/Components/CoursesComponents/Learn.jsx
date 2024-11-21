import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { DataContext } from "../../data/data";
import Cookies from "js-cookie";

const Learn = () => {
  const { playlistId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [allVideos, setAllVideos] = useState([]);
  const { updateCourseProgress } = useContext(DataContext);

  useEffect(() => {
    if (!playlistId) {
      return (
        <div className="flex h-screen bg-[#0d0b21] w-full z-50 fixed top-0 left-0 justify-center items-center">
          <PulseLoader color="#ffac15" size={30} margin={4} />
        </div>
      );
    }

    const fetchData = async () => {
      console.log("Fetching data for playlistId:", playlistId);
      const data = await getYtData(playlistId);
      if (data && data.length > 0) {
        setAllVideos(data);
        setVideoData(data[0]);
      }
    };
    window.scrollTo(0, 0);
    fetchData();
  }, [playlistId]);

  const handleVideoSelect = (index) => {
    setVideoIndex(index);
    updateCourseProgress(Cookies.get("token"), playlistId, index);
    setVideoData(allVideos[index]);
  };

  return (
    <div className="pt-36 w-screen flex flex-col justify-center items-center ">
      {videoData ? (
        <div className="w-[90%] sm:w-[70%] flex flex-col justify-center items-center">
          <div className="relative w-full pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoData.snippet.resourceId.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 flex justify-between w-full">
            <button
              onClick={() => handleVideoSelect(videoIndex - 1)}
              disabled={videoIndex === 0}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
            >
              Previous
            </button>
            <button
              onClick={() => handleVideoSelect(videoIndex + 1)}
              disabled={videoIndex === allVideos.length - 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </div>

          {/* Slider Section */}
          <div className="mt-6 w-full overflow-x-auto bg-gray-800 p-4 rounded-lg">
            <div
              className="flex flex-wrap gap-5 justify-center w-full"
              style={{ direction: "rtl" }}
            >
              {allVideos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => handleVideoSelect(index)}
                  style={{ direction: "rtl" }}
                  className={`cursor-pointer p-2 rounded-lg w-full sm:w-[45%] md:w-[30%] flex gap-5 ${
                    index === videoIndex
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                    loading="lazy"
                    className="w-fit h-14 rounded-md mb-2"
                  />
                  <p className="text-xs">{video.snippet.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen bg-[#0d0b21] w-full z-50 fixed top-0 left-0 justify-center items-center">
          <PulseLoader color="#ffac15" size={30} margin={4} />
        </div>
      )}
    </div>
  );
};

async function getYtData(id) {
  const apiKey = "AIzaSyDcx-nZ3fkqEcSF_WXutU82YvatKmBUB6w";
  const url = `https://www.googleapis.com/youtube/v3/playlistItems`;
  const params = {
    part: "snippet",
    maxResults: 100,
    playlistId: id,
    key: apiKey,
  };

  try {
    const res = await axios.get(url, { params });
    const data = res.data;
    if (data.items && data.items.length > 0) {
      return data.items;
    } else {
      console.log("No items found in the playlist data.");
      return null;
    }
  } catch (err) {
    console.log(
      "Error fetching YouTube data:",
      err.response ? err.response.data : err.message
    );
    return null;
  }
}

export default Learn;
