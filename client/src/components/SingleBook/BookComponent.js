import React from 'react';
import {} from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
const BookComponent = props => {
  console.log(props.match.params.id);
  return (
    <div>
      <h1>Hello From This Component</h1>
    </div>
  );
};

export default BookComponent;
