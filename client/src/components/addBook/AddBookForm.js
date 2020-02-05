import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const addBookQuery = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
      genre
    }
  }
`;
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
    AddBook({ variables: { name, genre, authorId } });
    console.log(data);
  };
  return (
    <form>
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
      <br />
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
      <br />
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
      <br />
      <button type="submit" onClick={submitData}>
        Submit
      </button>
    </form>
  );
};

export default AddBookForm;
