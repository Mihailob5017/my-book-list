import React, { useState } from 'react';
import BookListItem from './BookLIstItem';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../GraphQL/queries';

// Erorr and Loading Components
import LoadingComponent from '../Loading/LoadingComponent';
import ErrorComponent from '../Erorr/ErorrComponent';
const BookList = props => {
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  const { error, loading, data } = useQuery(getBooksQuery, {
    variables: { genre, authorId: author }
  });
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;
  console.log(props.authors);
  return (
    <div>
      <div className="row">
        <div className="input-group-prepend my-3 col-12 col-md-6">
          <span className="input-group-text col-6">Filter By Genre:</span>
          <select
            value={genre}
            onChange={e => setGenre(e.target.value)}
            className="custom-select text-secondary"
          >
            <option value="" className="text-secondary">
              All Genres
            </option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="romantic">Romantic</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
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
        <div className="input-group-prepend my-3 col-12 col-md-6">
          <span className="input-group-text col-6">Filter By Author:</span>
          <select
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="custom-select text-secondary"
          >
            <option value="" className="text-secondary">
              All Authors
            </option>
            {props.authors.map((author, i) => (
              <option key={i} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className="list-group">
        {data.books.map((item, i) => (
          <BookListItem key={i} item={item} genre={genre} author={author} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
