import React from "react";
import Showcase from "../main_content/Showcase";
import MyProjects from "../main_content/MyProjects";
import AboutMe from "../main_content/AboutMe";
import Contact from "../main_content/Contact";

import styles from "../../styles/Main.module.css";
import Footer from "./Footer";

export default function Main(props) {
  return (
    <main className={props.active ? styles.ml : styles.mr}>
      <div className={styles.main}>

      <Showcase />
      <MyProjects />
      <AboutMe />
      <Contact />
      <Footer/>
      </div>
    </main>
  );
}
