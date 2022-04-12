import React from "react";

import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

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
          backgroundImage: "url(/images/bg1.webp)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content">
          <WelcomeNote
            message="Our focus is building digital products that gain traction and succeed. If you have the vision for a high-value 
          product, we would love to start a conversation and bring your ideas to life."
          />
          <WelcomeNote message=" " />
          <NavHola href="/" name="Get Started"></NavHola>
        </div>
      </section>
    );
  }
}

/** Featured section  */

const firstCard = {
  img: require("../assets/images/featured1.png"),
  feature: "Web & App Design",
  text: "this feature is really new have a look and share what you think",
};
const secondCard = {
  img: require("../assets/images/featured2.png"),
  feature: "Web & App Development",
  text: "this feature is really new have a look and share what you think",
};
const thirdCard = {
  img: require("../assets/images/featured3.png"),
  feature: "Digital Marketing",
  text: "this feature is really new have a look and share what you think",
};
export class Featured extends React.Component {
  render() {
    return (
      <section className="featured-section">
        <div className="featured-header">
          <DarkTextBox lightText="What we can do for you" />
          <LightTextBox darkText="Our Featured Services" />
          <LightTextBox darkText="This are the main services that we offer at Tech Dynasty." />
        </div>
        <div className="featured-cards">
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
          <FeaturedCard
            img={secondCard.img}
            feature={secondCard.feature}
            text={secondCard.text}
          />
          <FeaturedCard
            img={thirdCard.img}
            feature={thirdCard.feature}
            text={thirdCard.text}
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
        <div className=" about-sec">
          <div className="image-sec">
            <div className="abt-img1">
              <img src={require("../assets/images/about1.jpg")} alt="" />
            </div>
            <div className="abt-img2">
              <img src={require("../assets/images/about2.jpg")} alt="" />
            </div>
          </div>

          <div className="content">
            <DarkTextBox lightText="About Section" />
            <p className="typewriter">
              Experience World-class Agile Product Development{" "}
              {/* <Typewriter
                words={[(this.darkText = "Heading")]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              /> */}
            </p>

            <LightTextBox
              darkText="Harness digitized business solutions comprising web, 
                        android and iOS app solutions leveraging Blockchain, AI Chatbots, Machine 
                        Learning and IoT technologies for your startup or enterprise.
                        Tech Dynasty is a top notch information technologies 
                        firm that give unique and absolutely innovative IT 
                        solutions with unmatched quality and innovative ideas in 
                        designing and development."
            />
            <LightTextBox darkText="Let's Start a New Project Together" />
            <NavHola name="Request a Quote" href="./" />
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
          <DarkTextBox lightText="Our Services" />
          <LightTextBox darkText="Lol this is react" />
          <LightTextBox darkText="this is also a react component" />
        </div>
        <div className="service-cards">
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
              <img src={require("../assets/images/patner-1.png")} alt="" />
            </li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
