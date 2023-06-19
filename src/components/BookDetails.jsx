import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useContext(BookContext);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="detail-book">
      <h2 className="detail-title">{book.title}</h2>
      <h3 className="detail-author">{book.author}</h3>
      <img className="detail-image" src={book.image} alt={book.title} />
      <Link className="detail-back" to="/">Back to Book List</Link>
    </div>
  );
};

export default BookDetails;
