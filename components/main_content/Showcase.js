import React from "react";
import { Link } from "react-scroll";
import styles from "../../styles/Showcase.module.css";

function Showcase() {
  return (
    <section className={styles.showcase} id="Home">
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
        <Link
          to='Contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <div className={styles.hire_button}>Hire Me</div>
        </Link>
      </div>
    </section>
  );
}

export default Showcase;
