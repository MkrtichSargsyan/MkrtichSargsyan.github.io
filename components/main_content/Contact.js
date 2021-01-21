import React from "react";

import styles from "../../styles/Contact.module.css";
import SectionTitle from "../SectionTitle";

export default function Contact() {
  return (
    <section className={styles.contact_section}>
      <div className="container">
        <SectionTitle title1={"CONTACT"} title2={"Get In Touch"} />
        <form className={styles.contact} method="post" action="#">
          <div className={styles.contact_form}>
            <input
              name="name"
              type="text"
              required=""
              placeholder="Your Name"
            />
            <input
              name="email"
              type="email"
              required=""
              placeholder="Your Email"
            />
          </div>
          <div className={styles.textarea}>
            <textarea
              name="form-message"
              className="form-control"
              rows="5"
              required=""
              placeholder="Your Message..."
            ></textarea>
          </div>
          <input type="submit" value="Send Message" className={styles.submit_button}/>
        </form>
      </div>
    </section>
  );
}
