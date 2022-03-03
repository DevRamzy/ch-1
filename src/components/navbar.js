import React from "react";

import {
  NavLink,
  NavLogo,
  NavHola,
} from "./buttons/buttons";

import "../assets/css/cards.css";
import "../assets/css/sections.css";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


document.addEventListener("scroll", function () {
  const navbar =
    document.querySelector(".mainNav");
  const navbarHeight = 100;
  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );
  if (distanceFromTop >= navbarHeight)
    navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});
export class Navbar extends React.Component {
  
  render() {
    return (
      <nav className="mainNav">
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
