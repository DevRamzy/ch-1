import React from "react";
import { NavHola, NavLogo } from "./buttons/buttons";
import { FooterLinks } from "./cards/cards";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/sections.css";
import "../assets/css/styles.css";

// Actual footer
export class Footer extends React.Component {
  render() {
    return (
      <footer className="container">
        <section className="footer-top  newsletter">
          <div className="">
            <img src="" alt="" />
            <NavLogo />
            <p>
              We offer innovative solutions that will fit our customer's
              requirements and aim for a long-lasting partnership. Subscribe to
              our NEWSLETTER to get the latest news and offers from our Team.
            </p>
          </div>
          <input type="email" />
          <div className="">
            <NavHola name="Subscribe" className="subscribe" />
          </div>
        </section>

        <section className="footer-middle container">
          <div className="row">
            <FooterLinks title1="Useful Links" title2="Other Links" />
          </div>
        </section>

        <section className="footer-bottom col-md-12">
          <div className="copyright">
            <p>All Rights Reserved Tech Dynasty 2022</p>
          </div>
          <div className="end-message">
            <p>Happy New Year</p>
          </div>
        </section>
      </footer>
    );
  }
}
