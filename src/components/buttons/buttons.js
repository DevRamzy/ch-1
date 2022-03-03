import React from "react";

import "../../assets/css/sections.css";

export class NavLink extends React.Component {
  render() {
    return (
      <a
        href="./"
        variant="text"
        className="nav-button">
        <li>{this.props.name}</li>
      </a>
    );
  }
}

export class NavLogo extends React.Component {
  render() {
    return (
      <a href="./" className="nav-logo">
        Tech Dynasty
        {/* <img src="" alt="" /> */}
      </a>
    );
  }
}

export class NavHola extends React.Component {
  render() {
    return (
      <button
        className="nav-hola"
        href={this.props.href}>
        {this.props.name}
      </button>
    );
  }
}
