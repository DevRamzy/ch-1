// Import React and ReactDOM
import React from "react";

//  Import Components
import { Navbar } from "../components/navbar";
import { TopBar } from "../components/cards/cards";
import {
  Welcome,
  Featured,
  AboutSection,
  ServicesSection,
  PartnersSection,
} from "../components/sections";

// Import CSS
import "../assets/css/styles.css";
import "../assets/css/cards.css";
import "../assets/css/sections.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

<Featured />;

export class HomePage extends React.Component {
  render() {
    return (
      <body className="body">
        <header className="header"></header>
        <Welcome />
        <Featured />
        <AboutSection />
        <ServicesSection />
        <PartnersSection></PartnersSection>
      </body>
    );
  }
}
