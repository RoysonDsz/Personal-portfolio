import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 85 },
  { name: "React", level: 70 },
  { name: "Tailwind", level: 75 },
  { name: "Mongodb", level: 85 },
  { name: "Express", level: 60 },
  { name: "JavaScript", level: 75 },
  { name: "HTML & CSS", level: 80 },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="skills-section" className="relative min-h-screen mb-20 md:rounded-tr-4xl md:rounded-br-4xl md:pl-10 py-10 px-10 md:px-20 md:max-w-[60%] bg-gray-900 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 md:rounded-tr-4xl  md:rounded-br-4xl"  />
      <div className="absolute inset-0 md:bg-gray-900 bg-opacity-70 md:rounded-tr-4xl md:rounded-br-4xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-blue-400">PROFESSIONAL</h2>
        <p className="text-xl mt-2 mb-8">MY KNOWLEDGE LEVEL IN SOFTWARE</p>
        
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden mt-1">
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}