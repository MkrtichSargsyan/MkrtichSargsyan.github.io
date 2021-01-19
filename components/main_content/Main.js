import React from 'react'
import Showcase from "../main_content/Showcase";
import MyProjects from "../main_content/MyProjects";
import AboutMe from "../main_content/AboutMe";
import Contact from "../main_content/Contact";

export default function Main() {
  return (
    <div>
        <Showcase />
        <MyProjects />
        <AboutMe />
        <Contact />

        <style jsx>{`margin-left:400px;z-index:3`}</style>
    </div>
  )
}
