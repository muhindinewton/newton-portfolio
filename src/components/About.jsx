import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <figure>
            <img
              src="/images/Code typing-amico 1.png"
              alt="Illustration of coding"
              className="w-full h-auto rounded-2xl"
            />
          </figure>
          <div>
            <h3 className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              About
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">About Me?</h2>
            <p className="text-secondary text-base md:text-lg leading-relaxed">
              Beyond the code, I'm a creator. My work as a Fullstack Software
              Engineer and UI/UX Designer is all about bridging the gap between
              a great idea and a stunning, functional reality. I enjoy the
              challenge of a new project, diving deep into user needs to craft a
              front-end that's a joy to interact with, and then building a
              reliable back-end to power it all. For me, the magic is in the
              details, making sure every click, transition, and layout feels
              intentional and polished. I'm here to ensure your vision becomes a
              digital experience that truly stands out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
