import React, { Component } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

import styles from "../../styles/Projects.module.css";

export default class MyProjects extends Component {
  state = {
    projects: [
      {
        title: "Fitness Shop",
        description:
          "This project is based on an online shop for electronics. Instead of a shop of electronics I created gym goods selling website",
        image: "/screenshots/fitshop.png",
        stack: "Html, Css, Bootstrap",
        live: "https://mkrtichsargsyan.github.io/Fitness-Shop/",
        repo: "https://github.com/MkrtichSargsyan/Fitness-Shop",
      },
      {
        title: "Cinemax",
        description:
          "In this project, I show movies catalog, where user can get more information about every movie and reserve a place in one of the available halls",
        image: "/screenshots/cinemax.png",
        stack: "React.js, Redux, Firebase ",
        live: "#",
        repo: "https://github.com/MkrtichSargsyan/cinema",
      },
      {
        title: "Transactions",
        description:
          "The project is an app made especially for mobiles. Users can create, edit and delete transactions and group them",
        image: "/screenshots/transaction.png",
        stack: "Ruby on Rails, Bootstrap, PostgreSQL",
        live: "https://transaction-01.herokuapp.com/",
        repo: "https://github.com/MkrtichSargsyan/Transactions",
      },
      {
        title: "Members-Only",
        description:
          "This project creates a secret social media platform where only authorized members can see who posted a ''crazy task''. This project was build as a result of inspiration by the novel of Chuck Palahniuk",
        image: "/screenshots/members.png",
        stack: "Ruby on Rails, Bootstrap",
        live: "https://fight-club01.herokuapp.com/",
        repo: "https://github.com/MkrtichSargsyan/Members-Only",
      },
    ],
  };
  render() {
    return (
      <section className={styles.projects} id="My projects">
        <div className="container">
          <SectionTitle title1={"PORTFOLIO"} title2={"My Projects"} />
          {this.state.projects.map((item) => (
            <article key={item.title}>
              <div className={styles.characteristics}>
                <h2>{item.title}</h2>
                <p className={styles.stack}>Tech Stack Used: {item.stack}</p>
                <p>{item.description}</p>
                <div className={styles.icons}>
                  <a href={item.live} target="_blank">
                    <i className="fas fa-desktop fa-2x" />
                  </a>
                  <a href={item.repo} target="_blank">
                    <i className="fas fa-code fa-2x" />
                  </a>
                </div>
              </div>
              <div>
                <Image
                  src={item.image}
                  alt="Picture"
                  width={400}
                  height={250}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
}
