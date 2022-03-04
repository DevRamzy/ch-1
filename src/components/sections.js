import React from "react";

import {
  DarkTextBox,
  LightTextBox,
  FeaturedCard,
  ServicesCard,
  WelcomeNote,
} from "./cards/cards";
import { NavHola } from "./buttons/buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/styles.css";
import "../assets/css/sections.css";

// Welcome Section
export class Welcome extends React.Component {
  render() {
    return (
      <section
        className="hero"
        style={{
          backgroundImage:
            "url(/images/bg-1.jpg)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-content">
          <WelcomeNote message="You're different. So are we. Let's be different together.Automating services in your business through a great user experience system." />
          <WelcomeNote message="Tech Dynasty is a top notch information technologies firm that give unique and absolutely innovative IT solutions with unmatched quality and innovative ideas in designing and development. " />
          <NavHola href="/" name="Get Started"></NavHola>          
        </div>
      </section>
    );
  }
}

/** Featured section  */

const firstCard = {
  img: "../assets/images/preview.jpg",
  feature: "whats up guys",
  text: "this feature is really new have a look and share what you think",
};
export class Featured extends React.Component {
  render() {
    return (
      <section className="featured-section">
        <div className="featured-header">
        <DarkTextBox lightText="Whats up" />
        <LightTextBox darkText="Lol this is react" />
        <LightTextBox darkText="this is also a react component" />
        </div>
        <div className="featured-cards">
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
        </div>
      </section>
    );
  }
}

// About Section
export class AboutSection extends React.Component {
  render() {
    return (
      <section className="about-section container">
        <div className="row">
          <div className="col-md-5">
            <img src="about-1.jpg" alt="" />
            <img src="about-2.jpg" alt="" />
          </div>
          <div className="col-md-5">
            <DarkTextBox lightText="About Section" />
            <LightTextBox darkText="Heading" />
            <LightTextBox darkText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, culpa." />
            <LightTextBox darkText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi corporis cum numquam fugiat suscipit odit est doloribus expedita aut eos." />
            <NavHola name="More..." href="./" />
          </div>
        </div>
      </section>
    );
  }
}

// Service Section Home page
export class ServicesSection extends React.Component {
  render() {
    return (
      <section className="service-section">
        <div className="service-header">
          <DarkTextBox lightText="Whats up" />
          <LightTextBox darkText="Lol this is react" />
          <LightTextBox darkText="this is also a react component" />
        </div>
        <div className="service-cards">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </section>
    );
  }
}

// Partners and Technologies Section
export class PartnersSection extends React.Component {
  render() {
    return (
      <section className="patners-sec-container">
        <div className="partners-sec-header">
          <LightTextBox darkText="Lol this is react" />
          <LightTextBox darkText="this is also a react component" />
        </div>
        <div className="partners-list">
          <ul>
            <li>
              <img
                src={require("../assets/images/patner-1.png")}
                alt=""
              />
            </li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
