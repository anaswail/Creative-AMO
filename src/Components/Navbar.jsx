import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/Logo.webp";
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faX } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const {scrollY} = useScroll();
  const [hidden, setHidden] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest)=>{
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 100 && toggleMenu == false) {
      setHidden(true);
    }
    else{
      setHidden(false)
    }
  })

  const active = ()=>{
    setToggleMenu(!toggleMenu)
  }

  return (
    <motion.nav 
    className='bg-[#0d0b21]  h-36 rounded-bl-full flex justify-around items-center fixed top-0 right-0 z-50 w-full '
      variants={{
        visible: { y:0 },
        hidden: { y:"-100%"}
      }}
      animate={hidden? "hidden": "visible"}
      transition={{duration: 0.35, ease: "easeInOut"}}
    >
      <a href='/' className="logo flex justify-center items-center ">
        <img src={Logo} alt="Creative AMO" className='w-32 max-md:w-28' />
        <h1 className='text-white font-bold text-2xl max-md:text-xl'>Creative AMO</h1>
      </a>
      <ul className='p-0 flex list-none max-lg:hidden  ' >
        <li className='mx-3'>
          <Link to="/" className='text-white hover:text-[#ffac15]'>Home</Link>
        </li>
        <li className='mx-3'>
          <Link to="/Courses" className='text-white hover:text-[#ffac15]'>Courses</Link>
        </li>
        <li className='mx-3'>
          <Link to="/RoadMaps" className='text-white hover:text-[#ffac15]'>Road Maps</Link>
        </li>
        <li className='mx-3'>
          <Link to="/Trainers" className='text-white hover:text-[#ffac15]'>Trainers</Link>
        </li>
        <li className='mx-3'>
          <Link to="/AboutUs" className='text-white hover:text-[#ffac15]'>AboutUs</Link>
        </li>
        
      </ul>
      <div className="profile max-lg:hidden">
            <Link to="/LogIn" className='text-[#0d0b21]'>
              <button className='bg-white py-2 px-7 mr-5 text-sm rounded-xl hover:bg-[#ffac15] transition-all'>Login</button>
           </Link>
        
           <Link to="/SignUp" className='text-[#0d0b21]'>
              <button className='bg-white py-2 px-7 text-sm rounded-xl hover:bg-[#ffac15] transition-all'>Sign up</button>
           </Link>
      </div>

      {/*Toggle Menu*/}
      {
        toggleMenu? 
        <div className="mobileMenu h-screen w-96 bg-[#0d0b21] fixed top-0 right-0 flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faX} className="text-white text-2xl absolute top-2 right-2 cursor-pointer " onClick={active} />
          <div className="profile absolute bottom-3 text-center w-full">
                <a href="/LogIn" className='text-[#0d0b21]'>
                  <button className='bg-white py-2 px-7 mr-5 text-sm rounded-xl hover:bg-[#ffac15] transition-all'>Login</button>
              </a>
            
              <a href="/SignUp" className='text-[#0d0b21]'>
                  <button className='bg-white py-2 px-7 text-sm rounded-xl hover:bg-[#ffac15] transition-all'>Sign up</button>
              </a>
          </div>
          <ul className='p-0 flex list-none flex-col justify-center items-center gap-10 text-2xl ' >
            <li className='mx-3'>
              <a href="/" className='text-white hover:text-[#ffac15]'>Home</a>
            </li>
            <li className='mx-3'>
              <a href="/Courses" className='text-white hover:text-[#ffac15]'>Courses</a>
            </li>
            <li className='mx-3'>
              <a href="/RoadMaps" className='text-white hover:text-[#ffac15]'>Road Maps</a>
            </li>
            <li className='mx-3'>
              <a href="/Trainers" className='text-white hover:text-[#ffac15]'>Trainers</a>
            </li>
            <li className='mx-3'>
              <a href="/AboutUs" className='text-white hover:text-[#ffac15]'>AboutUs</a>
            </li>
            
          </ul>

          <a href='/' className="logo flex justify-center items-center absolute top-8 left-1/2 -translate-x-1/2 w-full ">
            <img src={Logo} alt="Creative AMO" className='w-32' />
            <h1 className='text-white font-bold text-2xl'>Creative AMO</h1>
          </a>
        </div>
        :
        console.log("hello")
      }
      <FontAwesomeIcon onClick={active} className='text-white cursor-pointer md:text-3xl text-2xl lg:hidden ' icon={faLaptopCode} />

    </motion.nav>
  )
}

export default Navbar