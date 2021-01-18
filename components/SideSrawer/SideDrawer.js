import React, { Component } from "react";
import styles from "../../styles/SideDrawer.module.css";

export default class SideDrawer extends Component {
  state = {
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
  };

  render() {
    const { navigation_items } = this.state;
    return (
      <div className={styles.side_drawer}>
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
                  <img src={item.icon} alt=""/>
                  <span className={styles.title}>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.social}>
          social links
        </div>
      </div>
    );
  }
}
