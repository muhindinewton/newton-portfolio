import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Authentic Construction and Interiors",
      description: "A Construction and Interior company website.",
      image: "/images/Authentic.png",
      links: [
        {
          label: "Live Preview",
          url: "https://muhindinewton.github.io/Kate-Construction/index.html",
        },
      ],
    },
    {
      title: "Altocom Ecommerce Website",
      description: "A computer shop eCommerce website.",
      image: "/images/Altocom.png",
      links: [{ label: "Live Preview", url: "https://altocom.co.ke/" }],
    },
    {
      title: "Deliveroo Parcel Delivery",
      description: "Easy parcel ordering with real-time tracking.",
      image: "/images/Deliveroo.png",
      links: [
        {
          label: "Figma",
          url: "https://www.figma.com/proto/PzvlxIVXYO4h4l94ORGIMi/Deliveroo?node-id=21-23&starting-point-node-id=21%3A23&t=fYP8jxgbemKfmzoH-1",
        },
        { label: "Github", url: "https://github.com/muhindinewton/Deliveroo" },
        { label: "Live Preview", url: "https://deliveroo-three.vercel.app/" },
      ],
    },
    {
      title: "Geomax Ecommerce Website",
      description: "A wordpress Ecommerce website.",
      image: "/images/Geomax.png",
      links: [{ label: "Live Preview", url: "https://geomaxcomputers.co.ke/" }],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-primary text-sm font-semibold uppercase tracking-wider text-center mb-2">
          Projects
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          What I have Made?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-200"
            >
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={`${project.title} portfolio image`}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                />
              </a>
              <h4 className="text-xl font-semibold text-black mb-2">
                {project.title}
              </h4>
              <p className="text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3 flex-wrap">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-background text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
