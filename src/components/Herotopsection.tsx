import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Royson_Dsouza-Resume v4.pdf";
    link.download = "Royson_Dsouza_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col min-h-screen md:max-w-screen text-white">
      {/* Background Image with Dark Overlay */}
      <div
        className="
          absolute z-[-1] inset-0 
          bg-[url('/assets/iii.jpg')] 
          bg-cover bg-center 
          before:content-[''] before:absolute before:inset-0 
          before:bg-black before:opacity-80 
        "
      />

      {/* Content Section */}
      <div className="relative w-full md:w-1/2 text-center mt-[40%] md:mt-[10%] md:ml-5 space-y-4 z-10">
        <h1 className="text-5xl sm:text-6xl font-bold mb-2 text-white">
          Welcome to my <span className="text-blue-400">Portfolio</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl pt-2 font-semibold text-yellow-400">
          Hello, It's Me
        </h2>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-green-400">
          Royson Dsouza
        </h2>
        <h3 className="text-3xl sm:text-3xl font-semibold mt-2 text-blue-400">
          And I'm a <span className="text-white">
            <Typewriter
              words={["Web Developer", "Software Engineer", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <button
          onClick={handleDownload}
          className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-gray-900 px-6 py-2 rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-700 transition"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}
