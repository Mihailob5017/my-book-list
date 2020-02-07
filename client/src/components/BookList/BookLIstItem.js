import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { deleteBookQuery, getBooksQuery } from '../GraphQL/queries';

const BookLIstItem = props => {
  const [DeleteTheBook] = useMutation(deleteBookQuery);
  const deleteBook = () => {
    const id = props.item.id;
    return DeleteTheBook({
      variables: { id },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };
  return (
    <li className="list-item">
      {props.item.name} <Link to={`/book/${props.item.id}`}>View More</Link>
      <div>
        <button onClick={deleteBook}>Remove Book</button>
      </div>
    </li>
  );
};

export default BookLIstItem;
