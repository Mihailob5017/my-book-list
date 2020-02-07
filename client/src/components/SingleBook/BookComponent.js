import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../GraphQL/queries';
import { Link } from 'react-router-dom';
const BookComponent = props => {
  const id = props.match.params.id;
  const { data, error, loading } = useQuery(getBookQuery, {
    variables: { id }
  });

  if (loading) return 'Loading...';
  if (error) return 'Error';
  return (
    <div>
      <div className="book-name">Book Name: {data.book.name}</div>
      <div className="book-genre">Book Genre: {data.book.genre}</div>
      <div className="book-name">
        Author: {data.book.author.name}
        <Link to={`/author/${data.book.authorId}`}>More Books</Link>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default BookComponent;
