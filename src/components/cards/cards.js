import React from "react";

import "../../assets/css/component-sec.css";
// Cards for the welcome section
export class WelcomeNote extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

// Announcements TopBar ontop of the navigation Bar
export class TopBar extends React.Component {
  render() {
    return (
      <div>
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
        <p className="dark-text-box">{this.props.lightText}</p>;
      </div>
    );
  }
}
export class LightTextBox extends React.Component {
  render() {
    return <p className="light-text-box">{this.props.darkText}</p>;
  }
}

// Featured Services Cards
export const FeaturedCard = (props) => {
  return (
    <div className="featured-card">
      <img src={props.img} alt="" />
      <h6>{props.feature}</h6>
      <p>{props.text}</p>
    </div>
  );
};
