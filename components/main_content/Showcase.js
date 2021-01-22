import React from "react";
import styles from "../../styles/Showcase.module.css";

function Showcase() {
  return (
    <section className={styles.showcase} id='Home'>
      <div className="container">
        <h2 className={styles.greeting}>
          Hello. I'm
          <strong className={styles.white}> Mkrtich</strong>
          <br />
          Full Stack Web Developer
        </h2>
        <p>based in Armenia,Erevan</p>

        <blockquote>
          <i>
            “if you can write "hello world" you can change the world” ― Raghu
            Venkatesh
          </i>
        </blockquote>
        <div className={styles.hire_button}>Hire Me</div>
      </div>
    </section>
  );
}

export default Showcase;
