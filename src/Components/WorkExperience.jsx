import React from "react";

const WorkExperience = () => {
  return (
    <section id="experience" className="experience">
    <div>
    <h1>Work <span className="highlight">Experience</span></h1>
      <div className="experience-box">
        

        {/* Associate Software Engineer Intern */}
        <div className="job">
          <h2>Associate Software Engineer Intern</h2>
          <h3>Aug 2023 - Aug 2024 | Onesheild, Gurugram, Haryana</h3>
          <ul>
            <li>Collaborated with the development team to fix bugs, improving system stability by 15%.</li>
            <li>Followed Agile methodologies, including daily stand-ups, sprint planning, and retrospectives.</li>
            <li>Ensured compliance with industry standards and optimized processes for policy administration systems.</li>
            <li>Documented website architecture and processes, reducing onboarding time by 20%.</li>
          </ul>
        </div>

        {/* Web Developer Intern */}
        <div className="job">
          <h2>Web Developer Intern</h2>
          <h3>Dec 2022 - Jan 2023 | Teachnook, Chandigarh, Punjab</h3>
          <ul>
            <li>Worked on frontend development using React.js, HTML, CSS, and JavaScript.</li>
            <li>Completed solo and team projects, delivering high-quality, responsive web solutions.</li>
            <li>Collaborated with team members on real-world projects to enhance UI design and functionality.</li>
            <li>Gained hands-on experience in building dynamic and interactive web applications.</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WorkExperience;
