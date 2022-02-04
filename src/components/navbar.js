import React from "react";

import { NavLink, NavLogo, NavHola } from "./buttons/buttons";

import "../assets/css/component-sec.css";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="main-nav">
        <NavLogo />
        <NavLink name="Home" />
        <NavLink name="Service" />
        <NavLink name="Pricing" />
        <NavLink name="Contact" />
        <NavLink name="Blog" />
        <NavHola name="Hola" />
      </nav>
    );
  }
}
