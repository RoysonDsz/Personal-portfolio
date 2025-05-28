import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/Royson_Dsouza_Resume v5.pdf";
    link.download = "Royson_Dsouza_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="relative flex flex-col min-h-screen md:max-w-screen text-white">
      {/* Background Image with Dark Overlay */}
      <div
        className="
          fixed z-[-1] inset-0 
          bg-[url('/assets/bg-hex.jpg')] 
          bg-cover bg-center 
          before:content-[''] before:absolute before:inset-0 
          before:bg-black before:opacity-80 
        "
      />

      {/* Content Section */}

<div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-0">
  {/* Content Section */}
  <div className="relative w-full md:w-[40%] text-center mt-[40%] md:mt-[5%] md:ml-0 space-y-4 z-10">
<div className="leading-tight font-serif">
    <h2 className="text-2xl sm:text-xl ml-10 text-left md:ml-30 font-medium text-white/70 ">
    Hey, I'm
  </h2>
  <h2 className="text-5xl sm:text-7xl font-bold text-green-400 mr-30 md:mr-0 ml-0">
    Royson
  </h2>
  <h2 className="text-5xl sm:text-7xl ml-30 md:ml-70 font-bold text-blue-400 mt-1">
    Dsouza
  </h2>
</div>
    <h3 className="text-3xl sm:text-3xl font-semibold mt-2 md:ml-10 text-blue-400">
      I'm a <span className="text-white">
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

  {/* Image Section */}
  <div className="w-full md:w-[45%] mt-10 md:mt-20 md:mr-10 flex justify-center">
<img
  src={"/assets/mypic2.png"}
  alt="Royson Dsouza"
  className="w-[350px] h-[590px] object-cover shadow-3xl mix-blend-soften opacity-70"
/>

  </div>
</div>

    </div>
  );
}
