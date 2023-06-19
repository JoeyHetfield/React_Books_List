import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: '1', title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", image: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif" },
    { id: '2', title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg" },
    { id: '3', title: "A Game of Thrones", author: "George R.R. Martin", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/AGameOfThrones.jpg/220px-AGameOfThrones.jpg" }
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
