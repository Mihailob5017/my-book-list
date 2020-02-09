import React, { useState } from 'react';
import BookListItem from './BookLIstItem';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../GraphQL/queries';

// Erorr and Loading Components
import LoadingComponent from '../Loading/LoadingComponent';
import ErrorComponent from '../Erorr/ErorrComponent';

const BookList = () => {
  const [state, setState] = useState('');
  const { error, loading, data } = useQuery(getBooksQuery, {
    variables: { genre: state }
  });
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <div>
      <div className="input-group-prepend my-3 col-12">
        <span className="input-group-text col-6">Filter By Genre:</span>
        <select
          value={state}
          onChange={e => setState(e.target.value)}
          className="custom-select text-secondary"
        >
          <option value="" className="text-secondary">Select Genre</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="romantic">Romantic</option>
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
      <ul className="list-group">
        {data.books.map((item, i) => (
          <BookListItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
