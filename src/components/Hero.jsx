import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
    const imgRef = useRef(null);
    useEffect(() => {
        var imgs = "hero_";
        var count = 1;
        setInterval(() => {
            imgRef.current.src = "images/" + imgs + count + ".png";
            count += 1;
            if (count >= 4) {
                count = 1;
            }
        }, 7000);
    }, [imgRef]);

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
                    <a id="view" href="#services">
                        Explore Services
                        <GoArrowRight size={23} />
                    </a>
                </div>
            </section>
            <section className="hero-img">
                <img ref={imgRef} id="hero-logo" src="./images/hero_3.png" />
            </section>
        </main>
    );
};

export default Hero;
