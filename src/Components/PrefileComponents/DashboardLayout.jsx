import React from "react";

// Main Dashboard Layout
const DashboardLayout = () => {
  return (
    // <div className="flex min-h-screen bg-transparent text-white">
    //   <Sidebar />
    //   <main className="flex-1 p-6 space-y-11">
    //     <Navbar />
    //     <ProfileHeader />
    //     <Prefile />
    <>
      <div className="p-4 bg-gray-800 rounded-md">
        <h3 className="text-3xl text-yellow-200 mb-2 max-md:text-xl">
          Completed Courses
        </h3>
        <CourseProgress
          title="Java Code"
          progress={75}
          color="bg-orange-500 max-md:text-lg"
        />
        <CourseProgress
          title="Design Basics"
          progress={65}
          color="bg-blue-500 max-md:text-lg"
        />
        <CourseProgress
          title="Team Building"
          progress={30}
          color="bg-purple-500 max-md:text-lg"
        />
        <CourseProgress
          title="Business Marketing"
          progress={20}
          color="bg-pink-500 max-md:text-lg"
        />
      </div>
      <div className="grid ">
        <div className="p-4 mt-16 bg-gray-800 rounded-md">
          <h3 className="text-3xl text-orange-200 mb-2 max-md:text-xl">
            Courses
          </h3>
          <CourseProgress
            title="HTML"
            progress={75}
            color="bg-orange-500 max-md:text-lg"
          />
          <CourseProgress
            title="CSS"
            progress={65}
            color="bg-blue-500 max-md:text-lg"
          />
          <CourseProgress
            title="Python"
            progress={30}
            color="bg-purple-500 max-md:text-lg"
          />
          <CourseProgress
            title="JavaScript"
            progress={20}
            color="bg-pink-500"
          />
        </div>
      </div>
    </>
    //   </main>
    // </div>
  );
};

// Course Progress Component
const CourseProgress = ({ title, progress, color }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg text-gray-400">{title}</h4>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
