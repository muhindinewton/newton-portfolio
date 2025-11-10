import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-br from-background to-white"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-secondary text-lg mb-2">Hi there, I am</p>
            <h2 className="text-5xl font-bold text-black mb-4 leading-tight">
              Newton Muhindi
            </h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              A Fullstack Software Engineer and UI/UX Designer who loves turning
              ideas into smooth, clickable, "wow, that's nice" kind of
              experiences.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/files/Newton-Muhindi-Resume.pdf"
                download
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 hover:bg-secondary transition-all hover:-translate-y-0.5 border-2 border-primary"
              >
                Download CV
                <i className="fa-solid fa-download"></i>
              </a>
              <a
                href="#about"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all hover:-translate-y-0.5"
              >
                Explore More
              </a>
            </div>
          </div>
          <figure className="order-1 md:order-2 flex justify-center">
            <img
              src="/images/Frame 5.svg"
              alt="Portrait of Newton Muhindi"
              className="max-w-full h-auto rounded-3xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
