import React from "react";
import Anas from "../../images/Anas.webp";
import Omar from "../../images/Omar.webp";
import Mohamed from "../../images/Mohamed.webp";
import Maruane from "../../images/Maruane.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Anas Wail",
      role: "Frontend Developer",
      image: Anas,
      socialMedia: {
        portfolio: "https://anas-portofolio.vercel.app/",
        facebook: "https://www.facebook.com/profile.php?id=100053090326397",
        github: "https://github.com/anaswail",
        whatsapp: "https://wa.me/+201050305754",
        email: "anaswail246@gmail.com",
      },
    },
    {
      name: "Marouane Makhlouf",
      role: "MERN Stack Developer",
      image: Maruane,
      socialMedia: {
        portfolio: "https://marouanemakhlouf.github.io/Portfolio/",
        facebook: "https://www.facebook.com/profile.php?id=100080248663458",
        github: "https://github.com/MarouaneMakhlouf",
        whatsapp: "https://wa.me/+212638387499",
        email: "",
      },
    },
    {
      name: "Mohamed Haikal",
      role: "Frontend Developer",
      image: Mohamed,
      socialMedia: {
        portfolio: "https://wa.me/+201093185244",
        facebook: "https://www.facebook.com/mohamed.haikal.129",
        github: "https://github.com/mohamed-haikal",
        whatsapp: "https://wa.me/+201093185244",
        email: "https://wa.me/+201093185244",
      },
    },
    {
      name: "Omar Mahran",
      role: "UI/UX Designer",
      image: Omar,
      socialMedia: {
        portfolio: "https://wa.me/+201284561062",
        facebook:
          "https://www.facebook.com/profile.php?id=100075985174679&mibextid=ZbWKwL",
        whatsapp: "https://wa.me/+201284561062",
        email: "https://wa.me/+201284561062",
      },
    },
  ];
  return (
    <div className="aboutUs">
      <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-[500px] flex justify-center items-center pt-32 flex-col max-md:pt-44 ">
        <h1 className="text-white font-bold text-center text-5xl max-md:text-4xl">
          About Us
        </h1>
        <p className="text-white text-center w-3/4 mt-5 leading-8 max-md:text-base max-md:w-[85%]">
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
        {teamMembers.map((member, index) => {
          return (
            <div
              className="member w-[510px] h-44 max-md:h-fit max-md:w-[85%] bg-[#0d0b21] rounded-md flex items-center p-5 max-md:flex-col max-md:items-center"
              key={index}
            >
              <div className="image-content rounded-full overflow-hidden w-36 h-36 mb-8 flex justify-center items-center border-solid border-[3px] border-[#ffac15]">
                <img
                  src={member.image}
                  alt="Circular Image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-context ml-10 max-md:flex max-md:flex-col max-md:items-center max-md:w-full">
                <h1 className="font-bold text-3xl text-[#ffac15] max-md:truncate max-md:w-full max-md:text-center ">
                  {member.name}
                </h1>
                <h2 className="text-white text-base mb-8 mt-2">
                  {member.role}
                </h2>
                <div className="socialMedia flex gap-1 mt-2 max-md:w-full max-md:justify-center gap-5">
                  <a
                    href={member.socialMedia.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="text-white hover:text-[#ffac15] text-xl"
                    />
                  </a>
                  <a
                    href={member.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-white hover:text-[#ffac15] text-xl"
                    />
                  </a>
                  <a
                    href={member.socialMedia.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-white hover:text-[#ffac15] text-xl"
                    />
                  </a>
                  <a
                    href={member.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-white hover:text-[#ffac15] text-xl"
                    />
                  </a>
                  <a href={member.socialMedia.email}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-white hover:text-[#ffac15] text-xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
