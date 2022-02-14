// Import React and ReactDOM
import React from "react";
import ReactDom from "react-dom";

//  Import Components
import { Navbar } from "./components/navbar";
import { Welcome } from "./components/welcome";
import { TopBar } from "./components/cards/cards";
import { Featured, AboutSection } from "./components/sections";

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
      </body>
    );
  }
}

ReactDom.render(<HomePage />, document.getElementById("root"));
