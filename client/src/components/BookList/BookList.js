import React from 'react';
import BookListItem from './BookLIstItem';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;
const BookList = () => {
  const { error, loading, data } = useQuery(getBooksQuery);
  if (loading) return 'Loading...';
  if (error) {
    return 'Error!';
  }
 
  return (
    <div>
      <ul className="book-list">
        {data.books.map((item, i) => (
          <BookListItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
