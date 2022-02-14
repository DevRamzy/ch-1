import React from "react";

import { DarkTextBox, LightTextBox, FeaturedCard } from "./cards/cards";
import { NavHola } from "./buttons/buttons";

/** Featured section  */

const firstCard = {
  img: "../assets/images/preview.jpg",
  feature: "whats up guys",
  text: "this feature is really new have a look and share what you think",
};
export class Featured extends React.Component {
  render() {
    return (
      <section className="featured-section">
        <DarkTextBox lightText="Whats up" />
        <LightTextBox darkText="Lol this is react" />
        <LightTextBox darkText="this is also a react component" />
        <div className="featured-cards">
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
          <FeaturedCard
            img={firstCard.img}
            feature={firstCard.feature}
            text={firstCard.text}
          />
        </div>
      </section>
    );
  }
}

// About Section

export class AboutSection extends React.Component {
  render() {
    return (
      <section>
        <div>
          <img src="images/preview.jpg" alt="" />
          <img src="images/preview.jpg" alt="" />
        </div>
        <div>
          <DarkTextBox />
          <LightTextBox />
          <LightTextBox />
          <LightTextBox />
          <NavHola name="More..." href="./" />
        </div>
      </section>
    );
  }
}
