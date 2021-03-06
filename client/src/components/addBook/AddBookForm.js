import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { addBookQuery, getBooksQuery } from '../GraphQL/queries';
const AddBookForm = props => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [rating, setRating] = useState(0);
  const [about, setAbout] = useState('');
  const [AddBook] = useMutation(addBookQuery);
  const submitData = e => {
    e.preventDefault();
    if (name === '' || genre === '' || authorId === '') {
      alert('All Fields need to be entered!');
      return;
    }
    AddBook({
      variables: { name, genre, authorId, rating: rating || '', about },
      refetchQueries: [
        { query: getBooksQuery, variables: { genre: '', authorId: '' } }
      ]
    });
    setName('');
    setGenre('');
    setAuthorId('');
    setRating(0);
    setAbout('');
  };
  return (
    <form className="col-lg-5 my-sm-4 my-md-4 border col-md-12 card bg-light  border-primary p-4">
      <h2 className="card-title font-weight-light text-center  text-primary">
        Add a book you plan to Read
      </h2>
      <div className="card-body">
        <div className="row my-3">
          <div className="input-group col-md-6 col-xl-6 col-lg-12">
            <div className="input-group-prepend  ">
              <span className="input-group-text">Name:</span>
            </div>
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="input-group  mt-sm-3 mt-xl-0 mt-lg-3 col-md-6 col-xl-6 col-lg-12">
            <div className="input-group-prepend ">
              <label htmlFor="author" className="input-group-text">
                Author:
              </label>
            </div>
            <select
              value={authorId}
              onChange={e => setAuthorId(e.target.value)}
              className="custom-select text-secondary"
            >
              <option value="" className="text-secondary">
                Select Author
              </option>
              {props.data.authors.map((author, i) => (
                <option key={i} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-group-prepend col-md-6  col-xl-6 col-lg-12">
            <span className="input-group-text">Genre:</span>
            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="custom-select text-secondary"
            >
              <option value="" className="text-secondary">
                Select Genre
              </option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="romantic">Romantic</option>
              <option value="drama">Drama</option>
              <option value="thriller">Thriller</option>
              <option value="fiction">Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="biography">Biography</option>
              <option value="history">History</option>
              <option value="adventure">Adventure</option>
              <option value="fantasy">Fantasy</option>
              <option value="children">Children</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-group col-md-6  col-xl-6 col-lg-12">
            <div className="input-group-prepend">
              <span className="input-group-text">Rating:</span>
            </div>
            <input
              placeholder="Optional"
              value={rating}
              onChange={e => setRating(e.target.value)}
              type="number"
              min="0"
              max="10"
              className="form-control"
              placeholder="(Optional)"
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="input-group col-12">
            <div className="input-group-prepend">
              <span className="input-group-text">About:</span>
            </div>
            <textarea
              value={about}
              onChange={e => setAbout(e.target.value)}
              className="form-control"
              placeholder="(Optional)"
              maxLength="256"
            ></textarea>
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
