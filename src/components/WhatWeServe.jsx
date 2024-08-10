import React, { useState, useEffect } from "react";

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
        console.log(services);
    }, []);

    return (
        <section className="page">
            <h2>Services That We Serve With Care</h2>
            <p className="heading-text">
                Our Result-Oriented Expert Team Focuses On New Creative Ideas
                With Expertise.
            </p>
            <div className="grid-row">
                {services &&
                    services.map((service, index) => {
                        return (
                            <div className="card" key={index + 2}>
                                <img src={service.img_url} />
                                <h2>{service.title}</h2>
                                <p className="desc">{service.description}</p>
                            </div>
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
