import React from "react";
import ReactDom from "react-dom";

// Import CSS
import "./index.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Book Objects
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL254_SR254,254_.jpg",
    title: "The Real Anthony Fauci",
    author: "Robert F. Kennedy Jr.",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71M4abh-afL._AC_UL254_SR254,254_.jpg",
    title: "The Real Anthony Fauci",
    author: "Robert F. Kennedy Jr.",
  },
];
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book} />;
      })}
      ;
    </section>
  );
}
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <h5>{author}</h5>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
