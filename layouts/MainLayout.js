// import React from "react";
// import Main from "../components/main_content/Main";
// import SideDrawer from "../components/SideSrawer/SideDrawer";

// function MainLayout() {
//   return (
//     <div>
//       <SideDrawer />
//       <Main />
//     </div>
//   );
// }

// export default MainLayout;


import React, { Component } from 'react'
import Main from "../components/main_content/Main";
import SideDrawer from "../components/SideSrawer/SideDrawer";

export default class MainLayout extends Component {

  state={
    active: true,
  }

  toggleSidebar = (e) => {
    e.preventDefault();
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div>
        <SideDrawer active={this.state.active} toggleSidebar={this.toggleSidebar}/>
        <Main active={this.state.active}/>
      </div>
    )
  }
}