import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { addBookQuery, getBooksQuery } from '../GraphQL/queries';
const AddBookForm = props => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [AddBook] = useMutation(addBookQuery);
  const submitData = e => {
    e.preventDefault();
    if (name === '' || genre === '' || authorId === '') {
      alert('All Fields need to be entered!');
      return;
    }
    AddBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }]
    });
    setName('');
    setGenre('');
    setAuthorId('');
  };
  return (
    <form className="col-lg-5 my-sm-4 my-md-4 border col-md-12 card bg-light  border-primary p-4">
      <div className="card-body">
        <div className="row">
          <div className="input-group-prepend  col-md-6 col-xl-6 col-lg-12">
            <span className="input-group-text">Name:</span>
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group-prepend mt-sm-3 mt-lg-3 col-md-6 col-xl-6 col-lg-12">
            <label htmlFor="author" className="input-group-text">
              Author:
            </label>
            <select
              value={authorId}
              onChange={e => setAuthorId(e.target.value)}
              className="custom-select"
            >
              <option value="">Select Author</option>
              {props.data.authors.map((author, i) => (
                <option key={i} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="input-group-prepend col-md-6  col-xl-6 col-lg-12">
            <span className="input-group-text">Genre:</span>
            <input
              autoComplete="off"
              type="text"
              name="genre"
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-block align-bottom btn-outline-primary btn-large"
        onClick={submitData}
      >
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
