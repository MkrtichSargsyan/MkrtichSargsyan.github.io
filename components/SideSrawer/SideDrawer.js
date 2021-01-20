import React, { Component } from "react";
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
    social_itmes: [
      {
        icon: "fab fa-github fa-2x",
        link: "Contact",
      },
      {
        icon: "fab fa-twitter fa-2x",
        link: "Contact",
      },
      {
        icon: "fab fa-linkedin fa-2x",
        link: "Contact",
      },
      {
        icon: "fas fa-envelope fa-2x",
        link: "Contact",
      },
      {
        icon: "fas fa-file fa-2x",
        link: "Contact",
      },
    ],
  };

  render() {
    const { navigation_items, social_itmes } = this.state;
    return (
      <div
        className={
          this.props.active ? styles.side_drawer_open : styles.side_drawer_close
        }
      >
        <div className={styles.toggler} onClick={this.props.toggleSidebar}>
          <i class="fas fa-bars fa-2x"></i>
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
              <li>
                <a href="#">
                  <img src={item.icon} alt="" />
                  <span className={styles.title}>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.social}>
          {social_itmes.map((item) => (
            <li>
              <a href="#" target="_blank" data-original-title="Linkedin">
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
