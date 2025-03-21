import { useEffect, useRef, useState } from "react";
import HeroTop from './Herotopsection';

const ScrollingCharacter = () => {
  const scrollY = useRef(0);
  const totalFrames = 300;
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      requestAnimationFrame(() => {
        const frameIndex = Math.min(
          Math.floor((scrollY.current / window.innerHeight) * totalFrames),
          totalFrames - 1
        );
        setCurrentFrame(frameIndex);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload images for smoother animation
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/images/male${String(i).padStart(4, "0")}.png`;
      }
    };
    preloadImages();
  }, []);

  // Format frame index to match file names (e.g., male0001.png)
  const formattedIndex = String(currentFrame + 1).padStart(4, "0");
  const imagePath = `/images/male${formattedIndex}.png`;

  return (
    <div className="relative w-auto z-0 h-screen overflow-hidden">
      {/* Background Image */}
      <div className="hidden md:block fixed ml-[50%] w-[50%] h-screen">
        <img
          src={imagePath}
          alt="Animated Character"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Area Section */}
      <section id="home">
        <HeroTop />
      </section>
    </div>
  );
};

export default ScrollingCharacter;
