import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Course } from "../MainComponents/CourseContext";
import { DataContext } from "../../data/data";
import Cookies from "js-cookie";
import PulseLoader from "react-spinners/PulseLoader";
import replaceImage from "../../images/video.gif";

const SeparateCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="separate-courses">
      <Cards searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
};

const Cards = ({ searchTerm, setSearchTerm }) => {
  const [loading, setLoading] = useState(false);
  const { courses = [], setSelectedCourse, setCourses } = useContext(Course);
  const { url, setSuccess, getYtData } = useContext(DataContext);

  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    if (!Cookies.get("token")) {
      setSuccess(false);
    }

    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/api/v1/courses/get`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setCourses(response.data.courses);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (!courses.length) setLoading(true);
    const loadAllCourses = async () => {
      const coursePromises = courses.flatMap(async (category) => {
        const categoryCourses = Object.values(category)[0] || [];
        const updatedCourses = await Promise.all(
          categoryCourses.map(async (course) => {
            const ytData = await getYtData(course.playListId);
            return {
              ...course,
              image: ytData.image,
              channelTitle: ytData.channelTitle,
            };
          })
        );
        return updatedCourses;
      });

      const resolvedCourses = (await Promise.all(coursePromises)).flat();
      setAllCourses(resolvedCourses);
    };

    loadAllCourses();
  }, [courses]);

  const handleSelectedCourse = (res) => {
    setSelectedCourse(res);
    console.log(res);
  };
  // filter search by title, channel title, instructor and lang
  const filteredCourses = allCourses.filter(
    (course) =>
      (course.title &&
        course.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (course.channelTitle &&
        course.channelTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (course.instructor &&
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (course.lang &&
        course.lang.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (loading == true) {
    return (
      <div className="flex h-screen bg-[#0d0b21] w-full z-50 fixed top-0 left-0 justify-center items-center">
        <PulseLoader color="#ffac15" size={30} margin={4} />
      </div>
    );
  }

  return (
    <div className="cardsContainer">
      <div className="w-full flex justify-center p-5">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 text-xl max-md:text-lg max-md:w-72 w-96 rounded-2xl placeholder:text-sm outline-none mt-6 mb-3 dark:bg-white bg-[#0d0b21] text-white dark:text-[#0d0b21]"
        />
      </div>
      <div className="cards flex justify-center gap-9 items-center mt-10 flex-wrap">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((res, index) => (
            <div
              key={index}
              className="card w-72 bg-[#100d30] h-[400px] rounded-2xl p-4 shadow-xl  border-tr overflow-hidden relative z-10 grid max-md:w-72"
            >
              <div className="image-container">
                <img
                  className="rounded-md w-fit h-fit "
                  loading="lazy"
                  src={res.image || replaceImage}
                  alt={res.channelTitle || res.instructor}
                />
              </div>
              <div className="information my-5 p-1 flex justify-between items-center">
                <span className="bg-[#ffac15] py-1 px-4 rounded-md text-[#0d0b21] text-xs font-semibold truncate w-28">
                  {res.channelTitle || res.instructor}
                </span>
                <span className="bg-[#ffac15] py-1 px-4 rounded-md text-[#0d0b21] text-xs font-semibold">
                  {res.lang}
                </span>
              </div>

              <div className="wrapper flex justify-center">
                <Link
                  className="cta "
                  to={`/course/${res.id}`}
                  onClick={() => {
                    handleSelectedCourse(res);
                    window.scrollTo(0, 0);
                  }}
                >
                  <span>Start Now</span>
                  <span>
                    <svg
                      width="66px"
                      height="43px"
                      viewBox="0 0 66 43"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        id="arrow"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          className="one"
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          className="two"
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                          fill="#FFFFFF"
                        ></path>
                        <path
                          className="three"
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                          fill="#FFFFFF"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-white font-bold text-2xl ">
            No courses found for{" "}
            <span className="text-[#ffac15]">"{searchTerm}"</span>
          </h1>
        )}
      </div>
    </div>
  );
};

async function getYtData(id) {
  const apiKey = "AIzaSyDcx-nZ3fkqEcSF_WXutU82YvatKmBUB6w";
  const url = `https://www.googleapis.com/youtube/v3/playlistItems`;
  const params = {
    part: "snippet",
    maxResults: 1,
    playlistId: id,
    key: apiKey,
  };

  try {
    const res = await axios.get(url, { params });
    const data = res.data;
    if (data.items && data.items.length > 0) {
      const firstVideo = data.items[0].snippet;
      return {
        image: firstVideo.thumbnails.high.url,
        channelTitle: firstVideo.channelTitle,
        length: data.length,
      };
      console.log(data.length);
    }
  } catch (err) {
    console.log("Error fetching YouTube data:", err);
    return {};
  }
}

export default SeparateCourses;
