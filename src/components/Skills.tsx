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
  <div
  id="skills-section"
  className="relative min-h-screen mb-20 py-12 px-6 md:px-12 flex items-center justify-center"
>
  {/* Glassy Blue Border Box */}
  <div className="w-full max-w-5xl backdrop-blur-md border border-white/30 rounded-2xl shadow-lg 
            shadow-blue-500/30 p-8 md:p-12 text-white text-center">
    <h2 className="text-4xl md:text-6xl font-bold font-serif text-blue-400">PROFESSIONAL</h2>
    <p className="text-xl mt-2 mb-10">MY KNOWLEDGE LEVEL IN SOFTWARE</p>

    {skills.map((skill, index) => (
      <div key={index} className="mb-6 text-left">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-white">{skill.name}</span>
          <span className="text-white">{skill.level}%</span>
        </div>
        <div className="w-full h-5 bg-gray-800 rounded-full overflow-hidden">
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