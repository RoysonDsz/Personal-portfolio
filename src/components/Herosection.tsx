import { useEffect, useState } from "react";
import HeroTop from './Herotopsection'

const ScrollingCharacter = () => {
  const [scrollY, setScrollY] = useState(0);
  const totalFrames = 300; // You have 300 images

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate frame index based on scroll position
  const frameIndex = Math.min(
    Math.floor((scrollY / window.innerHeight) * totalFrames),
    totalFrames - 1
  );

  // Format number to match file naming convention (e.g., male0001, male0002, ..., male0300)
  const formattedIndex = String(frameIndex + 1).padStart(4, "0"); // Converts 1 to "0001", 10 to "0010", etc.
  const imagePath = `/images/male${formattedIndex}.png`;

  console.log("Loading image:", imagePath); // Debugging: Check image path in console

  return (
    <div className="relative w-auto z-0 h-screen overflow-hidden">
      {/* Background Image */}
      <div className="hidden md:block fixed ml-[50%] w-[50%] h-screen">
        <img
          src={imagePath}
          alt="Animated Character"
          className="w-full h-full object-cover"
        />
      </div>
    
{/* Text Area Section */}
<section
  id="home"
>
  <HeroTop/>
</section>

    </div>
  );
};

export default ScrollingCharacter;

