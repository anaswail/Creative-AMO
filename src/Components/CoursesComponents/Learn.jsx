import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Learn = () => {
  const { playlistId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [videoIndex, setVideoIndex] = useState(0); 
  const [allVideos, setAllVideos] = useState([]); 

  useEffect(() => {
    if (!playlistId) {
      console.log("No valid playlistId provided.");
      return;
    }

    const fetchData = async () => {
      console.log("Fetching data for playlistId:", playlistId);
      const data = await getYtData(playlistId);
      if (data && data.length > 0) {
        setAllVideos(data); 
        setVideoData(data[videoIndex]); 
      }
    };

    fetchData();
  }, [playlistId]);  

  const handleNextVideo = () => {
    if (videoIndex < allVideos.length - 1) {
      setVideoIndex(videoIndex + 1);
      setVideoData(allVideos[videoIndex + 1]);
    }
  };

  const handlePreviousVideo = () => {
    if (videoIndex > 0) {
      setVideoIndex(videoIndex - 1);
      setVideoData(allVideos[videoIndex - 1]); 
    }
  };

  return (
    <div className="pt-36 w-screen flex justify-center items-start">
  {videoData ? (
    <div className="w-[90%] sm:w-[70%] flex flex-col justify-center items-start">
      <h3>{videoData.snippet.channelTitle}</h3>
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
          onClick={handlePreviousVideo} 
          disabled={videoIndex === 0} 
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <button 
          onClick={handleNextVideo} 
          disabled={videoIndex === allVideos.length - 1} 
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <p className="text-3xl text-white text-center">Loading...</p> 
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
    console.log("Error fetching YouTube data:", err.response ? err.response.data : err.message);
    return null;
  }
}

export default Learn;
 