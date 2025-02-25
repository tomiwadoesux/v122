"use client"; // Required for GSAP in Next.js
import { useEffect, useRef,  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Section3() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  

  useEffect(() => {
    gsap.to(textRef.current, {
      text: "DALL-E", // Changes "IMAGES BY" to "DALL-E"
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
        once: true,
      },
    });
  }, []);

  useEffect(() => {
    const moveImages = (e) => {
      const { clientX, clientY } = e;

      gsap.to(containerRef.current.querySelectorAll(".parallax-img",  ), {
        x: (clientX - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientY - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });

      gsap.to(containerRef.current.querySelectorAll(".parallax-img2" ), {
        x: (clientY - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientX - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });

      gsap.to(containerRef.current.querySelectorAll(".parallax-img3" ), {
        x: (clientX - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientY - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });

      gsap.to(containerRef.current.querySelectorAll(".parallax-img4" ), {
        x: (clientY - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientX - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });

      gsap.to(containerRef.current.querySelectorAll(".parallax-img5" ), {
        x: (clientX - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientY - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });

      gsap.to(containerRef.current.querySelectorAll(".parallax-img6" ), {
        x: (clientY - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientX - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });
      gsap.to(containerRef.current.querySelectorAll(".parallax-img7" ), {
        x: (clientX - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientY - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });
      gsap.to(containerRef.current.querySelectorAll(".parallax-img8" ), {
        x: (clientY - window.innerWidth / 2) * 0.06, // Moves slightly left/right
        y: (clientX - window.innerHeight / 2) * 0.03, // Moves slightly up/down
        ease: "power2.out",
        duration: 0.3,
      });
     
    };

    window.addEventListener("mousemove", moveImages);
    return () => window.removeEventListener("mousemove", moveImages);
  }, []);

  return (
    <section className=" md:py-24 relative">
      <div
        ref={containerRef}
        className="relative top-28 flex flex-col sm:flex-row gap-16 max-w-9xl mx-auto px-3 justify-center items-center"
      >
        {/* Right Side - Two Bigger Stacked Images */}
        <div className="flex gap-9 md:gap-16 mx-9 flex-row md:flex-col">
          <img
            className="parallax-img rounded md:self-end w-[50%]  md:w-[75%] lg:w-[60%] h-auto md:mx-9"
            src="/images/frog.jpg"
          />
          <img
            className="parallax-img2 rounded self-start w-[50%]  md:w-[75%] lg:w-[60%] h-auto md:mx-9"
            src="/images/corgi.jpg"
          />
          <img
            className=" hidden sm:block parallax-img3 rounded self-end w-[40%] md:w-[75%] lg:w-[60%] h-auto md:mx-9"
            src="/images/corgi.jpg"
          />
        </div>

        <div className="  flex gap-32 flex-col">
          <img
            className="parallax-img4 hidden sm:block rounded w-[90%] self-center sm:w-screen md:w-[85%] lg:w-[60%] h-auto md:mx-9 block mx-auto sm:mx-0"
            src="/images/runway.jpg"
          />

          <div className="flex flex-row self-center gap-6">
            <h3
              ref={textRef}
              className=" relative pl-4 text-8xl md:text-8xl lg:text-9xl sm:6xl  text-[#EAFFFF] font-bold whitespace-nowrap"
            >
              IMAGES BY
            </h3>
          </div>

          <img
            className="parallax-img5 self-center rounded w-[90%] self-center sm:w-screen md:w-[85%] lg:w-[60%] h-auto md:mx-9 block mx-auto sm:mx-0"
            src="/images/runway.jpg"
          />
        </div>

        <div className="flex gap-16 flex-row md:flex-col">
          <img
            className="parallax-img6 sel  rounded w-[40%] self-start sm:w-screen md:w-[75%] lg:w-[60%] h-auto md:mx-9 block mx-auto sm:mx-0"
            src="/images/runway.jpg"
          />
          <img
            className="parallax-img7  rounded w-[40%] sm:w-screen self-end md:w-[75%] lg:w-[60%] h-auto md:mx-9 block mx-auto sm:mx-0"
            src="/images/runway.jpg"
          />
          <img
            className="parallax-img8 hidden sm:block rounded w-[40%] sm:w-screen self-start md:w-[75%] lg:w-[60%] h-auto md:mx-9 block mx-auto sm:mx-0"
            src="/images/runway.jpg"
          />
        </div>
      </div>

      {/* <div className="flex flex-col relative top-52 mx-6 max-w-7xl">
        <h3 className="pl-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold whitespace-nowrap">
          VIDEOS BY SORA
        </h3>
        <h4 className="text-justify text-center w-2/3 text-white sm:text-justify ">
          Random Thought: Ever wonder what it’d be like to just float away on a
          cloud and leave all the chaos behind? Sometimes, I catch myself
          staring at the sky, imagining what it’d feel like to ride the breeze.
          Where would it take me? Over mountains, across oceans, or maybe to the
          quietest, most peaceful place I’ve never even dreamed of? There’s
          something so freeing about the idea of being weightless.... MY``
          WRITINGS
        </h4>
      </div> */}

      {/* <div className="relative top-28 -left-5 flex flex-row gap-5 max-w-7xl mx-auto px-5">
        <div className="flex flex-row self-end gap-6">
          <h3
            ref={textRef}
            className=" relative pl-4 text-8xl md:text-8xl lg:text-9xl sm:6xl  text-white font-bold whitespace-nowrap"
          >
            IMAGES BY
          </h3>
        </div>
      </div> */}

      {/* Hoverable Outlined Text */}
     
      {/* <div className="flex flex-col relative top-52 mx-12 max-w-7xl">
        <h3 className="pl-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold whitespace-nowrap">
          VIDEOS BY SORA
        </h3>
        <h4 className="text-justify text-center w-2/3 text-white sm:text-justify ">
          Random Thought: Ever wonder what it’d be like to just float away on a
          cloud and leave all the chaos behind? Sometimes, I catch myself
          staring at the sky, imagining what it’d feel like to ride the breeze.
          Where would it take me? Over mountains, across oceans, or maybe to the
          quietest, most peaceful place I’ve never even dreamed of? There’s
          something so freeing about the idea of being weightless.... MY
          WRITINGS
        </h4>
      </div> */}
    </section>
  );
}
