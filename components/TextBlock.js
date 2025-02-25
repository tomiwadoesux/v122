"use client"; // Required for GSAP animations
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TextBlock({ content }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={textRef} className="w-2/3 sm:w-2/3 md:w-1/3 mx-3 sm:mx-5 text-base sm:text-base md:text-base lg:text-lg text-justify text-black font-inter">
      <h4 className="" >{content}</h4>
    </div>
  );
}

