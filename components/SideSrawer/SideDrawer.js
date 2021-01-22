import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import styles from "../../styles/SideDrawer.module.css";

export default class SideDrawer extends Component {
  state = {
    active: true,
    navigation_items: [
      {
        icon: "icons/home.png",
        title: "Home",
      },
      {
        icon: "icons/folder.png",
        title: "My projects",
      },
      {
        icon: "icons/user.png",
        title: "About me",
      },
      {
        icon: "icons/message.png",
        title: "Contact",
      },
    ],
    social_items: [
      {
        icon: "fab fa-github fa-2x",
        link: "https://github.com/MkrtichSargsyan",
      },
      {
        icon: "fab fa-twitter fa-2x",
        link: "https://twitter.com/MkrtichSargsyan",
      },
      {
        icon: "fab fa-linkedin fa-2x",
        link: "https://www.linkedin.com/in/mkrtich-sargsyan/",
      },
      {
        icon: "fas fa-envelope fa-2x",
        link: "mailto:mkrtichsargsyan24@gmail.com",
      },
      {
        icon: "fas fa-file fa-2x",
        link:
          "https://drive.google.com/file/d/1u_0UdRaFIIg6cfQrDRYD-UgC1n5QL2jr/view?usp=sharing",
      },
    ],
  };

  render() {
    const { navigation_items, social_items } = this.state;
    return (
      <aside
        className={
          this.props.active ? styles.side_drawer_open : styles.side_drawer_close
        }
      >
        <div className={styles.toggler} onClick={this.props.toggleSidebar}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <div className={styles.logo}>
          <img src="me.JPG" alt="me" />
          <div>
            <h1 className={styles.my_name}>Mkrtich Sargsyan</h1>
            <span className={styles.position}>Full Stack Developer</span>
          </div>
        </div>
        <div className={styles.navigation}>
          <ul>
            {navigation_items.map((item) => (
              <Link
                class="active"
                to={item.title}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li key={item.title}>
                  <img src={item.icon} alt="" />
                  <span className={styles.title}>{item.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <ul className={styles.social}>
          {social_items.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                target="_blank"
                data-original-title="Linkedin"
              >
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
