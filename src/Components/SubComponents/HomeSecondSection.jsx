import React from 'react'

const HomeSecondSection = (props) => {
  return (
    <div className="w-screen h-[100vh] flex justify-center items-center gap-10 p-20">
        <img className="w-[400px]" src={props.image} alt="group developers" />
        <div className="flex flex-col gap-5 w-1/2">
            <div className="text-white">
                <h2 className="text-xl">Free Courses</h2>
                <p>Access free resources with YouTube classes organized, convenient, and designed to track your progress. Advance your skills from any place, at your own speed, and elevate your future with the ease of online education.</p>
            </div>
            <div className="text-white">
                <h2 className="text-xl">Road Maps</h2>
                <p>Explore our roadmaps and build your skills with ease. Crafted for learners and professionals, these clear, simple guides offer structured learning that fits into your routine. Focus on your path and achieve success in less time. Shape your future with the power of easy roadmaps!</p>
            </div>
            <div className="text-white">
                <h2 className="text-xl">learn with experts</h2>
                <p>Explore various courses to grow your skills and knowledge. Learn in-demand topics like web development, mobile development, cyber security, graphic design, desktop development, UI/UX, and more to enhance your career and build a strong professional foundation.</p>
            </div>   
        </div>
    </div>
  )
}

export default HomeSecondSection