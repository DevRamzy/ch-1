import React from "react";

import { NavHola } from "../buttons/buttons";

import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import "../../assets/css/cards.css";
import "../../assets/css/sections.css";
// Announcements TopBar ontop of the navigation Bar
export class TopBar extends React.Component {
  render() {
    return (
      <p className="topbar">
        {/* {this.props.message} */}
        <Typewriter
          words={[this.props.message]}
          loop={5}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    );
  }
}

// Cards for the welcome section
export class WelcomeNote extends React.Component {
  render() {
    return (
      <div className="welcome-note">
        <p>{this.props.message}</p>
      </div>
    );
  }
}

// Short paragraphs ontop of sections explaining staff Darkbaground one
export class DarkTextBox extends React.Component {
  render() {
    return (
      <div className="dark-text-box">
        <p>{this.props.lightText}</p>
      </div>
    );
  }
}
export class LightTextBox extends React.Component {
  render() {
    return <p className="light-text-box">{this.props.darkText}</p>;
  }
}

// Featured Cards
export const FeaturedCard = (props) => {
  return (
    <div className="featured-card">
      <img src={props.img} alt="" />
      <h6>{props.feature}</h6>
      <p>{props.text}</p>
    </div>
  );
};

// Services cards (Services section)
export const ServicesCard = (props) => {
  return (
    <div className="featured-card">
      <img src={props.img} alt="" />
      <h6>{props.feature}</h6>
      <p>{props.text}</p>
      <NavHola name="More" />
    </div>
  );
};

// Footer Links
const usefulLinks = [
  {
    link: "About",
    href: "/About",
  },
  {
    link: "Services",
    href: "/",
  },
  {
    link: "Pricing",
    href: "/",
  },
];

const otherLinks = [
  {
    link: "Projects",
    href: "/",
  },

  {
    link: "Contact",
    href: "/",
  },
  {
    link: "Blog",
    href: "/",
  },
];
export class FooterLinks extends React.Component {
  render() {
    return (
      <div className="container footerLinks">
        <div className="row">
          <ul className="usefulLinks col-md-2">
            <h5>{this.props.title1}</h5>
            {usefulLinks.map(({ link, href }) => (
              <div>
                {
                  <li>
                    <Link to={href} style={{ textDecoration: "none" }}>
                      <h4>{link}</h4>
                    </Link>
                  </li>
                }
              </div>
            ))}
          </ul>
          <ul className="otherLinks col-md-2">
            <h5>{this.props.title2}</h5>
            {otherLinks.map(({ link, href }) => (
              <div>
                {
                  <li>
                    <Link to={href} style={{ textDecoration: "none" }}>
                      <h4>{link}</h4>
                    </Link>
                  </li>
                }
              </div>
            ))}
          </ul>
          <div className="address col-md-4">
            <h5>How to Reach Us</h5>
            <p>Nairobi, Kenya</p>
            <p>Email: info@techdynasty.net</p>
            <p>Phone: +254 778 531 043</p>
          </div>
        </div>
      </div>
    );
  }
}
