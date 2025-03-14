import React from "react";
import project1 from "../Images/project1.png";
import project2 from "../Images/project2.png";
import project3 from "../Images/project3.png";

// Project Data Array
const portfolioItems = [
  {
    title: "Insights - Share your knowledge",
    image: project1, // Replace with actual image
    link: "https://insights-shareknowledge.netlify.app/",
    description: "A full-stack publishing platform for sharing knowledge.",
  },
  {
    title: "Event Management System",
    image: project2, // Replace with actual image
    link: "https://eventmanagementbymontu.netlify.app/",
    description: "An event management platform with real-time tracking.",
  },
  {
    title: "Find Online Tutor",
    image: project3, // Replace with actual image
    link: "https://findonlinetutorbymontu.netlify.app/", // Replace with actual link
    description: "A platform for connecting students with tutors.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="portfolio-section">
      <h1 className="portfolio-title">
        My <span className="highlight">Projects</span>
      </h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-card">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <h3 className="portfolio-item-title">{item.title}</h3>
            <p className="portfolio-description">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
