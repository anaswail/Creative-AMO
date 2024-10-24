import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";

// Components
import HomeSecondSection from './SubComponents/HomeSecondSection';
import HomePopularCourses from './SubComponents/HomePopularCourses';
import HomeWork from './SubComponents/HomeWork';
import HomeInnovations from './SubComponents/HomeInnovations';

// images
import person from "../images/person.webp";
import trainersIcon from '../images/coach.png';
import vedioIcon from "../images/video-camera.png";
import group from "../images/group.webp";

const Home = () => {
  return (
    <>
    <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-screen flex justify-around items-center pt-28 max-md:flex-col">
        <TextContent />
        <ImageContent />
    </div>

    <div className="secondSection py-20">
      <HomeSecondSection image={group} />
    </div>
    
    <div className="popularCourses flex flex-col mb-16 justify-center items-center h-screen overflow-hidden">
      <HomePopularCourses />
    </div>
    
    <HomeWork />

    <HomeInnovations />
    </>
  )
}

const TextContent = () => {
  return (
    <div className="w-1/2 py-10 h-[70vh] flex flex-col justify-around items-center max-md:w-full ">
            
            <h1 className="text-white text-3xl font-bold w-3/4 max-md:text-center">Unlock your potential with free courses and curated roadmaps to master new skills.</h1>

            <div className="flex gap-5 my-8">
                <Link to="/RoadMaps" className="bg-white text-black py-2 px-4 rounded-lg border-solid border-[2px] border-white hover:bg-transparent hover:text-white ">Are you lost?</Link>
                <img src="./icon.png" alt="" />
                <a className="text-white">Why Creative?</a>
            </div>

            <div className="w-full relative flex justify-around max-md:flex max-md:justify-content max-md:items-center">
                <div className="border-solid border-[2px] border-[#0d0b21] w-[124px] h-[154px] rounded-2xl flex flex-col items-center justify-around bg-[#eee] md:absolute left-1/3 top-[-20px] ">
                    <img className='w-1/3' src={trainersIcon} alt="trainers" />
                    <span className='bg-[#0d0b21] text-white font-bold py-1 px-4 text-xs rounded-md'>+20</span>
                    <p className="text-[#080c14] font-bold text-sm">Trainers</p>
                </div>
                <div className="border-solid border-[2px] border-[#0d0b21] w-[124px] h-[154px] rounded-2xl flex flex-col bg-[#eee] md:absolute right-0 lg:right-1/4 top-[30px] justify-around items-center ">
                    <img className='w-1/3' src={vedioIcon} alt="courses" />
                    <span className='bg-[#0d0b21] text-white font-bold py-1 px-4 text-xs rounded-md'>+10</span>
                    <p className="text-[#080c14] font-bold text-sm">Course</p>
                </div>
            </div>
        </div>
  )
}

const ImageContent = () => {
  return(
    <div className="md:w-1/2 h-[90vh] flex justify-center items-center">
        <img className="w-[400px]" src={person} alt="person" />
    </div>
  )
}


export default Home