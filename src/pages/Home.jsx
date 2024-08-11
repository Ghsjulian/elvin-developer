import React from "react";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import WhatWeServe from "../components/WhatWeServe";
import WhyUs from "../components/WhyUs";

const Home = () => {
    return (
        <>
            <Hero />
            <WhoWeAre />
            <WhyUs />
            <WhatWeServe />
        </>
    );
};

export default Home;
