import React from "react";
import Main from "../components/main_content/Main";
import SideDrawer from "../components/SideSrawer/SideDrawer";

function MainLayout() {
  return (
    <div>
      <SideDrawer />
      <Main />
    </div>
  );
}

export default MainLayout;
