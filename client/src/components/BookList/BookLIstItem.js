import React from 'react';
import { Link } from 'react-router-dom';
const BookLIstItem = props => {
  return (
    <li className="list-item">
      {props.item.name} <Link to={`/book/${props.item.id}`}>View More</Link>{' '}
    </li>
  );
};

export default BookLIstItem;
