import React from "react";
import ReactDom from "react-dom";
import { Navbar } from "./components/navbar";

// Import CSS
import "./index.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

class HomePage extends React.Component {
  render() {
    return (
      <body>
        <header>
          <Navbar></Navbar>
        </header>
      </body>
    );
  }
}

ReactDom.render(<HomePage />, document.getElementById("root"));
