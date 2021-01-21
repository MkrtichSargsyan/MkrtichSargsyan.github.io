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
        image: "/fitshop.png",
        stack: "Html,Css,Bootstrap",
      },
      {
        title: "Fitness Shop",
        description:
          "This project is based on an online shop for electronics. Design is followed from this website https://www.behance.net/gallery/24796463/ZATTIX , but instead of a shop of electronics I created gym goods selling website",
        image: "/fitshop.png",
        stack: "Html,Css,Bootstrap",
      },
      {
        title: "Fitness Shop",
        description:
          "This project is based on an online shop for electronics. Design is followed from this website https://www.behance.net/gallery/24796463/ZATTIX , but instead of a shop of electronics I created gym goods selling website",
        image: "/fitshop.png",
        stack: "Html,Css,Bootstrap",
      },
      {
        title: "Fitness Shop",
        description:
          "This project is based on an online shop for electronics. Design is followed from this website https://www.behance.net/gallery/24796463/ZATTIX , but instead of a shop of electronics I created gym goods selling website",
        image: "/fitshop.png",
        stack: "Html,Css,Bootstrap",
      },
    ],
  };
  render() {
    return (
      <section className={styles.projects}>
        <div className="container">
          <SectionTitle title1={"PORTFOLIO"} title2={"MY Projects"} />
          {this.state.projects.map((item) => (
            <article key={item.title}>
              <div className={styles.characteristics}>
                <h2>{item.title}</h2>
                <p className={styles.stack}>{item.stack}</p>
                <p>{item.description}</p>
                <div className={styles.icons}>
                  <i className="fas fa-desktop fa-2x"></i>
                  <i className="fas fa-code fa-2x"></i>
                </div>
              </div>
              <div>
                <Image
                  src={item.image}
                  alt="Picture of the author"
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
