"use client"; // Required for GSAP animations
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const [formattedDate, setFormattedDate] = useState("");
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
    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "long" });
      const year = date.getFullYear();

      // Function to add ordinal suffix (st, nd, rd, th)
      const getOrdinal = (n) => {
        if (n > 3 && n < 21) return "th"; // Covers 11th to 19th
        switch (n % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };

      return `${day}${getOrdinal(day)} ${month} ${year}`;
    };

    setFormattedDate(formatDate(new Date())); // Format current date
  }, []);

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
    <section
      ref={sectionRef}
      className="w-full h-screen before:inset-0 before:bg-[#10161F] before:opacity-30  bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* <div className="relative flex  flex-row-reverse gap-9 px-9 top-16">
        <h4 className=" flex gap-4 flex-col">
          Portfolio
        </h4>
        <h4>More Projects</h4>
        <h4>Writings</h4>
      </div> */}

      <div className="flex flex-col pt-16 pl-6  md:pl-6 lg:pl-6 max-w-7xl mx-auto">
        <h4 className="px-16 text-[#EAFFFF] flex flex-row-reverse py-6">
          This Seems Cool | {formattedDate}
        </h4>
        <h1 className="text-[5rem] md:text-[10rem] lg:text-[16rem] max-w-7xl sm:text-6xl text-center tracking-[0.05em]  lg:tracking-[0.1em] w-full flex justify-center">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="relative inline-block text-[#EAFFFF] hover:text-transparent bg-clip-text bg-cover bg-center"
              style={{
                backgroundImage: `url(${letter.img})`,
              }}
            >
              {letter.char}
            </span>
          ))}
        </h1>
        <div className="">
          <h4 className=" px-5 text-[#EAFFFF]">
            Choose to stay in the VOID then LIGHT will come
          </h4>
        </div>
        <h4 className="  relative py-10 -top-2 px-5 text-[#EAFFFF]">
          Choose to stay in the VOID then LIGHT will comeChoose to stay in the
          VOID then LIGHT will comeChoose to stay in the VOID then LIGHT will
          comeChoose to stay in the VOID then LIGHT will comeChoose to stay in
          the VOID then LIGHT will comeChoose to stay in the VOID then LIGHT
          will comeChoose to stay in the VOID then LIGHT will comeChoose to stay
          in the VOID then LIGHT will comeChoose to stay in the VOID then LIGHT
          will comeChoose to stay in the VOID then LIGHT will come
        </h4>
        <div className=" self-start  -top-4 w-3/6 relative flex ">
          <Image src="/images/qr.png" width={500} height={300} alt=""  className="w-full h-auto"></Image>
        </div>
      </div>
    </section>
  );
}

export default Section1;
