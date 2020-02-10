import React from 'react';
import AddBookComponent from '../addBook/AddBook';
import AddAuthorComponent from '../addAuthor/Author';
import { Link } from 'react-router-dom';
const AddNewComponent = () => {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="row d-flex justify-content-between">
          <AddBookComponent />
          <AddAuthorComponent />
        </div>

        <Link
          className="container btn btn-outline-success mt-5 btn-block btn-lg"
          to="/"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AddNewComponent;
