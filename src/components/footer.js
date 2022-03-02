import React from "react";
import { NavHola } from "./buttons/buttons";
import { FooterLinks } from "./cards/cards";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/sections.css";

// Actual footer
export class Footer extends React.Component {
  render() {
    return (
      <footer className="container">
        <section className="footer-top row">
          <div className="col-md-4">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Atque
              sequi, modi deleniti ab quae rem?
            </p>
          </div>
          <div className="col-md-4 column2">
            <NavHola name="Subscribe"></NavHola>
          </div>
        </section>
        <section className="footer-middle container">
          <div className="row">
            <FooterLinks
              title="Useful Links"
              href1="./"
              link1="Home"
            />
            <FooterLinks title="Other Links" />
            <FooterLinks />
            <FooterLinks />
          </div>
        </section>
        <section className="footer-bottom col-md-12">
          <div className="copyright">
            <p>
              All Rights Reserved Tech Dynasty
              2022
            </p>
          </div>
          <div className="end-message">
            <p>Happy New Year</p>
          </div>
        </section>
      </footer>
    );
  }
}
