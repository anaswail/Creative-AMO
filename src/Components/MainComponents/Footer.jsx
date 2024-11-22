import React from "react";
import logo from "../../images/Logo.webp";

const Footer = () => {
  return (
    <div className="bg-[#0d0b21] mt-36 p-0 md:max-h-screen w-full flex  ">
      <div className="tech-container flex flex-col justify-center w-full md:max-h-screen">
        <div className="tech-columns flex flex-col mx-auto my-5 p-12 max-w-[1200px] w-[90%] relative items-center ">
          <div className="first-co flex flex-wrap justify-between">
            {/* Motivational Cards Section */}
            <div className="card-container flex flex-wrap gap-6 justify-start w-1/2 max-md:w-full">
              {[
                {
                  title: "Innovate Every Day",
                  description:
                    "Technology is the canvas of the modern age. Create, experiment, and innovate!",
                  bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
                },
                {
                  title: "Keep Learning",
                  description:
                    "Every line of code brings you closer to your next masterpiece.",
                  bgColor: "bg-gradient-to-r from-green-400 to-blue-500",
                },
                {
                  title: "Teamwork Wins",
                  description:
                    "The best tech ideas are built when minds come together.",
                  bgColor: "bg-gradient-to-r from-orange-400 to-red-500",
                },
                {
                  title: "Stay Curious",
                  description:
                    "In technology, curiosity isn’t a habit; it’s a superpower.",
                  bgColor: "bg-gradient-to-r from-indigo-400 to-teal-500",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className={`${card.bgColor} text-white p-6 rounded-lg shadow-lg w-64 text-center max-md:w-[90%]`}
                >
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="logo-container flex flex-col items-center justify-center md:absolute md:bottom-32 md:right-0 w-1/4 max-md:w-3/4 max-md:mt-3">
            <img className="w-full" src={logo} alt="logo" />
            <h1 className="text-white text-4xl font-bold absolute bottom-0 max-md:text-3xl ">
              Creative AMO
            </h1>
          </div>
        </div>

        {/* Footer Section */}
        <div className="footer flex justify-between p-5 bg-[#f39c12] mx-auto w-full border-t-4 border-black text-white">
          <div className="brand-logo max-md:hidden">Creative AMO</div>
          <div className="footer-content flex items-center">
            <div className="social-icons flex justify-around gap-5 text-lg max-md:text-base">
              <a href="/https://www.facebook.com/profile.php?id=100053090326397">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="/#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/https://github.com/anaswail">
                <i className="fab fa-github"></i>
              </a>
              <a href="/https://wa.me/+201050305754">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div className="footer-links flex flex-wrap">
            <a href="/#" className="text-white no-underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
