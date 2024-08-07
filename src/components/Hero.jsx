import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
    return (
        <main>
            <section className="hero">
                <h2>Innovative Solutions for Your Business - <span className='subtitle'>Elviano Digital Agency</span></h2>
                <h3>Our team of experts specializes in creating custom digital solutions that drive growth and success.</h3>
                <article>
                    At Elviano, we believe that digital transformation is not just about technology, but about creating a better experience for your customers. Our team of experts will work with you to understand your business goals and develop a customized digital strategy that drives results.
                </article>
                <div className="btn-area">
                    <button id="shop">
                        Shop Now
                    </button>
                    <button id="view">
                        Explore Services <div className='icon'><GoArrowRight size={22}/></div>
                    </button>
                </div>
            </section>
            <section className="hero-img">
                <img id="hero-logo" src="./images/hero_1.png" />
            </section>
        </main>
    )
}

export default Hero