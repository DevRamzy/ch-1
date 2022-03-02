import React from "react";

import { NavHola } from "../buttons/buttons";

import "../../assets/css/cards.css";
import "../../assets/css/sections.css";
// Announcements TopBar ontop of the navigation Bar
export class TopBar extends React.Component {
  render() {
    return (
      <p className="topbar">
        {this.props.message}
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
      <div>
        <p className="dark-text-box">
          {this.props.lightText}
        </p>
      </div>
    );
  }
}
export class LightTextBox extends React.Component {
  render() {
    return (
      <p className="light-text-box">
        {this.props.darkText}
      </p>
    );
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
      <NavHola />
    </div>
  );
};

// Footer Links
export class FooterLinks extends React.Component {
  render() {
    return (
      <div className="col-md-2">
        <ul>
          <h5>{this.props.title}</h5>
          <li>
            <a href={this.props.href1}>
              {this.props.link1}
            </a>
          </li>
          <li>
            <a href={this.props.href2}>
              {this.props.link2}
            </a>
          </li>
          <li>
            <a href={this.props.href3}>
              {this.props.link3}
            </a>
          </li>
          <li>
            <a href={this.props.href4}>
              {this.props.link4}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
