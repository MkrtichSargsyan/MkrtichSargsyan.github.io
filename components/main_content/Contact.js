import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "../../styles/Contact.module.css";
import SectionTitle from "../SectionTitle";

export default function Contact({status,changeStatus}) {
  const [state, handleSubmit] = useForm("mnqldaza");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.contact_section} id="Contact">
      <div className="container">
        <SectionTitle title1={"CONTACT"} title2={"Get In Touch"} />
        <form
          className={styles.contact}
          method="POST"
          action="https://formspree.io/f/mnqldaza"
          onSubmit = {handleSubmit}
        >
          <div className={styles.contact_form}>
            <input name="name" type="text" required placeholder="Your Name" />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles.textarea}>
            <textarea
              name="message"
              className="form-control"
              rows="5"
              required
              placeholder="Your Message..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            onClick={changeStatus}
            className={styles.submit_button}
            disabled={state.submitting}
          />

          {state.succeeded &&
            (status ? (
              <div className={styles.successMessage} data-aos="zoom-out">
                Your message has been successfully sent
              </div>
            ) : (
              ""
            ))}
        </form>
      </div>
    </section>
  );
}
