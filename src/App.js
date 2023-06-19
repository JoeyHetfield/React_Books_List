import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import BookContextProvider from "./context/BookContext";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <Router basename="/React_Books_List">
        <Header />
        <Routes>
          <Route path="/" element={<BookContextProvider><BookList /></BookContextProvider>} />
          <Route path="/book/:id" element={<BookContextProvider><BookDetails /></BookContextProvider>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
