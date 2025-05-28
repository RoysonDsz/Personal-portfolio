import { motion } from "framer-motion";

const timelineData = [
  { year: "2017", title: "Schooling", company: "Holy Redeemer English Medium School, Belthangady" },
  { year: "2019", title: "Pre-University", company: "Sacred Heart PU College, Madanthyar" },
  { year: "2022", title: "Diploma in Engineering", company: "SNM Polytechnic, Moodbidri" },
  { year: "2025", title: "BE (CSE)", company: "St Joseph Engineering College, Mangalore" },
  { year: "Internship", title: "Web Development Intern", company: "Codelab Systems" },
  { year: "Internship", title: "Salesforce Administrator", company: "Smart Internz" },
  { year: "Internship", title: "Full Stack Developer Intern", company: "Vision Flow Technologies" },
];

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen py-20 px-5 bg-cover"
    >
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16 text-xl p-6 
             backdrop-blur-lg 
            rounded-2xl shadow-lg 
            shadow-blue-500/30 
            border border-white/30"
      >
        <h2 className="text-center text-5xl text-blue-400 font-serif font-bold mb-3">About Me</h2>
        <p className="text-white/90 text-center leading-relaxed">
          
          I am a passionate Computer Science Engineering student with a strong foundation in both theoretical concepts and practical applications. My journey through education has equipped me with diverse skills in software development, particularly in web technologies and full-stack development.
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto mb-16 text-xl p-6 
             backdrop-blur-lg 
            rounded-2xl shadow-lg 
            shadow-blue-500/30 
            border border-white/30">
      <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-blue-400 mb-16 relative z-10">
        EDUCATION & EXPERIENCE
      </h2>
      


      <div className="max-w-3xl mx-auto space-y-20">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center border border-blue-400 shadow-2xl rounded-lg p-5"
          >
            <div className="text-center">
              <p className="text-blue-400 text-xl font-semibold">{item.year}</p>
              <h3 className="text-2xl text-white/80 font-bold">{item.title}</h3>
              <p className="text-gray-400 text-xl">{item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default About;