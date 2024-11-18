import React from "react";
import workTogether from "../../images/LetsWork.webp";

const HomeWork = () => {
  return (
    <div className="homeWork flex justify-between items-center p-20 w-full">
      <div className="text-content w-[55%] ">
        <h1 className="dark:text-white text-black text-5xl leading-[60px] mb-7">
          Looking to build a responsive, mobile-friendly website?
        </h1>

        <h2 className="dark:text-white text-black text-4xl mb-7">
          Whether it's for your business, portfolio, or e-commerce, I can help
          you create a custom website that looks great on all devices
        </h2>
        <a
          href="https://wa.link/up4a16"
          target="_blank"
          className="dark:text-white text-black text-2xl border-solid border-[2px] border-black dark:border-white hover:bg-black dark:hover:bg-white transition-all hover:text-white dark:hover:text-[#0d0b21] rounded-xl py-2 px-6 "
        >
          <button>Let's work together</button>
        </a>
      </div>
      <div className="image-content w-1/3">
        <img
          src={workTogether}
          alt="work together"
          className="w-full rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default HomeWork;
