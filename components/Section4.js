"use client"; // Required for GSAP in Next.js
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section4() {
  const [hoveredText, setHoveredText] = useState(null);
  const textRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const words = containerRef.current.querySelectorAll("span"); // Select all words

      gsap.to(words, {
        color: "#EAFFFF", // Instantly turn white
        stagger: 0.1, // One word at a time across the entire array
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true, // Controlled by scroll
        },
      });
    }
  }, []);

  const lines = [
    "OPEN UP THE DOOR",
    "CAN YOU OPEN UP THE DOOR?",
    "I KNOW YOU SAID BEFORE",
    "YOU CAN'T COPE WITH ANYMORE",
    "YOU TOLD ME IT WAS WAR, SAID YOU'D",
    "SHOW ME WHAT'S IN STORE",
    "I HOPE IT'S NOT FOR SURE, CAN YOU",
    "OPEN UP THE DOOR?",
  ];

  // const textItems = [
  //   { id: 1, text: "BIG OCTOPUS IN SPACE", image: "/images/frog.jpg" },
  //   { id: 2, text: "RICH CAT", image: "/images/frog.jpg" },
  //   { id: 3, text: "GOLD LEAF ON LIPS", image: "/images/frog.jpg" },
  //   { id: 4, text: "BLACK MONALISA", image: "/images/frog.jpg" },
  // ];

  return (
    <section>
  
          

      <div className=" flex flex-col text-[#EAFFFF] sm:flex-row items-center justify-between w-full relative pt-24 bg-transparent text-center sm:text-left gap-2 sm:gap-3">
        {/* <div className="flex w-[90%] self-center justify-center sm:justify-between gap-16 sm:gap-6">
          <h1 className="text-6xl md:text-9xl font-bold">
            A
          </h1>
          <h1 className="text-6xl md:text-9xl  font-bold">
            SONG
          </h1>
          <h1 className="text-6xl md:text-9xl font-bold">`
            BY
          </h1>
          <h1 className="text-6xl md:text-9xl font-bold">
            BILLIE
          </h1>
          <h1 className="text-6xl md:text-9xl font-bold">
            EILISH
          </h1>
        </div> */}
      </div>

      <div
        ref={containerRef}
        className="px-9 text-[#EAFFFF] relative py-36 flex flex-col gap-5"
      >
        {lines.map((line, index) => (
          <h1
            key={index}
            className="  text-2xl self-center sm:text-3xl md:text-[3.2rem] lg:text-6xl font-bold"
          >
            {/* Splitting each line into words */}
            {line.split(" ").map((word, i) => (
              <span
                key={`${index}-${i}`}
                className="text-[#171f2b] inline-block pr-2"
              >
                {word}
              </span>
            ))}
          </h1>
        ))}
      </div>
      {/* <div className=" justify-center gap-8 relative top-60 flex flex-row">
        <img className=" relative top-7 w-[15%] h-[15%] self-center" src="/images/billie2.png" />

    </div> */}

      {/* <div className="items-start top-96 relative flex flex-col gap-12 max-w-7xl  mx-auto px-5">
        {textItems.map((item) => (
          <div key={item.id} className="relative flex items-center">
            <h2
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-9xl transition-all duration-500  ${
                hoveredText?.id === item.id ? "text-white" : "outlined-text"
              }`}
              onMouseEnter={() => setHoveredText(item)}
              onMouseLeave={() => setHoveredText(null)}
            >
              {item.text}
            </h2>


            {hoveredText?.id === item.id && (
              <img
                src={hoveredText.image}
                alt="Hover Image"
                className="absolute left-full ml-6 w-60 h-60 object-cover opacity-100 transition-opacity duration-500"
              />
            )}
          </div>
        ))}
      </div>
     */}
    </section>
  );
}
export default Section4;
