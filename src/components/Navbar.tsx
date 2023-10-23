import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">Logo</a>
      </div>
      <div className="navbar__links">
        <a className="link" href="/">Map</a>
        <a className="link" href="/">About</a>
        <a className="link" href="/">Contact</a>
      </div>

    </div>
  );
}