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
      refetchQueries: [
        {
          query: getBooksQuery,
          variables: { genre: props.genre, authorId: props.author }
        }
      ]
    });
  };
  return (
    <div className="list-item row  mx-4 my-2 border-bottom">
      <label className="mx-2 col-6 col-sm-7 mt-3 h3 text-secondary">
        {props.item.name}
      </label>
      <div className="col-12 col-md-4 m-2">
        <Link
          className="btn col-5  col-md-5 btn-outline-success "
          to={`/book/${props.item.id}`}
        >
          View More
        </Link>
        <button
          className="btn right col-5 col-md-5 btn-outline-danger ml-2"
          onClick={deleteBook}
        >
          Remove Book
        </button>
      </div>
    </div>
  );
};

export default BookLIstItem;
