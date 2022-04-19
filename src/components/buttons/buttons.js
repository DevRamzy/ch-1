import React from "react";

import "../../assets/css/sections.css";
import { Link } from "react-router-dom";

export class NavLink extends React.Component {
  render() {
    return (
      <Link to={this.props.href} style={{ textDecoration: "none" }}>
        <h4 variant="text" className="nav-button">
          {this.props.name}
        </h4>
      </Link>
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
      <button className="nav-hola" href={this.props.href}>
        {this.props.name}
      </button>
    );
  }
}
