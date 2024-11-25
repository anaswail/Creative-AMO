import React, { useState } from "react";

const Trainers = () => {
  const [visibleContent, setVisibleContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
      title: "What i need to start?",
      content:
        "To start in programming, begin by setting a clear goal, such as building websites, creating apps, or automating tasks. Choose a beginner-friendly language based on your goal—HTML, CSS, and JavaScript for web development; Python for general use or data analysis; or Swift/Kotlin for mobile development. Learn the basics like variables, loops, functions, and data structures, using free resources like freeCodeCamp or YouTube tutorials. Practice consistently by working on small projects, such as a calculator or personal website, and tackle coding challenges on platforms like HackerRank. Gradually build more complex projects to gain practical experience and create a portfolio. Join programming communities to stay motivated and learn from others. Remember, consistency and embracing mistakes as learning opportunities are key to becoming a skilled programmer.",
    },
    {
      title: "Will artificial intelligence replace programmers?",
      content:
        "The idea that AI will replace programmers is a common concern, but it’s unlikely to happen entirely. While AI can automate repetitive coding tasks, assist with debugging, and even generate code snippets, it still lacks the creativity, problem-solving, and domain-specific understanding that human programmers bring to the table. Programming isn’t just about writing code; it’s about designing systems, understanding user needs, and making decisions that align with a project’s goals—tasks that require human intuition and judgment. Instead of replacing programmers, AI is more likely to become a tool that enhances their productivity, enabling them to focus on higher-level challenges while automating routine work.",
    },
    {
      title:
        "What is the difference between front-end and back-end development?",
      content:
        "Front-end development focuses on the visual and interactive aspects of a website or application that users see and interact with, using technologies like HTML, CSS, and JavaScript. Back-end development handles the behind-the-scenes logic, databases, and server-side functionality, often using languages like Node.js, Python, Java, or PHP. While the front-end ensures a great user experience, the back-end ensures that everything runs smoothly in the background, such as processing data and managing user authentication.",
    },
    {
      title: "How do I become a full-stack developer?",
      content:
        "To become a full-stack developer, you need knowledge of both front-end and back-end technologies. Start with front-end basics: HTML, CSS, and JavaScript. Learn frameworks like React or Angular for advanced front-end work. For back-end development, understand server-side languages like Node.js, Python, or PHP, and work with databases like MongoDB or MySQL. Familiarize yourself with tools for version control (Git) and deployment. Practice building complete projects, like a blog or an e-commerce site, to apply your skills holistically.",
    },
    {
      title: "How long does it take to learn programming?",
      content:
        "The time it takes to learn programming varies depending on your goals, dedication, and learning approach. You can grasp the basics of a language like Python in a few weeks with consistent effort. Mastery, however, can take months or even years, depending on the complexity of your projects and the depth of knowledge required. Focus on small, consistent learning sessions and build projects to reinforce your skills. Remember, programming is a continuous learning journey.",
    },
    {
      title: "What are the best resources to learn programming?",
      content:
        "There are countless free and paid resources to learn programming. Popular platforms include freeCodeCamp, Codecademy, and Khan Academy for beginners. For more structured learning, sites like Udemy, Coursera, and Pluralsight offer affordable courses. YouTube channels like Programming with Mosh and Traversy Media provide excellent free tutorials. For hands-on practice, coding challenge websites like Codewars and LeetCode are highly recommended. Choose resources that suit your learning style and focus on one at a time to avoid overwhelm.",
    },
    {
      title: "How do I debug my code?",
      content:
        "Debugging is an essential skill for programmers. Start by carefully reading error messages; they often indicate where the issue is. Use print statements or debugging tools to track variable values and program flow. Break your code into smaller sections and test each one to isolate the problem. Tools like browser developer consoles (for web development) or integrated development environments (IDEs) with debugging features, like Visual Studio Code or PyCharm, can greatly assist in finding and fixing errors.",
    },
    {
      title: "How do I start freelancing as a programmer?",
      content:
        "To start freelancing, first build a strong portfolio showcasing your skills through personal or small projects. Create profiles on platforms like Upwork, Fiverr, or Khamsat, and specify your expertise, such as web development, app development, or data analysis. Networking through LinkedIn or programming communities can help you find clients. Start with small gigs to build your reputation, and deliver high-quality work to earn positive reviews. Effective communication and time management are key to succeeding as a freelancer.",
    },
    {
      title: "How can I stay consistent while learning programming?",
      content:
        "Consistency is key when learning programming. Set small, achievable goals and dedicate a fixed amount of time each day, even if it’s just 30 minutes. Break down complex concepts into manageable chunks and focus on one topic at a time. Create a learning plan or follow a roadmap specific to your field of interest. Joining a community or finding a study partner can keep you accountable and motivated. Celebrate small wins to stay positive and recognize your progress.",
    },
    {
      title: "How can I improve my programming skills?",
      content:
        "Improving programming skills requires consistent practice and learning. Work on diverse projects to expose yourself to different challenges and technologies. Contribute to open-source projects, participate in coding challenges on platforms like LeetCode or Codeforces, and read code written by experienced developers. Stay updated with industry trends by following tech blogs and tutorials. Most importantly, maintain a problem-solving mindset and learn from your mistakes during debugging and testing.",
    },
    {
      title: "What is the difference between a library and a framework?",
      content:
        "A library is a collection of pre-written code that developers can use to perform specific tasks, allowing them to choose how and where to integrate it into their project. For example, React is a JavaScript library for building user interfaces. A framework, on the other hand, provides a structure and predefined rules for your application, dictating how you build and organize your code. Examples include Angular and Django. In simple terms, with a library, you are in control, but with a framework, it controls the flow of your application.",
    },
    {
      title: "What is the best way to learn algorithms and data structures?",
      content:
        "To learn algorithms and data structures, start with understanding basic concepts like arrays, linked lists, stacks, queues, and trees. Learn how to analyze algorithms for time and space complexity using Big O notation. Practice common algorithms, such as sorting and searching, and solve problems on platforms like HackerRank or GeeksforGeeks. Visual aids and step-by-step tutorials can help simplify complex topics. Regular practice and solving real-world problems will solidify your understanding.",
    },
    {
      title: "Do I need a degree to become a programmer?",
      content:
        "No, a degree is not mandatory to become a programmer. Many successful developers are self-taught or have learned through bootcamps, online courses, and hands-on experience. What matters most is your skills, portfolio, and ability to solve problems. However, having a degree can provide a solid foundation in computer science principles and may help in landing jobs at certain companies. Focus on building your expertise and creating projects that showcase your abilities to stand out in the job market.",
    },
    {
      title: "Should I focus on learning multiple languages or mastering one?",
      content:
        "When starting, it’s better to focus on mastering one language, as this helps you build a strong foundation in programming concepts. Choose a language suited to your goals, such as Python for general use or JavaScript for web development. Once you’re comfortable, learning additional languages becomes easier, as programming principles often overlap. Mastery of one language also allows you to build impressive projects, which is more valuable than superficial knowledge of many languages.",
    },
    {
      title: "How do I build a portfolio as a beginner?",
      content:
        "Building a portfolio starts with small, meaningful projects that demonstrate your skills. For web developers, create responsive websites, landing pages, or simple e-commerce platforms. Mobile developers can build basic apps like a weather app or a note-taking app. Host your projects on platforms like GitHub or deploy them using tools like Netlify or Vercel. Make sure your portfolio website is simple, professional, and highlights your best work. Regularly update it as you complete new projects.",
    },
    {
      title: "Can I learn programming without a degree?",
      content:
        "Yes, you can absolutely learn programming without a degree. Many successful programmers are self-taught, thanks to the abundance of free and paid online resources. Platforms like freeCodeCamp, Codecademy, and YouTube offer structured learning paths. Build a strong portfolio to demonstrate your skills to employers or clients. While degrees can be helpful, hands-on experience, problem-solving skills, and a good understanding of programming concepts are often more important in the tech industry.",
    },
    {
      title: "What is the best way to learn programming?",
      content:
        "The best way to learn programming is through hands-on practice. Start with understanding basic concepts, then immediately apply them by solving problems and building small projects. Use a mix of tutorials, interactive platforms like freeCodeCamp, and coding challenges to strengthen your skills. Learning by doing helps solidify your understanding and builds confidence as you see the results of your work.",
    },
    {
      title: "What are data structures and why are they important?",
      content:
        "Data structures are ways of organizing and storing data so it can be efficiently accessed and modified. Examples include arrays, linked lists, stacks, queues, trees, and hash tables. They are essential for writing efficient code, as choosing the right data structure can significantly improve the performance of your programs, especially when working with large datasets or complex algorithms.",
    },
    {
      title: "What is an algorithm?",
      content:
        "An algorithm is a step-by-step procedure or formula for solving a problem. It provides a clear and structured approach to processing data and finding a solution. For instance, sorting numbers in ascending order or finding the shortest path in a graph are problems that require specific algorithms. Learning algorithms helps in writing optimized and efficient code.",
    },
    {
      title: "What is the difference between coding and programming?",
      content:
        "Coding refers to writing the actual lines of code in a programming language to create functionality. Programming is a broader concept that includes not only coding but also designing, testing, debugging, and maintaining software or applications. Programming involves solving problems and creating systems, while coding is just one part of the process.",
    },
    {
      title: "What are APIs and how do they work?",
      content:
        "APIs (Application Programming Interfaces) are tools that allow different software applications to communicate with each other. They define rules for requesting and exchanging data between systems. For example, a weather app might use a weather service’s API to fetch real-time weather data. APIs simplify development by enabling programmers to use pre-built functionalities instead of building everything from scratch.",
    },
    {
      title: "How do I handle errors in my code?",
      content:
        "Error handling involves identifying and managing issues that occur during program execution. Use debugging tools, print statements, or logs to pinpoint problems. Learn the common error types (syntax, runtime, logical errors) and how to fix them. For larger projects, implement structured error handling techniques using try-catch blocks (in JavaScript, Python, etc.) to gracefully manage and resolve unexpected issues.",
    },
    {
      title: "What is version control and why is it important?",
      content:
        "Version control systems, like Git, track changes to your code over time. They allow multiple developers to collaborate efficiently, revert to previous versions of code, and manage different project branches. Version control is critical in team environments and helps maintain an organized workflow, minimizing risks of errors when integrating new features or fixing bugs.",
    },
    {
      title:
        "What is the difference between compiled and interpreted languages?",
      content:
        "In a compiled language (e.g., C++), the code is translated into machine language by a compiler before execution, resulting in faster performance. In an interpreted language (e.g., Python), the code is executed line by line by an interpreter, making it slower but more flexible for testing and debugging. Each type has its advantages depending on the use case.",
    },
    {
      title: "What is the purpose of frameworks?",
      content:
        "Frameworks provide pre-built structures and tools that simplify development. They reduce repetitive coding tasks and enforce best practices, helping developers focus on application logic rather than setup. Examples include React for front-end web development, Django for back-end, and Flutter for mobile apps. Frameworks save time and ensure consistency in large projects.",
    },
    {
      title: "What is responsive design in web development?",
      content:
        "Responsive design ensures that websites function and look good on devices of different screen sizes, from desktops to smartphones. This is achieved using techniques like flexible layouts, media queries, and scalable images. Responsive design is essential for delivering a great user experience and improving search engine rankings.",
    },
    {
      title:
        "What is the difference between synchronous and asynchronous programming?",
      content:
        "Synchronous programming executes tasks one at a time, in a sequential manner. Asynchronous programming allows multiple tasks to run simultaneously, improving performance and user experience. For example, in JavaScript, asynchronous operations like API calls don’t block the main thread, enabling the program to handle other tasks while waiting for a response.",
    },
    {
      title: "How do I deploy my website or application?",
      content:
        "To deploy a website or application, you need a hosting service like Netlify, Vercel, or GitHub Pages for static sites. For dynamic apps, use platforms like Heroku or AWS. Deployment involves uploading your project files, configuring servers, and ensuring it’s accessible via a domain name. Learning deployment is essential for showcasing your work to others.",
    },
    {
      title: "What is the difference between GET and POST requests?",
      content:
        "GET and POST are HTTP methods used for communication between a client and a server. GET requests retrieve data from a server, while POST requests send data to the server for processing, such as submitting a form. GET is suitable for read-only operations, while POST is used for actions that modify data.",
    },
    {
      title: "What are some common programming mistakes to avoid?",
      content:
        "Common mistakes include not commenting code, neglecting error handling, overcomplicating solutions, and failing to test code thoroughly. Beginners often focus on completing a task quickly rather than writing clean, maintainable code. Avoid these mistakes by following best practices, like keeping code modular and readable, and testing frequently.",
    },
    {
      title: "What are the best practices for naming variables?",
      content:
        "Use descriptive and meaningful names that reflect the purpose of the variable. For example, instead of x, use totalPrice or userName. Follow consistent naming conventions, such as camelCase for JavaScript or snake_case for Python. Avoid abbreviations and ensure names are easy to understand for anyone reading your code.",
    },
    {
      title: "What is object-oriented programming (OOP)?",
      content:
        "OOP is a programming paradigm that organizes code into objects, which are instances of classes. It emphasizes concepts like encapsulation, inheritance, and polymorphism, making it easier to model real-world scenarios. Languages like Java, Python, and C++ support OOP. OOP promotes code reuse and scalability, making it ideal for large and complex projects.",
    },
    {
      title: " How do I choose the right database for my project?",
      content:
        "Choosing a database depends on your project requirements. Use SQL databases (like MySQL or PostgreSQL) for structured data and complex queries. Opt for NoSQL databases (like MongoDB) for flexible, unstructured data or when dealing with large-scale, real-time applications. Understanding your data’s structure and scalability needs will guide your choice.",
    },
    {
      title: "What is the role of an IDE?",
      content:
        "An Integrated Development Environment (IDE) is a tool that combines a text editor, debugger, and compiler/interpreter in one interface. Popular IDEs like Visual Studio Code, PyCharm, and Eclipse improve productivity by providing features like syntax highlighting, auto-completion, and integrated debugging.",
    },
    {
      title: "How do I stay updated with programming trends?",
      content:
        "Stay updated by following tech blogs, subscribing to newsletters like Dev.to, joining forums like Stack Overflow, and participating in developer communities on platforms like GitHub and Reddit. Attending webinars, conferences, and online courses also keeps you informed about emerging technologies and best practices.",
    },
    {
      title: "How do I manage time effectively while learning programming?",
      content:
        "Effective time management involves setting clear goals, breaking tasks into smaller chunks, and prioritizing them. Use tools like Trello or Notion to track your progress. Dedicate specific hours daily to learning, alternating between theory and practice. Avoid burnout by taking short breaks and maintaining a balance between coding and other responsibilities.",
    },
    {
      title: "What is cloud computing?",
      content:
        "Cloud computing provides on-demand access to computing resources such as servers, storage, and databases over the internet. Instead of owning physical hardware, users rent resources from cloud providers like AWS, Azure, or Google Cloud. This allows businesses to scale efficiently, reduce costs, and improve reliability.",
    },
    {
      title: "What is DevOps?",
      content:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the software development lifecycle. It emphasizes automation, collaboration, and continuous delivery to improve the speed and quality of software deployment.",
    },

    {
      title: "What are design patterns?",
      content:
        "Design patterns are reusable solutions to common software design problems. They provide templates for solving issues in a way that’s proven to be effective. Examples include Singleton, Factory, and Observer patterns. Understanding design patterns can improve code structure and maintainability.",
    },
    {
      title: "What is a REST API?",
      content:
        "A REST API is a way of building web services that adhere to REST (Representational State Transfer) principles. It uses standard HTTP methods like GET, POST, PUT, and DELETE to interact with resources, providing a simple and scalable way to enable communication between client and server.",
    },
    {
      title: "What is pair programming?",
      content:
        "Pair programming is an Agile software development technique where two developers work together at one workstation. One writes the code (Driver) while the other reviews it (Navigator). This approach enhances code quality, reduces errors, and promotes knowledge sharing.",
    },
    {
      title: "What is a microservices architecture?",
      content:
        "Microservices architecture is a design approach where applications are built as a collection of small, independent services. Each service performs a specific function and communicates with others through APIs. This architecture improves scalability, flexibility, and fault tolerance.",
    },
    {
      title: "What is Agile development?",
      content:
        "Agile development is an iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback. It involves breaking projects into smaller cycles (sprints), allowing teams to adapt to changes and deliver incremental improvements quickly.",
    },
    {
      title: "What is blockchain technology?",
      content:
        "Blockchain is a decentralized, distributed ledger technology that records transactions across multiple nodes. It is secure, transparent, and resistant to tampering, making it suitable for applications like cryptocurrencies, supply chain tracking, and smart contracts.",
    },
    {
      title: "What are HTTP status codes?",
      content:
        "HTTP status codes are standardized responses that indicate the result of an HTTP request. Common codes include 200 (OK), 404 (Not Found), 500 (Server Error), and 401 (Unauthorized). They help developers understand the success or failure of a request.",
    },
    {
      title: "What is a database?",
      content:
        "A database is an organized collection of data that can be accessed, managed, and updated. Common types include relational databases (e.g., MySQL, PostgreSQL) and NoSQL databases (e.g., MongoDB). Databases are essential for storing and retrieving information efficiently.",
    },
    {
      title: "What is CI/CD?",
      content:
        "CI/CD stands for Continuous Integration and Continuous Deployment. CI automates the process of integrating code changes, while CD automates deployment to production. These practices streamline development workflows and reduce the risk of errors.",
    },
    {
      title: "What is a data structure?",
      content:
        "A data structure is a way of organizing and storing data to enable efficient access and modification. Examples include arrays, linked lists, stacks, queues, and trees. Data structures are fundamental to algorithm design and software development.",
    },
    {
      title: "What is machine learning?",
      content:
        "Machine learning is a subset of AI that enables systems to learn from data and improve performance without explicit programming. Common algorithms include decision trees, neural networks, and support vector machines. Applications range from image recognition to predictive analytics.",
    },
    {
      title: "What is the Internet of Things (IoT)?",
      content:
        "IoT refers to the network of interconnected devices that communicate and exchange data via the internet. Examples include smart home devices, wearable fitness trackers, and industrial sensors. IoT enables automation, remote monitoring, and improved efficiency.",
    },
    {
      title: "What is responsive web design?",
      content:
        "Responsive web design ensures that websites adapt to different screen sizes and devices. This is achieved using flexible grids, media queries, and scalable images, enhancing user experience on both desktop and mobile devices.",
    },
    {
      title: "What is an IDE?",
      content:
        "An Integrated Development Environment (IDE) is a software application that provides tools for coding, debugging, and testing. Popular IDEs include Visual Studio Code, IntelliJ IDEA, and Eclipse. IDEs enhance productivity by integrating multiple tools into a single interface.",
    },
    {
      title: "What is version control?",
      content:
        "Version control systems, like Git, track changes to code and enable collaboration among developers. They allow reverting to previous states, resolving conflicts, and managing different versions of a project efficiently.",
    },

    {
      title: "What is middleware?",
      content:
        "Middleware is software that acts as a bridge between applications, systems, or components. In web development, it processes requests between a server and an application, handling tasks like authentication, logging, and data formatting.",
    },
    {
      title: "What is a database?",
      content:
        "A database is an organized collection of data that can be easily accessed, managed, and updated. It allows applications to store and retrieve information efficiently, using systems like SQL databases (e.g., MySQL, PostgreSQL) or NoSQL databases (e.g., MongoDB, Firebase). Databases are essential for managing large-scale data in applications like e-commerce platforms and social media websites.",
    },
    {
      title: "What is cloud computing?",
      content:
        "Cloud computing is the delivery of computing services over the internet, including storage, databases, servers, and software. Instead of hosting on local servers, businesses and developers can leverage cloud platforms like AWS, Google Cloud, or Azure for scalability, cost efficiency, and global access.",
    },
    {
      title: "What is DevOps?",
      content:
        "DevOps combines software development (Dev) and IT operations (Ops) to improve collaboration, speed up development cycles, and deliver high-quality software. DevOps practices include continuous integration, continuous deployment (CI/CD), and using tools like Docker, Kubernetes, and Jenkins.",
    },
    {
      title: "What is machine learning?",
      content:
        "Machine learning (ML) is a subset of artificial intelligence (AI) that allows computers to learn patterns and make predictions based on data. It’s widely used in applications like recommendation systems, image recognition, and predictive analytics. Common tools include Python libraries like TensorFlow and scikit-learn.",
    },
    {
      title: "What is Git?",
      content:
        "Git is a version control system that tracks changes in your code and helps manage project development. It’s widely used for collaboration, enabling multiple developers to work on the same codebase efficiently. Git commands like `git commit`, `git push`, and `git pull` are essential for managing repositories.",
    },
    {
      title: "What is a code editor?",
      content:
        "A code editor is a tool where programmers write and edit code. Popular examples include Visual Studio Code, Sublime Text, and Atom. Advanced editors provide features like syntax highlighting, debugging tools, and plugins to enhance productivity.",
    },
    {
      title: "What are design patterns in programming?",
      content:
        "Design patterns are reusable solutions to common software design problems. Examples include the Singleton, Observer, and Factory patterns. They help in writing maintainable, scalable, and efficient code by providing best practices for specific scenarios.",
    },
    {
      title: "What are the differences between HTTP and HTTPS?",
      content:
        "HTTP (HyperText Transfer Protocol) and HTTPS (HTTP Secure) are protocols for data transfer over the web. HTTPS encrypts data between the client and server using SSL/TLS, ensuring secure communication and protecting sensitive information.",
    },
    {
      title: "What are microservices?",
      content:
        "Microservices are an architectural style where a large application is divided into small, independent services. Each service handles a specific business function and communicates with others via APIs. This approach improves scalability and simplifies maintenance.",
    },
    {
      title: "What is TypeScript?",
      content:
        "TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. It’s widely used in large-scale applications to improve code reliability and maintainability.",
    },
    {
      title: "What is the difference between Java and JavaScript?",
      content:
        "Java is a general-purpose programming language used for building applications like enterprise software and Android apps. JavaScript is a scripting language primarily used for web development, enabling dynamic and interactive features on websites.",
    },
    {
      title: "What is an IDE?",
      content:
        "An Integrated Development Environment (IDE) is software that combines tools like a code editor, debugger, and compiler to streamline software development. Examples include IntelliJ IDEA, Eclipse, and Visual Studio.",
    },
    {
      title: "What is blockchain technology?",
      content:
        "Blockchain is a decentralized and distributed digital ledger that records transactions across multiple computers. It’s the foundation of cryptocurrencies like Bitcoin and has applications in finance, supply chain, and more.",
    },
    {
      title: "What are regular expressions?",
      content:
        "Regular expressions (regex) are patterns used to match and manipulate strings in text. They’re useful for tasks like data validation, search-and-replace operations, and parsing text in programming.",
    },
    {
      title: "What is unit testing?",
      content:
        "Unit testing involves testing individual components or functions of a program to ensure they work as expected. Frameworks like Jest, Mocha, or JUnit are commonly used for writing and running unit tests.",
    },
    {
      title: "What is Agile development?",
      content:
        "Agile is a methodology for software development that emphasizes iterative progress, collaboration, and adaptability. Teams deliver work in small increments called sprints, enabling frequent feedback and adjustments.",
    },
    {
      title: "What are the differences between SQL and NoSQL databases?",
      content:
        "SQL databases, like MySQL and PostgreSQL, use structured tables and are suitable for complex queries. NoSQL databases, like MongoDB and Firebase, use flexible data models, making them ideal for handling unstructured or semi-structured data.",
    },
    {
      title: "What is REST API?",
      content:
        "A REST API (Representational State Transfer) is a set of guidelines for building web services. It uses standard HTTP methods (GET, POST, PUT, DELETE) and enables communication between client and server over the web.",
    },
    {
      title: "What is containerization?",
      content:
        "Containerization involves packaging an application and its dependencies into a lightweight, portable container using tools like Docker. Containers ensure consistency across development, testing, and production environments.",
    },
    {
      title: "What is Kubernetes?",
      content:
        "Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications. It’s widely used for orchestrating complex, cloud-native systems.",
    },
    {
      title: "What is Python?",
      content:
        "Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It’s widely used in web development, data science, machine learning, and automation.",
    },
    {
      title: "What is artificial intelligence?",
      content:
        "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It enables systems to learn, reason, and make decisions. AI applications include chatbots, recommendation systems, and autonomous vehicles.",
    },
    {
      title: "What is an operating system?",
      content:
        "An operating system (OS) is software that manages computer hardware and provides services for applications. Examples include Windows, macOS, Linux, and Android.",
    },
    {
      title: "What is the difference between RAM and ROM?",
      content:
        "RAM (Random Access Memory) is volatile memory used for temporary data storage while programs are running. ROM (Read-Only Memory) is non-volatile memory used for permanent storage, such as firmware.",
    },
    {
      title: "What is cloud computing?",
      content:
        "Cloud computing is the delivery of computing services over the internet, including storage, databases, servers, and software. Instead of hosting on local servers, businesses and developers can leverage cloud platforms like AWS, Google Cloud, or Azure for scalability, cost efficiency, and global access.",
    },
    {
      title: "What is DevOps?",
      content:
        "DevOps combines software development (Dev) and IT operations (Ops) to improve collaboration, speed up development cycles, and deliver high-quality software. DevOps practices include continuous integration, continuous deployment (CI/CD), and using tools like Docker, Kubernetes, and Jenkins.",
    },
    {
      title: "What is machine learning?",
      content:
        "Machine learning (ML) is a subset of artificial intelligence (AI) that allows computers to learn patterns and make predictions based on data. It’s widely used in applications like recommendation systems, image recognition, and predictive analytics. Common tools include Python libraries like TensorFlow and scikit-learn.",
    },
    {
      title: "What is Git?",
      content:
        "Git is a version control system that tracks changes in your code and helps manage project development. It’s widely used for collaboration, enabling multiple developers to work on the same codebase efficiently. Git commands like `git commit`, `git push`, and `git pull` are essential for managing repositories.",
    },
    {
      title: "What is a code editor?",
      content:
        "A code editor is a tool where programmers write and edit code. Popular examples include Visual Studio Code, Sublime Text, and Atom. Advanced editors provide features like syntax highlighting, debugging tools, and plugins to enhance productivity.",
    },
    {
      title: "What are design patterns in programming?",
      content:
        "Design patterns are reusable solutions to common software design problems. Examples include the Singleton, Observer, and Factory patterns. They help in writing maintainable, scalable, and efficient code by providing best practices for specific scenarios.",
    },
    {
      title: "What are the differences between HTTP and HTTPS?",
      content:
        "HTTP (HyperText Transfer Protocol) and HTTPS (HTTP Secure) are protocols for data transfer over the web. HTTPS encrypts data between the client and server using SSL/TLS, ensuring secure communication and protecting sensitive information.",
    },
    {
      title: "What are microservices?",
      content:
        "Microservices are an architectural style where a large application is divided into small, independent services. Each service handles a specific business function and communicates with others via APIs. This approach improves scalability and simplifies maintenance.",
    },
    {
      title: "What is TypeScript?",
      content:
        "TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. It’s widely used in large-scale applications to improve code reliability and maintainability.",
    },
    {
      title: "What is the difference between Java and JavaScript?",
      content:
        "Java is a general-purpose programming language used for building applications like enterprise software and Android apps. JavaScript is a scripting language primarily used for web development, enabling dynamic and interactive features on websites.",
    },
    {
      title: "What is an IDE?",
      content:
        "An Integrated Development Environment (IDE) is software that combines tools like a code editor, debugger, and compiler to streamline software development. Examples include IntelliJ IDEA, Eclipse, and Visual Studio.",
    },
    {
      title: "What is blockchain technology?",
      content:
        "Blockchain is a decentralized and distributed digital ledger that records transactions across multiple computers. It’s the foundation of cryptocurrencies like Bitcoin and has applications in finance, supply chain, and more.",
    },
    {
      title: "What are regular expressions?",
      content:
        "Regular expressions (regex) are patterns used to match and manipulate strings in text. They’re useful for tasks like data validation, search-and-replace operations, and parsing text in programming.",
    },
    {
      title: "What is unit testing?",
      content:
        "Unit testing involves testing individual components or functions of a program to ensure they work as expected. Frameworks like Jest, Mocha, or JUnit are commonly used for writing and running unit tests.",
    },
    {
      title: "What is Agile development?",
      content:
        "Agile is a methodology for software development that emphasizes iterative progress, collaboration, and adaptability. Teams deliver work in small increments called sprints, enabling frequent feedback and adjustments.",
    },
    {
      title: "What are the differences between SQL and NoSQL databases?",
      content:
        "SQL databases, like MySQL and PostgreSQL, use structured tables and are suitable for complex queries. NoSQL databases, like MongoDB and Firebase, use flexible data models, making them ideal for handling unstructured or semi-structured data.",
    },
    {
      title: "What is REST API?",
      content:
        "A REST API (Representational State Transfer) is a set of guidelines for building web services. It uses standard HTTP methods (GET, POST, PUT, DELETE) and enables communication between client and server over the web.",
    },
    {
      title: "What is containerization?",
      content:
        "Containerization involves packaging an application and its dependencies into a lightweight, portable container using tools like Docker. Containers ensure consistency across development, testing, and production environments.",
    },
    {
      title: "What is Kubernetes?",
      content:
        "Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications. It’s widely used for orchestrating complex, cloud-native systems.",
    },
    {
      title: "What is Python?",
      content:
        "Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It’s widely used in web development, data science, machine learning, and automation.",
    },
    {
      title: "What is artificial intelligence?",
      content:
        "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It enables systems to learn, reason, and make decisions. AI applications include chatbots, recommendation systems, and autonomous vehicles.",
    },
    {
      title: "What is an operating system?",
      content:
        "An operating system (OS) is software that manages computer hardware and provides services for applications. Examples include Windows, macOS, Linux, and Android.",
    },
    {
      title: "What is the difference between RAM and ROM?",
      content:
        "RAM (Random Access Memory) is volatile memory used for temporary data storage while programs are running. ROM (Read-Only Memory) is non-volatile memory used for permanent storage, such as firmware.",
    },
    {
      title: "What is a database?",
      content:
        "A database is an organized collection of data that can be easily accessed, managed, and updated. It allows applications to store and retrieve information efficiently, using systems like SQL databases (e.g., MySQL, PostgreSQL) or NoSQL databases (e.g., MongoDB, Firebase). Databases are essential for managing large-scale data in applications like e-commerce platforms and social media websites.",
    },
    {
      title: "What is cloud computing?",
      content:
        "Cloud computing is the delivery of computing services over the internet, including storage, databases, servers, and software. Instead of hosting on local servers, businesses and developers can leverage cloud platforms like AWS, Google Cloud, or Azure for scalability, cost efficiency, and global access.",
    },
    {
      title: "What is DevOps?",
      content:
        "DevOps combines software development (Dev) and IT operations (Ops) to improve collaboration, speed up development cycles, and deliver high-quality software. DevOps practices include continuous integration, continuous deployment (CI/CD), and using tools like Docker, Kubernetes, and Jenkins.",
    },
    {
      title: "What is machine learning?",
      content:
        "Machine learning (ML) is a subset of artificial intelligence (AI) that allows computers to learn patterns and make predictions based on data. It’s widely used in applications like recommendation systems, image recognition, and predictive analytics. Common tools include Python libraries like TensorFlow and scikit-learn.",
    },
    {
      title: "What is Git?",
      content:
        "Git is a version control system that tracks changes in your code and helps manage project development. It’s widely used for collaboration, enabling multiple developers to work on the same codebase efficiently. Git commands like `git commit`, `git push`, and `git pull` are essential for managing repositories.",
    },
    {
      title: "What is a code editor?",
      content:
        "A code editor is a tool where programmers write and edit code. Popular examples include Visual Studio Code, Sublime Text, and Atom. Advanced editors provide features like syntax highlighting, debugging tools, and plugins to enhance productivity.",
    },
    {
      title: "What are design patterns in programming?",
      content:
        "Design patterns are reusable solutions to common software design problems. Examples include the Singleton, Observer, and Factory patterns. They help in writing maintainable, scalable, and efficient code by providing best practices for specific scenarios.",
    },
    {
      title: "What are the differences between HTTP and HTTPS?",
      content:
        "HTTP (HyperText Transfer Protocol) and HTTPS (HTTP Secure) are protocols for data transfer over the web. HTTPS encrypts data between the client and server using SSL/TLS, ensuring secure communication and protecting sensitive information.",
    },
    {
      title: "What are microservices?",
      content:
        "Microservices are an architectural style where a large application is divided into small, independent services. Each service handles a specific business function and communicates with others via APIs. This approach improves scalability and simplifies maintenance.",
    },
    {
      title: "What is TypeScript?",
      content:
        "TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors during development. It’s widely used in large-scale applications to improve code reliability and maintainability.",
    },
    {
      title: "What is the difference between Java and JavaScript?",
      content:
        "Java is a general-purpose programming language used for building applications like enterprise software and Android apps. JavaScript is a scripting language primarily used for web development, enabling dynamic and interactive features on websites.",
    },
    {
      title: "What is an IDE?",
      content:
        "An Integrated Development Environment (IDE) is software that combines tools like a code editor, debugger, and compiler to streamline software development. Examples include IntelliJ IDEA, Eclipse, and Visual Studio.",
    },
    {
      title: "What is blockchain technology?",
      content:
        "Blockchain is a decentralized and distributed digital ledger that records transactions across multiple computers. It’s the foundation of cryptocurrencies like Bitcoin and has applications in finance, supply chain, and more.",
    },
    {
      title: "What are regular expressions?",
      content:
        "Regular expressions (regex) are patterns used to match and manipulate strings in text. They’re useful for tasks like data validation, search-and-replace operations, and parsing text in programming.",
    },
    {
      title: "What is unit testing?",
      content:
        "Unit testing involves testing individual components or functions of a program to ensure they work as expected. Frameworks like Jest, Mocha, or JUnit are commonly used for writing and running unit tests.",
    },
    {
      title: "What is Agile development?",
      content:
        "Agile is a methodology for software development that emphasizes iterative progress, collaboration, and adaptability. Teams deliver work in small increments called sprints, enabling frequent feedback and adjustments.",
    },
    {
      title: "What are the differences between SQL and NoSQL databases?",
      content:
        "SQL databases, like MySQL and PostgreSQL, use structured tables and are suitable for complex queries. NoSQL databases, like MongoDB and Firebase, use flexible data models, making them ideal for handling unstructured or semi-structured data.",
    },
    {
      title: "What is REST API?",
      content:
        "A REST API (Representational State Transfer) is a set of guidelines for building web services. It uses standard HTTP methods (GET, POST, PUT, DELETE) and enables communication between client and server over the web.",
    },
    {
      title: "What is containerization?",
      content:
        "Containerization involves packaging an application and its dependencies into a lightweight, portable container using tools like Docker. Containers ensure consistency across development, testing, and production environments.",
    },
    {
      title: "What is Kubernetes?",
      content:
        "Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications. It’s widely used for orchestrating complex, cloud-native systems.",
    },
    {
      title: "What is Python?",
      content:
        "Python is a versatile and beginner-friendly programming language known for its simplicity and readability. It’s widely used in web development, data science, machine learning, and automation.",
    },
    {
      title: "What is artificial intelligence?",
      content:
        "Artificial Intelligence (AI) is the simulation of human intelligence in machines. It enables systems to learn, reason, and make decisions. AI applications include chatbots, recommendation systems, and autonomous vehicles.",
    },
    {
      title: "What is an operating system?",
      content:
        "An operating system (OS) is software that manages computer hardware and provides services for applications. Examples include Windows, macOS, Linux, and Android.",
    },
    {
      title: "What is the difference between RAM and ROM?",
      content:
        "RAM (Random Access Memory) is volatile memory used for temporary data storage while programs are running. ROM (Read-Only Memory) is non-volatile memory used for permanent storage, such as firmware.",
    },
    {
      title:
        "What is the difference between front-end and back-end development?",
      content:
        "Front-end development focuses on creating the user interface and experience, using languages like HTML, CSS, and JavaScript. Back-end development deals with server-side logic, databases, and APIs, often using languages like Python, Java, and Node.js.",
    },
    {
      title: "What is the Model-View-Controller (MVC) architecture?",
      content:
        "MVC is a software design pattern that separates an application into three interconnected components: Model (data), View (UI), and Controller (business logic). This separation makes the code more modular and easier to maintain.",
    },
    {
      title: "What is a RESTful service?",
      content:
        "A RESTful service is a web service that adheres to the principles of REST, using HTTP methods for CRUD operations and providing stateless communication between client and server.",
    },
    {
      title: "What is the purpose of caching?",
      content:
        "Caching is the process of storing frequently accessed data in a temporary storage location (cache) to reduce retrieval time and improve performance. Examples include browser cache and server-side cache.",
    },
    {
      title: "What is a virtual machine?",
      content:
        "A virtual machine (VM) is a software emulation of a physical computer that runs an operating system and applications. VMs allow multiple OS instances to run on a single physical machine.",
    },
    {
      title: "What is serverless computing?",
      content:
        "Serverless computing allows developers to build and run applications without managing servers. The cloud provider automatically handles infrastructure scaling and management. AWS Lambda is an example of a serverless platform.",
    },
    {
      title: "What is continuous integration (CI)?",
      content:
        "Continuous integration is a software development practice where code changes are automatically built and tested frequently, often multiple times a day, to detect and fix issues early in the development process.",
    },
    {
      title: "What is continuous deployment (CD)?",
      content:
        "Continuous deployment is a software release process where code changes are automatically deployed to production after passing automated tests, ensuring a fast and consistent release cycle.",
    },
    {
      title: "What is a cloud-native application?",
      content:
        "A cloud-native application is built specifically to take advantage of cloud computing features such as scalability, availability, and elasticity. It typically uses microservices and containerization.",
    },
    {
      title: "What is the difference between a framework and a library?",
      content:
        "A framework provides a structure for building applications, with pre-defined rules and conventions. A library is a collection of reusable functions or classes, which developers can choose to use in their code.",
    },
    {
      title: "What is a NoSQL database?",
      content:
        "A NoSQL database is a non-relational database that stores data in a flexible, schema-less format. Examples include MongoDB and CouchDB, which are optimized for scalability and speed when handling large amounts of unstructured data.",
    },
    {
      title: "What is JWT?",
      content:
        "JWT (JSON Web Token) is a compact and self-contained way to securely transmit information between parties as a JSON object. It’s commonly used for authentication and authorization in web applications.",
    },
    {
      title: "What is the purpose of load balancing?",
      content:
        "Load balancing is the process of distributing incoming network traffic across multiple servers to ensure that no single server becomes overwhelmed, improving performance, scalability, and fault tolerance.",
    },
    {
      title: "What is a content management system (CMS)?",
      content:
        "A CMS is a software application that allows users to create, manage, and modify digital content, typically for websites. Popular CMS platforms include WordPress, Joomla, and Drupal.",
    },
    {
      title: "What is OAuth?",
      content:
        "OAuth is an open standard for authorization, allowing users to grant third-party applications access to their resources without sharing their credentials. It’s commonly used for social logins (e.g., logging in with Google or Facebook).",
    },
    {
      title: "What is SQL injection?",
      content:
        "SQL injection is a security vulnerability that allows an attacker to manipulate SQL queries by injecting malicious SQL code into input fields. It’s important to use parameterized queries and input validation to prevent SQL injection attacks.",
    },
    {
      title: "What is the purpose of an API?",
      content:
        "An API (Application Programming Interface) allows different software systems to communicate with each other by defining a set of rules for requests and responses. APIs are essential for integrating third-party services into applications.",
    },
    {
      title: "What is a session in web development?",
      content:
        "A session is a way to store user-specific data on the server side, which persists across multiple requests from the same user. Sessions are commonly used for tracking user authentication and preferences.",
    },
    {
      title: "What is the difference between TCP and UDP?",
      content:
        "TCP (Transmission Control Protocol) is connection-oriented, providing reliable data transfer with error checking and retransmission. UDP (User Datagram Protocol) is connectionless, offering faster but less reliable data transfer, often used in streaming and gaming applications.",
    },
    {
      title: "What is multithreading?",
      content:
        "Multithreading allows a program to run multiple threads concurrently, enabling efficient utilization of CPU resources. It’s useful for performing tasks like file I/O and computations simultaneously.",
    },
    {
      title: "What is a deadlock?",
      content:
        "A deadlock occurs in a multithreaded environment when two or more threads are blocked, waiting for resources held by each other, causing a standstill. Avoiding deadlocks requires careful resource allocation and synchronization.",
    },
    {
      title: "What is Big-O notation?",
      content:
        "Big-O notation describes the time or space complexity of an algorithm in terms of its input size. It helps evaluate an algorithm's efficiency. For example, O(n) indicates linear complexity.",
    },
    {
      title: "What is recursion?",
      content:
        "Recursion is a programming technique where a function calls itself to solve smaller instances of a problem. It’s often used in problems like factorial calculation, tree traversal, and backtracking.",
    },
    {
      title: "What is polymorphism in object-oriented programming?",
      content:
        "Polymorphism allows objects of different types to be treated as objects of a common supertype. It’s achieved through method overriding (runtime polymorphism) or method overloading (compile-time polymorphism).",
    },
    {
      title: "What is encapsulation?",
      content:
        "Encapsulation is the principle of bundling data and methods that operate on the data within a class, restricting direct access to some components to enforce data integrity.",
    },
    {
      title: "What is a singleton design pattern?",
      content:
        "The Singleton pattern ensures that a class has only one instance and provides a global point of access to it. It’s often used for managing resources like database connections.",
    },
    {
      title: "What is the difference between GET and POST methods in HTTP?",
      content:
        "GET requests data from a server and appends parameters to the URL, while POST sends data in the request body, making it more secure for transmitting sensitive information like passwords.",
    },
    {
      title: "What is the purpose of middleware in web development?",
      content:
        "Middleware acts as a bridge between a server and an application, processing requests and responses. It’s often used for tasks like authentication, logging, and error handling in frameworks like Express.js.",
    },
    {
      title: "What is the Document Object Model (DOM)?",
      content:
        "The DOM is a programming interface for web documents, representing the structure of a webpage as a tree of objects. JavaScript uses the DOM to manipulate HTML and CSS dynamically.",
    },
    {
      title: "What is Cross-Origin Resource Sharing (CORS)?",
      content:
        "CORS is a security feature in browsers that restricts web applications from making requests to a domain different from the one serving the application. It can be controlled using HTTP headers.",
    },
    {
      title:
        "What is the difference between synchronous and asynchronous programming?",
      content:
        "Synchronous programming executes tasks sequentially, blocking subsequent tasks until the current one finishes. Asynchronous programming allows tasks to run concurrently, improving efficiency in operations like API calls.",
    },
    {
      title: "What is a virtual DOM?",
      content:
        "A virtual DOM is a lightweight representation of the real DOM used in libraries like React. It improves performance by updating only the necessary parts of the DOM instead of re-rendering the entire page.",
    },
    {
      title: "What is a responsive web design?",
      content:
        "Responsive web design ensures that a website adapts to different screen sizes and devices, providing an optimal user experience. It uses flexible layouts, media queries, and scalable assets.",
    },
    {
      title: "What is the purpose of version control?",
      content:
        "Version control systems like Git track changes in files, enabling collaboration, rollback, and management of different versions of a project over time.",
    },
    {
      title: "What is the difference between a compiler and an interpreter?",
      content:
        "A compiler translates the entire code into machine language before execution, while an interpreter translates and executes code line by line. C uses compilers, and Python uses interpreters.",
    },
    {
      title: "What are web sockets?",
      content:
        "Web sockets enable real-time, full-duplex communication between a client and a server over a single, long-lived connection. They’re commonly used in chat applications and live updates.",
    },
    {
      title: "What is an indexed database?",
      content:
        "An indexed database organizes data using indexes for faster searches and retrieval. In web development, IndexedDB is a browser-based database for storing structured data locally.",
    },
    {
      title: "What is CRUD in database operations?",
      content:
        "CRUD stands for Create, Read, Update, and Delete—basic operations performed on a database. For example, SQL commands like INSERT, SELECT, UPDATE, and DELETE implement CRUD.",
    },
  ];

  const filteredGuides = GuidesData.filter(
    (Guide) =>
      Guide.title &&
      Guide.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

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

      <div className="w-full flex justify-center p-5 mt-6 mb-3">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 text-xl max-md:text-lg max-md:w-72 w-96 rounded-2xl placeholder:text-sm outline-none dark:bg-white bg-[#0d0b21] text-white dark:text-[#0d0b21]"
        />
      </div>
      {/* Render Guides */}
      {filteredGuides.map((item, index) => (
        <div
          key={index}
          className="guides mt-10 w-full flex flex-col justify-center items-center"
        >
          <div className="programming bg-[#0d0b21] rounded-t-md w-[90%] cursor-pointer group transition-all duration-150">
            <h1
              className="text-white text-2xl group-hover:text-[#ffac15] transition-all p-3"
              onClick={() => showContent(index)}
            >
              <span>{visibleContent === index ? "-" : "+"}</span> {item.title}
            </h1>
            <div
              className={`content text-white mt-5 bg-[#05040f] rounded-b-md leading-10 text-lg overflow-hidden px-2 transition-all duration-300 ${
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
