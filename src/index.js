// Import React and ReactDOM
import React from "react";
import ReactDom from "react-dom";

//  Import Components
import { Navbar } from "./components/navbar";
import { TopBar } from "./components/cards/cards";
import {
  Welcome,
  Featured,
  AboutSection,
  ServicesSection,
  PartnersSection,
} from "./components/sections";
import { Footer } from "./components/footer";

// Import CSS
import "./index.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends React.Component {
  render() {
    return (
      <body className="body">
        <header>
          <TopBar message="What's up my people..."></TopBar>
          <Navbar></Navbar>
        </header>
        <Welcome />
        <Featured />
        <AboutSection />
        <ServicesSection />
        <PartnersSection></PartnersSection>
        <Footer />
      </body>
    );
  }
}

ReactDom.render(<HomePage />, document.getElementById("root"));
