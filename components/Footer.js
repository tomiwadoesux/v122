"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);


  const letters = [
    { char: "A", img: "/images/swimming.png" },
    { char: "Y", img: "/images/citylights.png" },
    { char: "O", img: "/images/yellowhoodie.png" },
    { char: "T", img: "/images/mirror.png" },
    { char: "O", img: "/images/shadow.png" },
    { char: "M", img: "/images/night.png" },
    { char: "C", img: "/images/motel.png" },
    { char: "S", img: "/images/dog.png" },
  ];
  useEffect(() => {
    // Text Animation
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Background Scroll Effect
    gsap.to(sectionRef.current, {
      backgroundColor: "#ffffff", // Changes to white
      color: "0A1619", // Text color changes
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
        scrub: true,
      },
    });
  }, []);

  return (
    <footer className=" relative bg-[#EAFFFF] text-[#10161F] pt-20 px-10 rounded-t-3xl h-[50vh] md:h-[70vh] lg:h-screen">
      {/* <div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-6xl font-bold">A PORTFOLIO PROJECT</h2>
            <p className=" text-lg">ayotomiwawaledurojaye@gmail.com</p>
            <p className="text-sm"></p>
          </div>

          <div className="text-right">
            <h2 className="text-6xl font-bold">AYOTOMCS</h2>
            <p className="text-lg">© 2025 tomcs. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-20  text-center text-sm">
          <span className="mr-7">PORTFOLIO</span>
          <span className="mr-7">RANDOM PROJECT</span>
          <span>WRITING</span>
        </div>
        <h2 className=" md:text-[29rem] relative tracking-[0.1em] w-full justify-end text-center font-bold">
          TOMCS
        </h2>
      </div> */}

      <div className="gap-9" >
        <div >
          <h2 className="text-5xl md:text-8xl lg:text-9xl  font-bold">A Portfolio Project</h2>
          <a
            href="ayotomcs.me"
            className="text-lg  sm:text-xl underline"
          >
            ayotomcs.me
          </a>
          <p className="text-sm"> </p>
        </div>
        <div className=" relative top-24 md:top-40  lg:top-8 text-right" >
          <h2 className="text-6xl md:text-7xl lg:text-9xl text-right  font-bold">Contact Me</h2>
          <a
            href="mailto:ayotomiwawaledurojaye@gmail.com"
            className="text-lg md:text-2xl underline"
          >
            ayotomiwawaledurojaye@gmail.com
          </a>
          <p className="text-sm"> </p>
        </div>
        <div className=" relative hidden sm:block top-72 md:top-80 lg:top-14 px-9 text-center">
          <h1 className="text-[6rem]  md:text-[10rem] lg:text-[20rem] sm:text-6xl text-center  w-full flex justify-center">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="relative inline-block text-[#10161F] hover:text-transparent bg-clip-text bg-cover bg-center"
                style={{
                  backgroundImage: `url(${letter.img})`,
                }}
              >
                {letter.char}
              </span>
            ))}
          </h1>
          <p className=" w-full sm:text-lg md:text-xl">© 2025 ayotomcs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
