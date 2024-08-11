import React, { useEffect } from "react";
import { GoStar } from "react-icons/go";

const About = () => {
    document.title = "About us - See and know more about our services";
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }), [];
    });
    return (
        <section className="main-page view-service">
            <h2>About Elviano Developer</h2>
            <div id="page" className="section">
                <div className="two-row">
                    <div
                        style={{ marginTop: "3.7rem" }}
                        data-aos="zoom-in"
                        className="image"
                    >
                        <img src="/images/about.jpg" />
                    </div>
                    <div data-aos="zoom-in" id="content" className="form">
                        <p style={{ marginTop: ".7rem" }} className="text">
                            Elviano Developer is a leading digital agency in Bangladesh, specializing in crafting
                            innovative web solutions that drive business success. Our team of expert web developers,
                            designers, and strategists work together to deliver high-quality,
                            custom-built websites that meet the unique needs of our clients.
                            With a passion for creating exceptional user experiences, we leverage the
                            latest technologies and trends to build fast, secure, and scalable websites
                            that help businesses thrive in the digital landscape. From e-commerce platforms
                            to corporate websites, we provide end-to-end web development services that cater
                            to diverse industries and sectors.</p>

                    </div>
                </div>
                <div className="one-flex">
                    <h2>Our Expertise</h2>
                    <p className="desc">At Elviano Developer, we are committed to delivering exceptional web development services that exceed our clients' expectations. We strive to build long-term relationships, provide outstanding customer service, and continuously improve our skills and knowledge to stay ahead in the ever-evolving digital landscape.</p>
                    <div className="expert">
                        <div className="col">
                            <li><GoStar color="blue" size={20} />Custom Web Development</li>
                            <li><GoStar color="blue" size={20} />E-commerce Solutions</li>
                            <li><GoStar color="blue" size={20} />Responsive Web Design</li>
                        </div>
                        <div className="col">
                            <li><GoStar color="blue" size={20} />Web Application Development</li>
                            <li><GoStar color="blue" size={20} />UI/UX Design</li>
                            <li><GoStar color="blue" size={20} />Digital Strategy and Consulting</li>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
