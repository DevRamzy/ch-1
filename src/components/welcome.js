import React from "react";
import { NavHola } from "./buttons/buttons";
import { WelcomeNote } from "./cards/cards";
import "../assets/css/component-sec.css";

export class Welcome extends React.Component {
  render() {
    return (
      <section className="hero">
        <WelcomeNote message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, consectetur?" />
        <WelcomeNote message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, provident accusantium incidunt dolorem amet ex fugit eaque tenetur pariatur necessitatibus." />
        <NavHola href="/" name="Hola"></NavHola>
        <NavHola herf="./" name="Contact"></NavHola>
      </section>
    );
  }
}
