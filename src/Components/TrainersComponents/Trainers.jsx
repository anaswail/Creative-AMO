import React, { useState } from "react";

const Trainers = () => {
  const [visibleContent, setVisibleContent] = useState(null);

  const showContent = (index) => {
    // Toggle visibility for a specific item
    setVisibleContent(visibleContent === index ? null : index);
  };

  const GuidesData = [
    {
      title: "What's Programming?",
      content:
        "Programming is the process of giving instructions to a computer to perform specific tasks. These instructions are written in special languages called programming languages, such as Python, JavaScript, or C++. Through programming, you can create a variety of things like websites, mobile apps, video games, and software for businesses. It is also widely used for solving problems, analyzing data, and automating repetitive tasks. Programming is often categorized based on its purpose, such as web development (for creating websites), mobile development (for building apps), game development (for making games), and data science (for analyzing and understanding data). It’s a powerful tool to bring ideas to life and create solutions for real-world challenges.",
    },
    {
      title: "Web development",
      content:
        "Web development is the process of creating websites and web applications that can run on browsers. It combines technical and creative skills to design, build, and maintain user-friendly, functional websites. Web development is divided into two main categories: Front-End Development and Back-End Development. Front-End Development focuses on the visual and interactive aspects of a website, such as layout, design, and user experience. Front-end developers work with technologies like HTML, CSS, and JavaScript, and often use libraries and frameworks like ReactJS, VueJS, or Angular. To learn front-end development, you should start with the basics of HTML and CSS, then progress to JavaScript and frameworks like React. Tracks for front-end development typically include responsive design, accessibility, and building interactive user interfaces. Back-End Development involves managing the server side of web applications, including databases, servers, and application logic. Back-end developers use languages like Node.js, Python, PHP, or Ruby, and frameworks like Express, Django, or Laravel. The learning path for back-end development includes understanding databases (SQL or NoSQL), server-side programming, and API integration. Tracks for back-end development often cover database design, server management, and building RESTful APIs.",
    },
    {
      title: "Mobile development",
      content:
        "Mobile development is the process of creating applications for mobile devices such as smartphones and tablets. These apps can be designed to work on different platforms, including Android, iOS, or both. Mobile development is divided into two main categories: Native Development and Cross-Platform Development. Native Development involves building applications specifically for a single platform (Android or iOS) using platform-specific languages and tools. For Android, developers use Kotlin or Java with tools like Android Studio, while iOS developers use Swift or Objective-C with Xcode. Native development provides the best performance and access to platform-specific features but requires separate codebases for each platform. To learn native development, start by mastering the chosen platform’s language and tools. Cross-Platform Development allows developers to create apps that work on both Android and iOS using a single codebase. Popular tools and frameworks for this include Flutter (using Dart), React Native (using JavaScript), and Xamarin (using C#). This approach is cost-effective and faster for building apps for multiple platforms. To learn cross-platform development, focus on the framework of your choice, understanding its architecture, widgets, or components, and how to integrate platform-specific features",
    },
    {
      title: "Game development",
      content:
        "Game development is the process of designing, creating, and programming video games for various platforms like PCs, consoles, mobile devices, and VR systems. It combines creativity and technical skills to develop immersive and interactive experiences for players. Game development is divided into two main categories: 2D Game Development and 3D Game Development. 2D Game Development focuses on creating games with two-dimensional graphics, commonly used for casual and retro-style games. Tools like Unity (with C#), Godot (with GDScript or C#), and GameMaker Studio (with GML) are popular for building 2D games. To learn 2D game development, start with the basics of game engines, sprite creation, and game mechanics such as collision detection and animations. 3D Game Development involves creating games with three-dimensional graphics, used for more immersive and realistic gaming experiences. Tools like Unity, Unreal Engine (with C++ or Blueprints), and Godot are commonly used. This path requires learning about 3D modeling, physics simulations, and advanced lighting.",
    },
    {
      title: "Cyber Security",
      content:
        "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access, attacks, and damage. It is a critical field as digital systems become integral to daily life. Cybersecurity involves identifying vulnerabilities, preventing attacks, and responding to security incidents. It is divided into multiple tracks, each focusing on specific areas like network security, ethical hacking, application security, and incident response.",
    },
    {
      title: "Data analysis",
      content:
        "Data analytics is the process of examining, organizing, and interpreting data to uncover useful insights and support decision-making. It plays a crucial role in businesses, research, and technology by helping to identify patterns, trends, and correlations. Data analytics is divided into multiple tracks, including data visualization, business analytics, predictive analytics, and data engineering.",
    },
    {
      title: "Desktop applications",
      content:
        "Desktop application development refers to the process of creating software that runs directly on desktop operating systems such as Windows, macOS, and Linux. Unlike web applications that run through a web browser, desktop applications are installed on a computer and can function independently of a web connection. These applications are often used for tasks that require high performance or deep integration with system resources, such as file management, productivity software (e.g., Microsoft Office), or creative tools (e.g., Adobe Photoshop). Desktop applications can be categorized based on the platform they are developed for: Windows Applications: Developed using languages like C#, C++, or .NET. Tools such as Visual Studio are commonly used for development. macOS Applications: Typically developed using Swift or Objective-C with Xcode as the main development environment. Cross-Platform Applications: These applications are built to run on multiple platforms using frameworks like Electron (which allows you to build using web technologies like HTML, CSS, and JavaScript), Qt (C++), or JavaFX (Java).",
    },
  ];

  return (
    <div className="trainers">
      <div className="mainSection bg-[#0d0b21] w-full rounded-bl-[30%] md:rounded-bl-[50%] min-h-[500px] flex justify-center items-center pt-32 flex-col max-md:pt-44">
        <h1 className="text-white font-bold text-center text-5xl max-md:text-4xl">
          Guide
        </h1>
        <p className="text-white text-center w-3/4 mt-5 leading-8 max-md:text-base max-md:w-[85%]">
          A Guide to Programming page serves as a comprehensive resource for
          beginners and experienced developers alike. It provides step-by-step
          instructions, tutorials, and best practices for various programming
          languages and technologies, helping users navigate the complexities of
          coding. The page may include resources like learning paths, project
          ideas, tools, and frameworks tailored to different programming goals,
          such as web development, mobile development, or data science. It often
          emphasizes practical examples, problem-solving techniques, and
          industry-relevant skills, enabling learners to apply their knowledge
          effectively. With a focus on clarity and structured guidance, a
          programming guide page is an essential starting point for anyone
          aiming to master the art of coding.
        </p>
      </div>

      {/* Render Guides */}
      {GuidesData.map((item, index) => (
        <div
          key={index}
          className="guides mt-10 w-full flex flex-col justify-center items-center"
        >
          <div className="programming bg-[#0d0b21] w-[90%] cursor-pointer group transition-all duration-150">
            <h1
              className="text-white text-2xl group-hover:text-[#ffac15] transition-all p-3"
              onClick={() => showContent(index)}
            >
              <span>{visibleContent === index ? "-" : "+"}</span> {item.title}
            </h1>
            <div
              className={`content text-white mt-5 bg-indigo-950 leading-10 text-lg overflow-hidden px-2 transition-all duration-300 ${
                visibleContent === index ? " " : "max-h-0"
              }`}
            >
              {visibleContent === index && <p>{item.content}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trainers;
