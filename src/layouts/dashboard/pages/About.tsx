import React from "react";
import Sidebar, { SidebarProps } from "../components/Sidebar/Sidebar";

const About: React.FC = () => {
  const sidebarProps: SidebarProps = {
    children: <h2>About</h2>,
  };

  return <Sidebar {...sidebarProps} />;
};

export default About;
