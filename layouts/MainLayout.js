import React from "react";
import SideDrawer from "../components/SideSrawer/SideDrawer";

function MainLayout(props) {
  return (
    <div>
      <SideDrawer />
      {props.children}
      <style jsx>{`
        display: flex;
      `}</style>
    </div>
  );
}

export default MainLayout;
