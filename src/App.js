import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import Logo from "./images/Logo.webp"

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Courses from './Components/Courses';
import RoadMaps from './Components/RoadMaps';
import Trainers from './Components/Trainers';
import LogIn from './Components/LogIn'; 
import Erorr from './Components/Erorr';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    window.addEventListener("load", ()=>{
      setLoading(true);
    })
      setTimeout(() => {
         setLoading(false)
      }, 3000);
  }, [])
  return (
    <div className="App bg-[#080c14] overflow-x-hidden">
        <BrowserRouter>
        <Navbar />

        {
          loading ? 
          <div className='bg-[#080c14] h-screen overflow-hidden z-50 w-full fixed top-0 left-0 flex justify-center items-center'>
              {/* <ScaleLoader
            color="#6356E5"
            height={110}
            margin={10}
            width={5}
          />  */}
          <img className='loaderLogo w-[17%] ' src={Logo} alt="logo" />
          </div>
          :
          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Courses" element={<Courses />} />
                <Route path="/RoadMaps" element={<RoadMaps />} />
                <Route path="/Trainers" element={<Trainers />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="*" element={<Erorr /> }/>
            </Routes>

        }
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
