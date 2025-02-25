"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextBlock from "./TextBlock";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const topTextRef = useRef(null);
  const sectionRef = useRef(null);
  const mainTextRef = useRef(null);
  const marqueeTextRef = useRef(null);

  useEffect(() => {
    const topText = topTextRef.current;
    const section = sectionRef.current;
    const marquee = marqueeTextRef.current;

    // Duplicate content for seamless looping
    topText.innerHTML += topText.innerHTML;
    marquee.innerHTML += marquee.innerHTML; // Ensures infinite loop

    // Animate marquee (NEXT.JS logos)
    gsap.to(topText, {
      x: "-50%",
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    // Animate background color only (NOT the tiled image)
    gsap.to(sectionRef.current, {
      backgroundColor: "#10161F", // Background stays black
      color: "#EAFFFF", // Text stays white
      duration: 0.5,
      scrollTrigger: {
        trigger: mainTextRef.current, // Starts at "THE WEBSITE IS BUILT ON"
        endTrigger: ".images-section", // Ends after "IMAGES BY"
        start: "top 80%",
        end: "bottom 80%", // Extends the effect further down
        toggleActions: "play none none reverse",
      },
    });

    // "EXCEPT THIS" Marquee (Moves left infinitely)
    gsap.to(marquee, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="transition-colors duration-500 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/pngegg.png')",
        backgroundSize: "15%",
        backgroundRepeat: "repeat",
      }}
    >
      {/* "EXCEPT THIS" Marquee */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-transparent py-10">
        <div
          ref={marqueeTextRef}
          className="flex flex-nowrap gap-16 items-center"
        >
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="inline-flex items-center gap-8">
                <h1 className="text-3xl font-bold">EXCEPT THIS</h1>
                <img
                  src="/images/black.jpg" // Replace with actual image path
                  alt="black"
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="relative sm:left-8 flex flex-col sm:flex-row gap-16 max-w-7xl mx-auto px-3 justify-center items-center">
        {/* Left Side - Large Image */}
        <img
          className="rounded w-[90%] sm:w-screen md:w-[50%] lg:w-[45%] h-auto md:mx-9 block mx-auto sm:mx-0"
          src="/images/runway.jpg"
        />

        {/* Right Side - Two Bigger Stacked Images */}
        <div className="flex gap-16 flex-col">
          <img
            className="hidden sm:block rounded self-start w-[60%] sm:w-[40%] md:w-[60%] lg:w-[55%] h-auto md:mx-9"
            src="/images/frog.jpg"
          />
          <img
            className="hidden sm:block rounded self-end w-[60%] sm:w-[40%] md:w-[60%] lg:w-[55%] h-auto md:mx-9"
            src="/images/corgi.jpg"
          />
        </div>
      </div>
      <div className="relative top-14">
        <div className=" flex flex-col sm:flex-row items-center justify-between w-full bg-transparent text-center sm:text-left gap-2 sm:gap-3">
          <div className="flex w-full text-[#EAFFFF] justify-center sm:justify-between gap-16 sm:gap-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              THE
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              WEBSITE
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              IS
            </h1>
          </div>

          <div className=" text-[#EAFFFF] flex w-full justify-center sm:justify-between gap-28 sm:gap-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              BUILT
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              ON
            </h1>
          </div>
        </div>

        {/* Top Marquee (NEXT.JS moving left to right) */}
        <div className="w-full overflow-hidden whitespace-nowrap bg-transparent py-2">
          <div ref={topTextRef} className="flex gap-6 items-center">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <img
                  key={index}
                  src="/images/nextjs.png"
                  alt="Next.js Logo"
                  className="h-4 sm:h-4 md:h-4 lg:h-4 object-contain"
                />
              ))}
          </div>
        </div>
      </div>
      {/* <div className="top-28 -left-5 flex flex-row gap-5 relative max-w-7xl mx-auto px-5">
        <div className="flex flex-row self-end gap-6">
          <h3 className="pl-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            IMAGES
          </h3>
          <h3 className="pl-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            BY
          </h3>
        </div>

        <div  >
          <h4 className="text-justify">
            Random Thought: Ever wonder what it’d be like to just float away on
            a cloud and leave all the chaos behind? So`metimes, I catch myself
            staring at the sky, imagining what it’d feel like to ride the
            breeze. Where would it take me? Over mountains, across oceans, or
            maybe to the quietest, most peaceful place I’ve never even dreamed
            of? There’s something so freeing about the idea of being
            weightless.... MY WRITINGS
          </h4>
        </div>
      </div> */}
      ``
    </section>
  );
}

export default Section2;
