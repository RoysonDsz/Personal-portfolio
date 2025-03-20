import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Skin Disease Detection",
    description: "A deep learning project to detect skin diseases using CNN models.",
    tech: ["Python", "TensorFlow", "Flask"],
    image: "/assets/image.png",
  },
  {
    title: "Vehicle Rental System",
    description: "A web app for renting vehicles online with secure payments.",
    tech: ["HTML", "CSS", "PHP","Mysql","XAMPP"],
    image: "/assets/car.jpg",
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive and animated personal portfolio website.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/assets/port.png",
  },
  {
    title: "Global Sympathy",
    description: "A modern static website for the company overview.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    image: "/assets/GS.png",
  },
  {
    title: "Vision flow tech",
    description: "An official website build for the company.",
    tech: ["React", "Tailwindcss", "threejs"],
    image: "/assets/vft.png",
  },
  {
    title: "Sri Ram Industries",
    description: "An official website build for the company build with some cutting edge design.",
    tech: ["React", "Traditionalcss"],
    image: "/assets/sri.png",
  },
];

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="relative min-h-screen md:bg-gradient-to-b from-blue-400 to-blue text-white py-20 px-6"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-[url('/path/to/your/background.jpg')] bg-cover bg-center opacity-20"></div>

      {/* Header Section */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-center mb-15 md:text-white text-blue-400 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
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
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="relative flex justify-center mt-10 z-20">
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
