import React from "react";
import ReactDom from "react-dom";

import "./index.css";
function BookList() {
  return (
    <section className="bookList">
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL254_SR254,254_.jpg"
        alt=""
      />
      <h4>The Real Anthony Fauci</h4>
      <h5>Robert F. Kennedy Jr.</h5>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
