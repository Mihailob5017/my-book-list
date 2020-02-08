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
    <div className="list-item  mx-4 my-2 border-bottom">
      <label className="mx-2 mt-3 h3 text-secondary">{props.item.name}</label>
      <div className="float-right m-2">
        <Link className="btn btn-outline-success " to={`/book/${props.item.id}`}>
          View More
        </Link>
        <button
          className="btn right btn-outline-danger ml-2"
          onClick={deleteBook}
        >
          Remove Book
        </button>
      </div>
    </div>
  );
};

export default BookLIstItem;
