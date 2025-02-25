"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalText() {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    // Horizontal scrolling animation
    gsap.to(textRef.current, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${window.innerWidth}`,
        scrub: 1,
        pin: true,
      }
    });

    // Each letter falls from above into place
    gsap.fromTo(
      letters,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.09, // Each letter animates one after another
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: 3,
        },
      }
    );
  }, []);

  const text = "ALL THE IMAGES AND VIDEOS OF THIS SITE IS AI GENERATED";

  return (
    <section ref={triggerRef} className=" bg-black relative w-full h-screen flex items-center text-white overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="" type="video/mp4" />
      </video>

      {/* Text Content - Horizontal Scroll + Falling Letters */}
      <div className="relative flex whitespace-nowrap w-full">
        <h1 ref={textRef} className="flex text-6xl md:text-9xl font-bold px-10">
          {text.split("").map((char, index) => (
            <span key={index} className="letter inline-block px-1">
              {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
