import React from 'react';
import { getAuthorsQuery } from '../GraphQL/queries';
import { useQuery } from '@apollo/react-hooks';
import AddBookForm from './AddBookForm';

const AddBook = () => {
  const { error, data, loading } = useQuery(getAuthorsQuery);

  if (loading) return <p>loading!</p>;
  if (error) return <p>error</p>;
  return <AddBookForm data={data} />;
};

export default AddBook;
