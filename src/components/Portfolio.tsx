import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ayurskin.AI - Skin Disease Detection",
    description: "A deep learning project to detect skin diseases using CNN models.",
    tech: ["Python", "TensorFlow", "Flask"],
    image: "/assets/image.png",
    link: "https://drive.google.com/file/d/1tTBVTcPv2cw-mBsZfOmeKmEWyqmc4FZI/view?usp=sharing",
  },
  {
    title: "WorldExplorer – Travel Planner with AI",
    description: "A smart travel planning app that generates optimized itineraries using AI and map APIs.",
    tech: ["MERN", "Google Maps API", "OpenAI/Gemini", "Tailwind"],
    image: "/assets/worldexplorer.png",
    link: "https://worldexplorer-umber.vercel.app/",
  },
  {
    title: "Orion Agent – Autonomous AI Operations",
    description: "An intelligent agent that autonomously understands tasks, plans actions, and executes using APIs and tools, powered by LLMs.",
    tech: ["Python", "FastAgent", "Gemini/GPT", "Flask", "LangChain"],
    image: "/assets/orion.png",
    link: "https://github.com/RoysonDsz/Orion-Agent",
  },
  {
    title: "TuneTriumph – Music Streaming & Discovery App",
    description: "A dynamic music streaming platform where users can discover, stream, and manage their favorite tracks with personalized recommendations.",
    tech: ["React", "Node.js", "MongoDB", "youtube API", "Tailwind", "Framer Motion", "FFmpeg"],
    image: "/assets/tunetriumph.png",
    link: "https://github.com/RoysonDsz/TuneTriumph",
  },
  {
    title: "LinkedIn Job Apply Bot",
    description: "A powerful automation bot that logs into LinkedIn and applies to jobs with Easy Apply using Selenium – saving hours of manual hustle.",
    tech: ["Python", "Selenium", "ChromeDriver", "BeautifulSoup"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfJj-P5uYfONoCHtH8RWE9NUG1a5rYFLG2kraUxNMz9Mq1spSr3wFyMhNsLFY2dl4FJM&usqp=CAU",
    link: "https://github.com/RoysonDsz/LinkedApply-Bot",
  },
  {
    title: "TempGen Bot",
    description: "A Telegram bot that generates temporary emails and phone numbers using RapidAPI.",
    tech: ["Python", "Flask", "Telegram Bot API", "MongoDB"],
    image: "/assets/tempgen.png",
    link: "https://github.com/RoysonDsz/TempGenBot",
  },
  {
    title: "Vehicle Rental System",
    description: "A web app for renting vehicles online with secure payments.",
    tech: ["HTML", "CSS", "PHP", "Mysql", "XAMPP"],
    image: "/assets/car.jpg",
    link: "https://github.com/yourusername/vehicle-rental",
  },
  {
  title: "Society Sync – Smart Society Management App",
  description: "A full-featured mobile app that simplifies apartment and building management with role-based access. Features include building management, assigning presidents, resident interaction, and maintenance tracking.",
  tech: ["React Native", "Node.js", "Express", "MongoDB", "JWT"],
  image: "/assets/societysync.png",
  link: "https://github.com/RoysonDsz/SocietySync-app", // Change this to your actual live link or GitHub repo
},
{
  title: "ClipIt – Ultimate Media Downloader",
  description: "A powerful full-stack web app that lets users download videos and music from YouTube, Spotify, and Instagram in one seamless UI. Powered by yt-dlp for deep media extraction.",
  tech: ["Vite", "React", "Flask", "Python", "yt-dlp"],
  image: "https://static.wikia.nocookie.net/roblox/images/0/04/Clip_It_Old.png/revision/latest?cb=20240529172527", // Replace with your actual image path
  link: "https://github.com/RoysonDsz/ClipIt", // Replace with actual link or GitHub repo
},
  {
    title: "Portfolio Website",
    description: "A fully responsive and animated personal portfolio website.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/port.png",
    link: "https://roysondsz.vercel.app",
  },
  {
    title: "Global Sympathy",
    description: "A modern static website for the company overview.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "/assets/GS.png",
    link: "https://www.globalsympathy.org/",
  },
  {
    title: "Vision flow tech",
    description: "An official website build for the company.",
    tech: ["React", "Tailwindcss", "threejs"],
    image: "/assets/vft.png",
    link: "https://www.visionflowtech.com/",
  },
  {
    title: "Sri Ram Industries",
    description: "An official website build for the company build with some cutting edge design.",
    tech: ["React", "Traditionalcss"],
    image: "/assets/sri.png",
    link: "http://www.srind.in/home",
  },
];

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="portfolio" className="relative min-h-screen text-white py-20 px-6">
      {/* Header Section */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold font-serif text-center mb-15 text-blue-400 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto relative z-10">
        {visibleProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
            />
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Show More Button */}
      <div className="relative flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 text-white font-semibold rounded-lg transition-all"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
