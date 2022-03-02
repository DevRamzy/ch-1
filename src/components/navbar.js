import React from "react";

import {
  NavLink,
  NavLogo,
  NavHola,
} from "./buttons/buttons";

import "../assets/css/cards.css";
import "../assets/css/sections.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="main-nav fixed-top">
        <NavLogo />
        <NavLink name="Home" />
        <NavLink name="Service" />
        <NavLink name="Pricing" />
        <NavLink name="Contact" />
        <NavLink name="Blog" />
        <NavHola name="Button" href="./" />
      </nav>
    );
  }
}
