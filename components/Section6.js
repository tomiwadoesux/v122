"use client"; // Required for GSAP in Next.js
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Section6() {
  const [hoveredText, setHoveredText] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const moveImage = (e) => {
      if (hoveredText) {
        gsap.to(imageRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveImage);
    return () => window.removeEventListener("mousemove", moveImage);
  }, [hoveredText]);

  const textItems = [
    { id: 1, text: "OCTOPUS IN SPACE", image: "/images/frog.jpg" },
    { id: 2, text: "RICH CAT", image: "/images/frog.jpg" },
    { id: 3, text: "GOLD LEAF ON LIPS", image: "/images/frog.jpg" },
    { id: 4, text: "BLACK MONALISA", image: "/images/frog.jpg" },
  ];

  return (
    <section className="py-24">
    <div className="relative  z-20 flex flex-col gap-24 md:gap-16 max-w-full` pt-60 px-10">
      {textItems.map((item) => (
        <div key={item.id} className="relative flex items-center">
          <h2
            className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl transition-all duration-500 ${
              hoveredText?.id === item.id ? "text-[#EAFFFF]" : "outlined-text"
            }`}
            onMouseEnter={() => setHoveredText(item)}
            onMouseLeave={() => setHoveredText(null)}
          >
            {item.text}
          </h2>
        </div>
      ))}

      {/* Cursor-following Image */}
      {hoveredText && (
        <img
          ref={imageRef}
          src={hoveredText.image}
          alt="Hover Image"
          className="absolute w-60 h-60 object-cover opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      )}
    </div>
    </section>
  );
}

export default Section6;
