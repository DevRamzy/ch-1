// Import React and ReactDOM
import React from "react";
import ReactDom from "react-dom";

//  Import Components

// Import CSS
import "./assets/css/styles.css";
import "./assets/css/cards.css";
import "./assets/css/sections.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./pages/homepage";

class App extends React.Component {
  render() {
    return (
      <body className="body">
        <HomePage />
      </body>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
