import React, { useEffect, useRef } from "react";
import bgImage from "../assets/Robo model.mp4";
import gsap from "gsap";

const MainSection = () => {
  const TextRef = useRef(null);
  const Text1Ref = useRef(null);
  const Text2Ref = useRef(null);
  const Text3Ref = useRef(null);
  const vedioRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(TextRef.current, {
      opacity: 0,
      y: 0,
    });

    tl.set(Text1Ref.current, {
      opacity: 0,
      y: 0,
    });

    tl.set(Text2Ref.current, {
      opacity: 0,
      y: 0,
    });

    tl.set(Text3Ref.current, {
      opacity: 0,
      y: 0,
    });

    tl.to(TextRef.current, {
      opacity: 1,
      duration: 1,
      y: 30,
      delay: 1,
    });

    tl.to(Text1Ref.current, {
      opacity: 1,
      duration: 0.5,
      y: 30,
    });

    tl.to(Text2Ref.current, {
      opacity: 1,
      duration: 0.5,
      y: 30,
    });

    tl.to(Text3Ref.current, {
      opacity: 1,
      duration: 0.5,
      y: 30,
    });
  }, []);

  useEffect(() => {
    const vd = gsap.timeline();

    vd.set(vedioRef.current, {
      opacity: 0,
//       x: 90,
      scale: 0.3
    });

    vd.to(vedioRef.current, {
      opacity: 1,
      duration: 0.5,
      scale: 1,
      delay: 0.5
    });
  }, []);

  return (
    <>
      <div className="w-2/4 max-sm:w-full flex flex-col">
        <h1
          ref={TextRef}
          className="md:text-4xl lg:text-5xl text-5xl font-poppins font-bold mb-4 leading-tight"
        >
          Find The Perfect Job <br /> For You
        </h1>
        <p ref={Text1Ref} className="text-md font-roboto font-normal mb-8">
          Search Your Carrer Opportunity thought 18200+ Jobs
        </p>

        <div ref={Text2Ref} className="flex md:w-full lg:w-2/4 w-2/4 max-sm:w-full">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
          />
          <button className="bg-[#0096C7] text-white px-6 py-2 rounded-r-lg hover:bg-[#0077B6] transition">
            Search
          </button>
        </div>
        <div className="w-2/4 flex mt-5 items-center">
          <h3 ref={Text3Ref}>Popular Searches</h3>
        </div>
      </div>

      <div className="w-2/4 max-sm:hidden flex justify-center items-center">
        <video
          ref={vedioRef}
          className="w-2/3 md:w-full lg:w-2/3 rounded-full"
          src={bgImage}
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
};

export default MainSection;
