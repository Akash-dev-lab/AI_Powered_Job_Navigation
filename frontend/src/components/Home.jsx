import React from "react";
import NavBar from "../pages/NavBar";
import MainSection from "../pages/MainSection";
import TrendingJobs from "../pages/TrandingJobs";
import JobOffers from "../pages/JobOffers";
import ExploreJobSearch from "../pages/ExploreJobSearch";

const Home = () => {
    return (
        <header className="flex justify-between items-center flex-col text-white py-6 gap-20 px-6">
            <NavBar />
            <MainSection />
            <TrendingJobs />
            <JobOffers />
            <ExploreJobSearch />
        </header>
    );
};

export default Home
