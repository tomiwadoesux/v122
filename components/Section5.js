"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section5() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const images = containerRef.current.querySelectorAll(".parallax-img");

      images.forEach((img, index) => {
        gsap.to(img, {
          y: index % 2 === 0 ? "60%" : "60%", // Alternating up and down movement
          ease: "power1.out",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5, // Smooth floating effect
          },
        });
      });
    }
  }, []);

  return (
    <section className="py-0 relative">
      <div
        ref={containerRef}
        className="relative top-28 flex flex-col sm:flex-row gap-9 max-w-9xl  mx-auto px-3 justify-center items-center"
      >
        {/* Left Side - Images */}
        <div className="flex gap-32 mx-9 flex-row md:flex-col">
          <img
            className="parallax-img hidden sm:block rounded self-end w-[40%] md:w-[60%] lg:w-[90%] h-auto"
            src="/images/frog.jpg"
          />
          <img
            className="parallax-img hidden sm:block self-end rounded w-[40%] md:w-[80%] lg:w-[60%] h-auto"
            src="/images/corgi.jpg"
          />
        </div>

        {/* Center - Text and Images */}
        <div className="flex gap-4 flex-col">
          <h3 className="relative  text-6xl md:text-8xl lg:text-9xl text-[#EAFFFF] font-bold whitespace-nowrap text-center">
            VIDEOS BY SORA
          </h3>
          <div className="flex flex-col gap-14">
            <video
              className="parallax-img rounded w-[90%] self-center sm:w-screen  lg:w-[60%] h-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/room.mp4" type="video/mp4" />
            </video>
            <video
              className="parallax-img rounded w-[90%] self-center lg:hidden sm:w-screen lg:w-[60%] h-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/room.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right Side - More Images */}
        <div className="flex gap-32 mx-9 flex-row md:flex-col">
          <img
            className="parallax-img hidden sm:block self-start rounded w-[40%] md:w-[50%] lg:w-[60%] h-auto"
            src="/images/runway.jpg"
          />
          <img
            className="parallax-img hidden sm:block rounded w-[40%] md:w-[50%] lg:w-[90%] h-auto"
            src="/images/runway.jpg"
          />
        </div> 
      </div>
    </section>
  );
}
