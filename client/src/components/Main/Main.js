import React from 'react';
//  Components
import BookList from '../BookList/BookList';
import AddBook from '../addBook/AddBook';
import Author from '../addAuthor/Author';
//
const Main = () => {
  return (
    <div className="main">
      <h1>Reading List</h1>
      <BookList />
      <AddBook />
      <Author />
    </div>
  );
};

export default Main;
