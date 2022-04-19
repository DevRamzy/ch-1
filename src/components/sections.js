import React from "react";

import { Typewriter } from "react-simple-typewriter";

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
          <NavHola href="/" name="Get Intouch"></NavHola>
        </div>
      </section>
    );
  }
}

/** Featured section  */

const featuredArray = [
  {
    img: require("../assets/images/featured1.png"),
    feature: "Web & App Design",
    text: "We provide exceptional and strategic design that compliments your brand and accomplishes your goals.",
  },
  {
    img: require("../assets/images/featured2.png"),
    feature: "Web & App Development",
    text: "We use the latest emerging technology such as NextJs, JavaScript, Laravel, ReactJS and Flutter to code your product’s infrastructure.",
  },
  {
    img: require("../assets/images/featured3.png"),
    feature: "Digital Marketing",
    text: "We can help you create a great plan for your online marketing efforts, and we'll walk the journey with you each step of the way.",
  },
];
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
          {featuredArray.map(({ img, feature, text }) => (
            <div>
              {<FeaturedCard img={img} feature={feature} text={text} />}
            </div>
          ))}
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
            <DarkTextBox lightText="About" />
            <p className="typewriter">
              {" "}
              <Typewriter
                words={[
                  (this.darkText =
                    "Experience World-class Agile Product Development"),
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            <LightTextBox
              darkText="Harness digitized business solutions comprising web, 
                        android and iOS app solutions leveraging Blockchain, AI Chatbots, Machine 
                        Learning and IoT technologies for your startup or enterprise.
                        Tech Dynasty is a top notch information technologies 
                        firm that gives unique and absolutely innovative IT 
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

const serviceArray = [
  {
    img: require("../assets/images/blog3.jpg"),
    feature: "Virtual reality",
    text: "this feature is really new have a look and share what you think",
  },

  {
    img: require("../assets/images/blog2.jpg"),
    feature: "Ui Design Best Practices",
    text: "this feature is really new have a look and share what you think",
  },

  {
    img: require("../assets/images/blog1.jpg"),
    feature: "The Big Crash",
    text: "this feature is really new have a look and share what you think",
  },
];

export class ServicesSection extends React.Component {
  render() {
    return (
      <section className="service-section">
        <div className="service-header">
          <DarkTextBox lightText="News and Information" />
          <LightTextBox darkText="Our Blog" />
          <LightTextBox darkText="Check out whats happening in the tech world" />
        </div>
        <div className="service-cards">
          {serviceArray.map(({ img, feature, text }) => (
            <div>
              {<ServicesCard img={img} feature={feature} text={text} />}
            </div>
          ))}
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
          <DarkTextBox lightText="Tools and Software" />
          <LightTextBox darkText="Technologies" />
          <LightTextBox
            darkText="This are the various tools and technologies
          we use to create and deploy our applications"
          />
        </div>
        <div className="partners-list">
          <div className="tools">
            <img src={require("../assets/images/react.png")} alt="" />
            <img src={require("../assets/images/js.png")} alt="" />
            <img src={require("../assets/images/html.png")} alt="" />
            <img src={require("../assets/images/sass.png")} alt="" />
            <img src={require("../assets/images/css.png")} alt="" />
            <img src={require("../assets/images/Wordpress.png")} alt="" />
            <img src={require("../assets/images/git.png")} alt="" />
            <img src={require("../assets/images/git2.png")} alt="" />
            <img src={require("../assets/images/firebase.png")} alt="" />
            <img src={require("../assets/images/xd.png")} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
