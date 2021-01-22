import React, { Component } from "react";
import Main from "../components/main_content/Main";
import SideDrawer from "../components/SideSrawer/SideDrawer";

export default class MainLayout extends Component {
  state = {
    active: true,
    width: ''
  };

  toggleSidebar = (e) => {
    e.preventDefault();
    this.setState({
      active: !this.state.active,
    });
  };

  updateSize = () => {
    if (window.innerWidth <= 960) {
      this.setState({
        active: false,
        width: 'mobile'
      });
    } else {
      this.setState({
        // active: true,
        width: 'desktop'
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      active: window.innerWidth <= 960 ? false : true,
      width: window.innerWidth <= 960 ? 'mobile' : 'desktop'
    });
  };

  componentDidUpdate = () => {
    window.addEventListener("resize", this.updateSize);
  };

  render() {

    this.updateSize;
    return (
      <div>
        <SideDrawer
          active={this.state.active}
          toggleSidebar={this.toggleSidebar}
        />
        <Main active={this.state.active} width={this.state.width}/>
      </div>
    );
  }
}
