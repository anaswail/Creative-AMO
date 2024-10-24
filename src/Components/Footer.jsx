import React from 'react'
import { Link } from 'react-router-dom'; 
import logo from '../images/Logo.webp'

const Footer = () => {
  return (

<div className="bg-[#0d0b21] mt-36 p-0 min-h-screen w-full flex ">
    <div className="tech-container flex flex-col justify-center w-full min-h-screen">
        <div className="tech-columns flex flex-col mx-auto my-5 p-12 max-w-[1200px] w-[90%] relative">

        <div className="first-co flex">
            <div className="tech-section flex flex-col items-center mb-5">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Languages</h3>
              <ul className="text-[#92989e] list-none mr-4">
                <a href="/python"><li className="text-white">Python</li></a>
                <a href="/java"><li className="text-white">Java</li></a>
                <a href="/c++"><li className="text-white">C++</li></a>
                <a href="/c-programming"><li className="text-white">C programming</li></a>
                <a href="/c-sharp"><li className="text-white">C#</li></a>
                <a href="/php"><li className="text-white">PHP</li></a>
                <a href="/r"><li className="text-white">R</li></a>
                <a href="/go"><li className="text-white">Go</li></a>
              </ul>
            </div>

            {/* Web Technologies Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Web Technologies</h3>
              <ul className="text-[#92989e] list-none m-4">
                <a href="/html"><li className="text-white">HTML</li></a>
                <a href="/css"><li className="text-white">CSS</li></a>
                <a href="/javascript"><li className="text-white">JavaScript</li></a>
                <a href="/react"><li className="text-white">ReactJS</li></a>
                <a href="/bootstrap"><li className="text-white">Bootstrap</li></a>
                <a href="/angular"><li className="text-white">AngularJS</li></a>
                <a href="/nodejs"><li className="text-white">Node.js</li></a>
                <a href="/typescript"><li className="text-white">TypeScript</li></a>
              </ul>
            </div>

            {/* Database Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Database</h3>
              <ul className="text-[#92989e] list-none mb-4">
                <a href="/sql"><li className="text-white">SQL</li></a>
                <a href="/mysql"><li className="text-white">MySQL</li></a>
                <a href="/dbms"><li className="text-white">DBMS</li></a>
                <a href="/mongodb"><li className="text-white">MongoDB</li></a>
                <a href="/sqlite"><li className="text-white">SQLite</li></a>
                <a href="/plsql"><li className="text-white">PL/SQL</li></a>
                <a href="/postgresql"><li className="text-white">PostgreSQL</li></a>
                <a href="/excel"><li className="text-white">Excel</li></a>
              </ul>
            </div>

            {/* Editors Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Editors</h3>
              <ul className="text-[#92989e] list-none mb-4">
                <a href="/online-sql"><li className="text-white">Online SQL</li></a>
                <a href="/online-html"><li className="text-white">Online HTML</li></a>
                <a href="/online-css"><li className="text-white">Online CSS</li></a>
                <a href="/online-javascript"><li className="text-white">Online JavaScript</li></a>
                <a href="/online-latex"><li className="text-white">Online LaTeX</li></a>
                <a href="/online-tex"><li className="text-white">Online TEX</li></a>
                <a href="/online-mathml"><li className="text-white">Online MathML</li></a>
                <a href="/online-markdown"><li className="text-white">Online Markdown</li></a>
              </ul>
            </div>
          </div>

          <div className="second-co flex">
            {/* Trending Technologies Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Trending Technologies</h3>
              <ul className="text-[#92989e] list-none mb-4">
                <a href="/cloud-computing"><li className="text-white">Cloud Computing</li></a>
                <a href="/aws"><li className="text-white">Amazon Web Services</li></a>
                <a href="/azure"><li className="text-white">Microsoft Azure</li></a>
                <a href="/git"><li className="text-white">Git</li></a>
                <a href="/ethical-hacking"><li className="text-white">Ethical Hacking</li></a>
                <a href="/docker"><li className="text-white">Docker</li></a>
                <a href="/kubernetes"><li className="text-white">Kubernetes</li></a>
              </ul>
            </div>

            {/* Compilers Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Compilers</h3>
              <ul className="text-[#92989e] list-none mb-4">
                <a href="/online-java"><li className="text-white">Online Java</li></a>
                <a href="/online-c"><li className="text-white">Online C</li></a>
                <a href="/online-cplusplus"><li className="text-white">Online C++</li></a>
                <a href="/online-csharp"><li className="text-white">Online C#</li></a>
                <a href="/online-php"><li className="text-white">Online PHP</li></a>
                <a href="/online-matlab"><li className="text-white">Online MATLAB</li></a>
                <a href="/online-bash"><li className="text-white">Online Bash</li></a>
              </ul>
            </div>

            {/* Terminals Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Terminals</h3>
              <ul className="text-[#92989e] list-none mb-4">
                <a href="/online-unix"><li className="text-white">Online Unix</li></a>
                <a href="/online-python3"><li className="text-white">Online Python3</li></a>
                <a href="/online-php"><li className="text-white">Online PHP</li></a>
                <a href="/online-nodejs"><li className="text-white">Online Node.js</li></a>
                <a href="/online-r"><li className="text-white">Online R</li></a>
                <a href="/online-numpy"><li className="text-white">Online NumPy</li></a>
                <a href="/online-octave"><li className="text-white">Online Octave</li></a>
              </ul>
            </div>

            {/* Data Science & ML Section */}
            <div className="tech-section flex flex-col items-center mr-4">
              <h3 className="relative inline-block pr-8 border-b-2 border-[#f39c12] mb-2 pb-1 text-white">Data Science & ML</h3>
              <ul className="text-[#92989e] list-none mb-4">
                <a href="/nlp"><li className="text-white">Natural Language Processing</li></a>
                <a href="/ai"><li className="text-white">Artificial Intelligence</li></a>
                <a href="/data-science"><li className="text-white">Data Science</li></a>
                <a href="/machine-learning"><li className="text-white">Machine Learning</li></a>
                <a href="/deep-learning"><li className="text-white">Deep Learning</li></a>
              </ul>
            </div>
          </div>
            <div className="logo-container flex flex-col items-center justify-center absolute bottom-32 right-0 w-1/4 ">
                <img className='w-full' src={logo} alt='logo' />
                <h1 className='text-white text-4xl font-bold absolute bottom-0'>Creative AMO</h1>
            </div>
        </div>

        {/* Footer Section */}
        <div className="footer flex justify-between p-5 bg-[#f39c12] mx-auto w-full border-t-4 border-black text-white">
            <div className="brand-logo">Creative AMO</div>
            <div className="footer-content flex items-center">  
                <div className="social-icons flex justify-around gap-5 text-lg">
                    <a href="/#"><i className="fab fa-facebook"></i></a>
                    <a href="/#"><i className="fab fa-twitter"></i></a>
                    <a href="/#"><i className="fab fa-whatsapp"></i></a>
                    <a href="/#"><i className="fab fa-instagram"></i></a>
                    <a href="/#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="footer-links flex flex-wrap">
                <a href="/#" className="text-white no-underline">Privacy Policy</a>
            </div>
        </div>
    </div>
    
</div>

  )
}

export default Footer