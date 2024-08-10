import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const WhatWeServe = () => {
    const [services, setServices] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        let url = "/services.json";
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const responseData = await response.json();
            setServices(responseData);
            setIsLoading(false);
        } catch (error) {
            console.error("Error : ", error);
        }
    };
    useEffect(() => {
        getData();
        if (isLoading) {
            return;
        }
    }, []);

    return (
        <section className="page">
            <h2>Services That We Serve With Care</h2>
            <p className="heading-text">
                Our Result-Oriented Expert Team Focuses On New Creative Ideas
                With Expertise.
            </p>
            <p className="short-desc"> 
                We design and develop innovative web solutions that drive results. Our expertise spans e-commerce, blogging, social media, and more. We craft seamless user experiences that engage and convert. Our team is passionate about delivering high-quality solutions. We use the latest technologies to stay ahead of the curve. Our goal is to help businesses thrive in the digital landscape. We take pride in our attention to detail and commitment to excellence. Let us help you bring your vision to life online.
            </p>
            <div className="grid-row">
                {services &&
                    services.map((service, index) => {
                        return (
                            <NavLink to={`/view-services/${service.id}`} className="card" key={index + 2}>
                                <img src={service.img_url} />
                                <h2>{service.title}</h2>
                                <p className="desc">{service.description}</p>
                            </NavLink>
                        );
                    })}
                {/*
                <div className="card">
                    <img src="/images/Web_development.png" />
                    <h2>Web Development</h2>
                </div>
                <div className="card">
                    <img src="/images/graphicdesign.png" />
                    <h2>Graphics Design</h2>
                </div>
                <div className="card">
                    <img src="/images/digital_marketin.png" />
                    <h2>Digital Marketing </h2>
                </div>

                <div className="card">
                    <img src="/images/Web_development.png" />
                    <h2>Web Development</h2>
                </div>
                <div className="card">
                    <img src="/images/graphicdesign.png" />
                    <h2>Graphics Design</h2>
                </div>
                <div className="card">
                    <img src="/images/digital_marketin.png" />
                    <h2>Digital Marketing </h2>
                </div>
                */}
            </div>
        </section>
    );
};

export default WhatWeServe;
