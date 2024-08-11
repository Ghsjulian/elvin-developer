import React from "react";

const WhyUs = () => {
    return (
        <section className="page">
            <h2>Why Chose Us ?</h2>
            <p className="desc">
            Responsive UI layouts are a crucial aspect of modern web design, allowing websites to adapt to different screen sizes and devices.
A responsive layout ensures that a website's content is easily accessible and visually appealing on various devices, including desktops, laptops, tablets, and smartphones.

With the increasing use of mobile devices to access the internet, responsive UI layouts have become a necessity for businesses and individuals alike.

A responsive layout is achieved by using flexible grids, images, and media queries to create a website that can adapt to different screen sizes and orientations.

One of the key benefits of responsive UI layouts is that they provide an optimal user experience, regardless of the device or screen size.

Responsive layouts also improve website loading times, as they eliminate the need for separate websites for different devices.


            </p>
             <div className="grid-row">
             <div className="card">
             <img src="/images/responsive.png" />
             <h2>Responsive UI Layouts</h2>
             </div>
             <div className="card">
             <img src="/images/company.png" />
             <h2>Web Application Development</h2>
             </div>
             <div className="card">
             <img src="/images/ecom.png" />
             <h2>E-commerce Solutions</h2>
             </div>
             <div className="card">
             <img src="/images/development.png" />
             <h2>Custom Web Development</h2>
             </div>


             <div className="card">
             <img src="/images/ecommerce.png" />
             <h2>Digital Strategy and Consulting</h2>
             </div>
             <div className="card">
             <img src="/images/search.png" />
             <h2>Responsive Web Design</h2>
             </div>
             </div>
        </section>
    );
};

export default WhyUs;
