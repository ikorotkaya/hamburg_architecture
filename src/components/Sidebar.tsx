import React from "react";
import { SidebarProps } from "../types";

export default function Sidebar({projects}: SidebarProps) {
  return (
    <div className="sidebar_container">
      <img src="https://via.placeholder.com/150" alt="logo" />
      <h1>Project Name</h1>
      <p>Project Description</p>
      <p>Project Location</p>

    </div>
  );
}