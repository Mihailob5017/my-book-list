import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import AddBookForm from './AddBookForm';
const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const AddBook = () => {
  const { error, data, loading } = useQuery(getAuthorsQuery);

  if (loading) return <p>loading!</p>;
  if (error) return <p>error</p>;
  return <AddBookForm data={data} />;
};



export default AddBook;
