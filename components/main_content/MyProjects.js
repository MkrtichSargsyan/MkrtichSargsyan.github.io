import React, { Component } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

import styles from "../../styles/Projects.module.css";

export default class MyProjects extends Component {
  state = {
    projects: [
      {
        title: "RPG-game-js",
        description:
          "Play a game about a lonely knight that teleported to an island on which there are lots of bandits.",
        image: "/screenshots/game.png",
        stack: "JavaScript, Phaser, Matter.js,  Webpack, Tiled, Babbel",
        live: "https://ecstatic-rosalind-eeae5f.netlify.app/",
        repo: "https://github.com/MkrtichSargsyan/RPG-game-js",
      },
      // {
      //   title: "Cinemax",
      //   description:
      //     "In this project, I show movies catalog, where user can get more information about every movie and reserve a place in one of the available halls",
      //   image: "/screenshots/cinemax.png",
      //   stack: "React.js, Redux, Firebase ",
      //   live: "#",
      //   repo: "https://github.com/MkrtichSargsyan/cinema",
      // },
      {
        title: "Transactions",
        description:
          "A mobile app where users can create, edit and delete transactions and group them.",
        image: "/screenshots/transaction.png",
        stack: "Ruby on Rails, Bootstrap, PostgreSQL",
        live: "https://transaction-01.herokuapp.com/",
        repo: "https://github.com/MkrtichSargsyan/Transactions",
      },
      {
        title: "Restaurant Page",
        description:
          "A restaurant page app that shows list of traditional Armenian meals.",
        image: "/screenshots/restaurant.png",
        stack: "HTML, CSS, JavaScript, Tailwind.css, Webpack",
        live: "https://mkrtichsargsyan.github.io/Restaurant-Page/",
        repo: "https://github.com/MkrtichSargsyan/Restaurant-Page",
      },
      {
        title: "Goal Manager",
        description:
          "A goal manager application in which users can add goals and interact with tasks by simply dragging & dropping them between the different states (undone/doing/done). The data persists in the browser's local storage.",
        image: "/screenshots/goal.png",
        stack: "HTML, CSS, JavaScript, Tailwind.css, Webpack",
        live: "https://mkrtichsargsyan.github.io/Todo-List-js/",
        repo: "https://github.com/MkrtichSargsyan/Todo-List-js",
      },
      {
        title: "Members-Only",
        description:
          "A secret social media platform where only authorized members can see who posted a ''crazy task''. This project was inspired by Fight Club, a novel by Chuck Palahniuk.",
        image: "/screenshots/members.png",
        stack: "Ruby on Rails, Bootstrap",
        live: "https://fight-club01.herokuapp.com/",
        repo: "https://github.com/MkrtichSargsyan/Members-Only",
      },
    ],
  };
  render() {
    return (
      <section className={styles.projects} id="My Projects">
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
