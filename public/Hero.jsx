import React, { useState, useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
    const images = [
        "./images/hero_1.png",
        "./images/hero_2.png",
        "./images/hero_3.png",
        "./images/hero_1.png",
        "./images/hero_2.png",
        "./images/hero_3.png"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const imgRef = useRef(null);

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex - 1);
    };
    useEffect(() => {
        const imgWidth = imgRef.current.offsetWidth;
        setTranslateX(currentIndex * 100);
        setInterval(() => {
            if (images.length < currentIndex) {
                setCurrentIndex(0);
            }
            handleNext();
        }, 3000);
    }, [currentIndex]);
    /*
    useEffect(()=>{
            var imgs = "hero_";
            var count = 1;
            setInterval(() => {
                imgRef.current.src = "images/" + imgs + count + ".png";
                count += 1;
                if (count >= 4) {
                    count = 1;
                }
            }, 7000);
    },[imgRef])
    */

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
                    <button onClick={handleNext}>Button Test</button>
                </div>
            </section>
            <section className="hero-img">
                {images.map((element, index) => {
                    return (
                        <img
                            key={index + 2}
                            ref={imgRef}
                            id="hero-logo"
                            src={images[currentIndex]}
                            style={{
                                transition: "0.4s ease-in-out",
                                transform: `translateX(${-currentIndex*100}%)`
                            }}
                        />
                    );
                })}
            </section>
        </main>
    );
};

export default Hero;
