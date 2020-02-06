import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { addBookQuery, getBooksQuery } from '../GraphQL/queries';
const AddBookForm = props => {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [AddBook, { data }] = useMutation(addBookQuery);
  const submitData = e => {
    e.preventDefault();
    if (name === '' || genre === '' || authorId === '') {
      alert('All Fields need to be entered!');
      return;
    }
    AddBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooksQuery }]
    })
  };
  return (
    <form>
      <div className="input-field-component">
        <label className="input-label" htmlFor="name">
          Book Name:
        </label>
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="input"
        />
      </div>
      <br />
      <div className="input-field-component">
        <label className="input-label" htmlFor="genre">
          Book Genre:
        </label>
        <input
          autoComplete="off"
          type="text"
          name="genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          className="input"
        />
      </div>
      <br />
      <div className="input-field-component">
        <label htmlFor="author" className="select-label">
          Select Author:
        </label>
        <select
          value={authorId}
          onChange={e => setAuthorId(e.target.value)}
          className="select"
        >
          <option value="">Select Author</option>
          {props.data.authors.map((author, i) => (
            <option key={i} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button type="submit" onClick={submitData}>
       Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
