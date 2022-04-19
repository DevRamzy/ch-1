// Import React and ReactDOM
import React from "react";
import ReactDom from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  Import Components

// Import CSS
import "./assets/css/styles.css";
import "./assets/css/cards.css";
import "./assets/css/sections.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from "./pages/homepage";
import { About } from "./pages/about";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { TopBar } from "./components/cards/cards";

class App extends React.Component {
  render() {
    return (
      <Router>
        <body className="body">
          <TopBar message="New site Look: Cheers!!"></TopBar>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
          <Footer />
        </body>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
