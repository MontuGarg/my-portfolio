import React from "react";

const skills = [
  "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB",
  "MySQL", "Python", "Java", "C++", "HTML", "CSS", "Git", "AWS", 
  "Selenium", "Cucumber", "SQL", "Jira"
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 className="skills-title">My <span className="highlight">Skills</span></h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
