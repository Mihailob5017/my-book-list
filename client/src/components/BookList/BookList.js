import React from 'react';
import BookListItem from './BookLIstItem';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../GraphQL/queries';

// Erorr and Loading Components
import LoadingComponent from '../Loading/LoadingComponent';
import ErrorComponent from '../Erorr/ErorrComponent';

const BookList = () => {
  const { error, loading, data } = useQuery(getBooksQuery);
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <div>
      <ul className="list-group">
        {data.books.map((item, i) => (
          <BookListItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
