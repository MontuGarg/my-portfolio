import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Images from "../Images/montu_bg_remove.png";

const Home = () => {
  let strings = ["Full Stack Developer", "React Enthusiast", "Problem Solver", "Quick Learner"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 150; // Typing speed
  useEffect(() => {
    const typingEffect = setTimeout(() => {
      const currentWord = strings[wordIndex];
  
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % strings.length);
      }
    }, speed);
  
    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, wordIndex, speed, strings]);

  return (
    <section id="home" className="home">
      <div className="img-div">
         <img src={Images}></img>
      </div>
      <div className="content">
        <h1>Hello👋<br/> <br/> Myself <span className="highlight">Montu Garg</span></h1>
        <h2>
          I'm a <span className="typing">{text}</span> <span className="cursor">|</span>
        </h2>
        <p>
          Passionate about building efficient and scalable applications. Let's create something amazing together!
        </p>
        <div className="buttons">
          <Link to="projects" smooth duration={500} className="btn projects">
            View Projects
          </Link>
          <a href="mailto:gargmontu3@gmail.com" className="btn hire">Hire Me</a><br/>
          <a href="/Montu_Garg__Resume.pdf" download className="btn resume">
                Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
