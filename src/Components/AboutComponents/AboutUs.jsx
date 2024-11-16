import React from "react";
import Anas from "../../images/Anas.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-[500px] flex justify-center items-center pt-28 flex-col">
        <h1 className="text-white font-bold text-center text-5xl">About Us</h1>
        <p className="text-white text-center w-3/4 mt-5 leading-8">
          Creative Amo is a dynamic and engaging platform designed to inspire
          and empower users with high-quality educational and creative
          resources. The website includes a variety of sections such as Home,
          where users can explore the platform’s offerings; Courses, featuring
          expertly curated learning tracks; Roadmaps, providing structured
          guides for mastering skills in various fields; Trainers, showcasing
          the best educators and their teaching methods; and About Us,
          highlighting the mission and vision of the platform. Additionally, Log
          In and Sign Up options allow users to personalize their experience,
          while the Course Details page offers in-depth insights into specific
          learning opportunities. The platform integrates seamlessly with tools
          like YouTube to display curated playlists, making it a hub for
          accessible, modern education.
        </p>
      </div>
      <div className="members flex justify-center items-center flex-wrap mt-20 gap-14">
        <div className="member w-[450px] h-44 bg-[#0d0b21] rounded-md flex items-center p-5">
          <div className="image-content rounded-full overflow-hidden w-36 h-36 flex justify-center items-center border-solid border-[3px] border-[#ffac15]">
            <img
              src={Anas}
              alt="Circular Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-context ml-10">
            <h1 className="font-bold text-3xl text-[#ffac15]">Anas Wael</h1>
            <h2 className="text-white text-base mb-8 mt-2">
              Front-end (React) Developer
            </h2>
            <div className="socialMedia flex gap-1 mt-2">
              <a
                href="https://anas-portofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100053090326397"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://wa.me/201050305754"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://github.com/anaswail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a href="mailto:anaswail246@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="member w-[450px] h-44 bg-[#0d0b21] rounded-md flex items-center p-5 ">
          <div className="image-content rounded-full overflow-hidden w-36 h-36 flex justify-center items-center border-solid border-[3px] border-[#ffac15]">
            <img
              src={Anas}
              alt="Circular Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-context ml-10">
            <h1 className="font-bold text-3xl text-[#ffac15]">Anas Wael</h1>
            <h2 className="text-white text-base mb-8 mt-2">
              Front-end (React) Developer
            </h2>
            <div className="socialMedia flex gap-1 mt-2">
              <a
                href="https://anas-portofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://github.com/anaswail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a href="mailto:your-email@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="member w-[450px] h-44 bg-[#0d0b21] rounded-md flex items-center p-5">
          <div className="image-content rounded-full overflow-hidden w-36 h-36 flex justify-center items-center border-solid border-[3px] border-[#ffac15]">
            <img
              src={Anas}
              alt="Circular Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-context ml-10">
            <h1 className="font-bold text-3xl text-[#ffac15]">Anas Wael</h1>
            <h2 className="text-white text-base mb-8 mt-2">
              Front-end (React) Developer
            </h2>
            <div className="socialMedia flex gap-1 mt-2">
              <a
                href="https://anas-portofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://github.com/anaswail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a href="mailto:your-email@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="member w-[450px] h-44 bg-[#0d0b21] rounded-md flex items-center p-5">
          <div className="image-content rounded-full overflow-hidden w-36 h-36 flex justify-center items-center border-solid border-[3px] border-[#ffac15]">
            <img
              src={Anas}
              alt="Circular Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-context ml-10">
            <h1 className="font-bold text-3xl text-[#ffac15]">Anas Wael</h1>
            <h2 className="text-white text-base mb-8 mt-2">
              Front-end (React) Developer
            </h2>
            <div className="socialMedia flex gap-1 mt-2">
              <a
                href="https://anas-portofolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a
                href="https://github.com/anaswail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
              <a href="mailto:your-email@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-white hover:text-[#ffac15] text-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
