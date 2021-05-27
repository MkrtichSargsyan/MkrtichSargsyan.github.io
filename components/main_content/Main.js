import React, { Component } from "react";
import Showcase from "../main_content/Showcase";
import MyProjects from "../main_content/MyProjects";
import AboutMe from "../main_content/AboutMe";
import Contact from "../main_content/Contact";

import styles from "../../styles/Main.module.css";
import Footer from "./Footer";

export default class Main extends Component {
  state = {
    width: this.props.width,
    status: false,
  };

  checkSize() {
    this.setState({
      width: this.props.width,
    });
  }

  changeStatus = (e) => {
    e.preventDefault()
    this.setState({
      status: true,
    });
  };

  componentDidUpdate(prevProps) {
    if(this.state.status){

      setTimeout(() => {
        this.setState({ status: false });
      }, 2000);
    }
    if (this.props.width != prevProps.width) {
      this.checkSize();
    }
  }

  render() {
    const { width } = this.state;
    const { active } = this.props;

    let style = "";

    if (width == "desktop") {
      style = active ? "ml" : "none";
    }

    return (
      <main>
        <div className={style == "ml" ? styles.ml : styles.none}>
          <Showcase />
          <MyProjects />
          <AboutMe />
          <Contact
            status={this.state.status}
            changeStatus={this.changeStatus}
          />
          <Footer />
        </div>
      </main>
    );
  }
}
