import React from 'react';
import workTogether from '../../images/LetsWork.webp';
import { Link } from 'react-router-dom';
 

const HomeWork = () => {
  return (
    <div className="homeWork flex justify-between items-center p-20 w-full">
        <div className="text-content w-[55%] ">
            <h1 className='text-white text-5xl leading-[60px] mb-7'>Looking to build a responsive, mobile-friendly website?</h1>

            <h2 className='text-white text-4xl mb-7'>Whether it's for your business, portfolio, or e-commerce, I can help you create a custom website that looks great on all devices</h2>
            <Link className='text-white text-2xl border-solid border-[2px] border-white hover:bg-white transition-all hover:text-[#0d0b21] rounded-xl py-2 px-6 '>
                <button>Let's work together</button>
            </Link>
        </div>
        <div className="image-content w-1/3">
            <img src={workTogether} alt="work together" className="w-full rounded-[40px]" />
        </div>
    </div>
  )
}

export default HomeWork