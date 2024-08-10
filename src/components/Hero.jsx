import React, { useState, useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
    const images = [
        "./images/hero_1.png",
        "./images/hero_2.png",
        "./images/hero_3.png"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const imgRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const intervalId = setInterval(handleNext, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <main>
            <section className="hero">
                <h2>
                    Innovative Solutions for Your Business -{" "}
                    <span className="subtitle">Elviano Digital Agency</span>
                </h2>
                <h3>
                    Our team of experts specializes in creating custom digital
                    solutions that drive growth and success.
                </h3>
                <article>
                    At Elviano, we believe that digital transformation is not
                    just about technology, but about creating a better
                    experience for your customers. Our team of experts will work
                    with you to understand your business goals and develop a
                    customized digital strategy that drives results.
                </article>
                <div className="btn-area">
                    <a href="#services" id="view">
                        Explore Services
                        <GoArrowRight size={23} />
                    </a>
                </div>
            </section>
            <section className="hero-img">
                {images.map((element, index) => {
                    return (
                        <img
                            key={index}
                            id="hero-logo"
                            src={element}
                            style={{
                                transition: "0.4s ease-in-out",
                                transform: `translateX(${
                                    index === currentIndex
                                        ? 0
                                        : index < currentIndex
                                        ? "-100%"
                                        : "100%"
                                })`,
                            }}
                        />
                    );
                })}
            </section>
        </main>
    );
};

export default Hero;
