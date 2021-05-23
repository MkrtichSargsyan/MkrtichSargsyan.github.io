import React from "react";
import SectionTitle from "../SectionTitle";

import styles from "../../styles/AboutMe.module.css";
import Stack from "../Stack";

export default function AboutMe() {
  return (
    <section className={styles.about_section} id='About me'>
      <div className="container">
        <SectionTitle title1={"ABOUT ME"} title2={"Learn More"} />
        <div className={styles.aboutMe}>
          <div>
            <h2>
              I'm <span className={styles.name}>Mkrtich Sargsyan</span>,<br /> a
              full-stack web developer.
            </h2>
            <p>
              I'm a graduate from Microverse, a prestigious software development school that only accepts a small percentage of applicants. I'm also currently 
              a code reviewer and a student mentor. I acquired professional-level skills,
              including Ruby, Ruby on Rails, JavaScript, React, Redux,
              Bootstrap, and Test-Driven Development techniques.
            </p>
            <p>
              Feel free to look through some of my work and experience! If you
              like my work and have some cool projects to work on, send me a
              direct message or contact me through social media sites listed in
              my portfolio.
            </p>
            <Stack />
          </div>
          <div className={styles.address}>
            <ul>
              <li>
                <span>Name:</span> Mkrtich Sargsyan
              </li>
              <li>
                <span>Email:</span>
                <a href="mailto:mkrtichsargsyan24@gmail.com">
                  mkrtichsargsyan24@gmail.com
                </a>
              </li>
              <li>
                <span>From:</span> Armenia, Erevan
              </li>
            </ul>
            <a
              href="https://docs.google.com/document/d/1LSZS8Fb1JeWTeDxypFzB-Dbk43PW5YjmpvYisxxDIe8/edit?usp=sharing"
              className={styles.cv_button}
              target="_blank"
            >
              Go through my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
