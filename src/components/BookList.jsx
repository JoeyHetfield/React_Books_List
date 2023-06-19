import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookList = () => {
  const { books, addBook, deleteBook } = useContext(BookContext);
  const [formNewBook, setFormNewBook] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const generateUniqueId = () => {
    const lastBook = books[books.length - 1];
    const lastId = lastBook ? parseInt(lastBook.id) : 0;
    return (lastId + 1).toString();
  };

  const handleAddNewBook = (e) => {
    e.preventDefault();

    if (title && author && image) {
      const newBook = { id: generateUniqueId(), title, author, image };
      addBook(newBook);
      setFormNewBook(false);
      setTitle("");
      setAuthor("");
      setImage("");
    }
  };

  const handleDeleteBook = (id) => {
    deleteBook(id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button className="add-book-button" onClick={() => setFormNewBook(true)}>Add new book</button>
      {formNewBook && (
        <form onSubmit={handleAddNewBook}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={() => setFormNewBook(false)}>
            Cancel
          </button>
        </form>
      )}
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book">
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-author">{book.author}</h3>
            <img className="book-cover" src={book.image} alt={book.title} />
            <Link to={`/book/${book.id}`} className="book-details-link">See Details</Link>
            <button onClick={() => handleDeleteBook(book.id)} className="delete-button">Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
