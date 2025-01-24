import React, { useEffect, useRef } from "react";
import gsap from "gsap"

const TrendingJobs = () => {

  const jobs = [
    {
      title: "Crisis Intervention Specialist",
      location: "Canada - Remote",
      salary: "$97,500",
      average: "Avg. salary",
      icon: "path/to/icon1.png", // Replace with actual paths
    },
    {
      title: "Virtual Scheduler - Remote",
      location: "New York - USA",
      salary: "$98,000",
      average: "Avg. salary",
      icon: "path/to/icon2.png",
    },
    {
      title: "Patient Care Advocate",
      location: "Washington - USA",
      salary: "$99,700",
      average: "Avg. salary",
      icon: "path/to/icon3.png",
    },
  ];

  const TextRef = useRef(null)
  const Text2Ref = useRef(null)
  const jobCardsRef = useRef([]);

  useEffect(()=>{
    const tl = gsap.timeline()

    tl.set(TextRef.current, {
      opacity: 0,
      // y: 0,
    })

    tl.set(Text2Ref.current, {
      opacity: 0,
      // y: 0,
    })

    tl.set(jobCardsRef.current, {
      opacity: 0,
      y: 30,
    })

    tl.to(TextRef.current, {
      opacity: 1,
      duration: 0.8,
      x: 30,
      ease: "power3.in",
      delay: 3,
    });

    tl.to(Text2Ref.current, {
      opacity: 1,
      duration: 0.5,
      x: -30,
      // delay: 3,
    });

    tl.to(jobCardsRef.current, {
      opacity: 1,
      duration: 0.3,
      y: 0,
      ease: "power2",
      stagger: 0.5,
      // delay: 1,
    });

  }, [])

  return (
      <section className="container md:space-y-5 flex flex-col gap-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 ref={TextRef} className="max-sm:text-lg text-2xl font-bold text-gray-800">Trending jobs</h2>
          <a ref={Text2Ref} href="/all-jobs" className="text-blue-500 hover:text-blue-700">
            See all jobs
          </a>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              ref={(el) => (jobCardsRef.current[index] = el)}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={job.icon}
                  alt={job.title}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
              </div>
              <div className="text-gray-700 text-sm">
                <p>
                  <span className="font-bold">{job.salary}</span> - {job.average}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default TrendingJobs;
