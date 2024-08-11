import React, { useEffect } from "react";

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
                    <img src="/images/shopping.png" />
                </div>
                <div data-aos="zoom-in" id="content" className="form">
                    <p style={{ marginTop: ".7rem" }} className="text">
                        BAK Digital Firm and Online Services is a premier
                        digital solutions provider, specializing in a wide array
                        of digital goods and services. Our expertise spans
                        across Web Design & Development, Graphic Design, Digital
                        Marketing, SEO Optimization, Social Media Management,
                        E-commerce Website Development, Dropshipping Creation &
                        Management, Amazon & E-commerce Store Management. We are
                        dedicated to helping businesses establish a strong
                        online presence and achieve their digital goals. Our
                        team of experts leverages the latest technologies and
                        strategies to deliver solutions that drive growth and
                        success in the digital marketplace.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;
