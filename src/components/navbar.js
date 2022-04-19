import React from "react";

import { NavLink, NavLogo, NavHola } from "./buttons/buttons";

import "../assets/css/cards.css";
import "../assets/css/sections.css";
import "../assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".mainNav");
  const navbarHeight = 100;
  const distanceFromTop = Math.abs(document.body.getBoundingClientRect().top);
  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Services",
    href: "/About",
  },
  {
    name: "Pricing",
    href: "/About",
  },
  {
    name: "Blog",
    href: "/About",
  },
];
export class Navbar extends React.Component {
  render() {
    return (
      <nav className="mainNav">
        <NavLogo />
        <div className="nav-Links">
          {navLinks.map(({ name, href }) => (
            <NavLink name={name} href={href} />
          ))}
          <NavHola name="Contact Us" href="./" />
        </div>
      </nav>
    );
  }
}
