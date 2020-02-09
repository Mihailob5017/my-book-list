import React from 'react';
//  Components
import BookList from '../BookList/BookList';
import { Link } from 'react-router-dom';

//
const MainComponent = () => {
  return (
    <div className="container list-group mt-5">
      <h1 className="list-group-item-success active text-center text-dark mt-1 mx-4">
        Reading List
      </h1>
      <BookList />

      <Link className=" my-5 btn btn-lg btn-outline-success" to="/add">
        Add Book
      </Link>
    </div>
  );
};

export default MainComponent;