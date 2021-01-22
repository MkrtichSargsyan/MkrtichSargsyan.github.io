import React, { Component } from "react";
import Showcase from "../main_content/Showcase";
import MyProjects from "../main_content/MyProjects";
import AboutMe from "../main_content/AboutMe";
import Contact from "../main_content/Contact";

import styles from "../../styles/Main.module.css";
import Footer from "./Footer";

export default class Main extends Component {

  state={
    width: this.props.width
  }


  checkSize(){
    this.setState({
      width:this.props.width
    })
  }

  componentDidUpdate(prevProps, prevState){
 
      if(this.props.width != prevProps.width){
        this.checkSize()
      }
  }

  render() {
    const {width} = this.state
    const {active} = this.props

    let style = ''

    if (width == 'desktop'){
      style = active ? 'ml' : 'none'
    }

    console.log(style);
    return (
      <main>
        <div className={style=='ml' ? styles.ml : styles.none}>
          <Showcase />
          <MyProjects />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
      </main>
    );
  }
}
