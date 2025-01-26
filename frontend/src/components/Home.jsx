import React, { useEffect, useRef } from "react";
import NavBar from "../pages/NavBar";
import MainSection from "../pages/MainSection";
import TrendingJobs from "../pages/TrendingJobs";
import JobOffers from "../pages/JobOffers";
import JobDetails from "../pages/JobDetails";
import ExploreJobSearch from "../pages/ExploreJobSearch";
import JobList from "../pages/JobList";
import gsap from "gsap";

const Home = () => {
  // Create refs for each component
  const navBarRef = useRef(null);
  const trendingJobsRef = useRef(null);
  const jobListRef = useRef(null);
  const exploreJobSearchRef = useRef(null);
  const mainSectionRef = useRef(null);

  // GSAP Animation on Component Mount
  useEffect(() => {
    // Get all refs as an array
    const components = [
      navBarRef.current,
      mainSectionRef.current,
      trendingJobsRef.current,
      jobListRef.current,
      exploreJobSearchRef.current,
    ];

    // Set initial position: move all components below the viewport
    gsap.set(components, { y: 100, opacity: 0 });
    // gsap.set(component, { x: 100, opacity: 0 });

    // Animate components from bottom to top with a stagger effect
    gsap.to(components, {
      y: 0,
      opacity: 1,
      duration: 1, // Animation duration in seconds
      //   stagger: 0.4, // Delay between each component's animation
      ease: "power3.out", // Smooth easing function
    });

    // gsap.from(component, {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1, // Animation duration in seconds
    //     stagger: 0.4, // Delay between each component's animation
    //     ease: "power3.out", // Smooth easing function
    //   });
  }, []);

  return (
    <header className="flex justify-between items-center flex-col text-white md:gap-20 py-6 px-6">
      {/* Attach refs to each component */}
      <div
        className="flex w-full md:w-[80%] justify-between items-center px-4 md:px-20 py-2 rounded-full sticky top-1 bg-[#0096C7] z-50"
        ref={navBarRef}
      >
        <NavBar />
      </div>
      <div
        ref={mainSectionRef}
        className="container max-md:w-full max-sm:flex-col max-sm:w-full max-sm:px-4 flex bg-cover text-black object-fill h-[50%] bg-no-repeat py-3 mx-auto w-[75%] items-center"
      >
        <MainSection />
      </div>
      <div className="max-sm:w-full max-sm:mt-20 w-[80%] bg-[#CAF0F8]" ref={trendingJobsRef}>
        <TrendingJobs />
      </div>
      <div className="max-sm:w-full max-sm:mt-20 w-[80%] bg-[#CAF0F8]" ref={jobListRef}>
        <JobList />
      </div>
      <div
        class="flex w-[80%] flex-wrap md:flex-nowrap gap-6 p-6"
        ref={exploreJobSearchRef}
      >
        <ExploreJobSearch />
      </div>
    </header>
  );
};

export default Home;
