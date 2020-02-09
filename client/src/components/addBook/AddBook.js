import React from 'react';
import { getAuthorsQuery } from '../GraphQL/queries';
import { useQuery } from '@apollo/react-hooks';
import AddBookForm from './AddBookForm';
//  Loading and Error Components
import LoadingComponent from '../Loading/LoadingComponent';
import ErrorComponent from '../Erorr/ErorrComponent';
const AddBook = () => {
  const { error, data, loading } = useQuery(getAuthorsQuery);

  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;
  return <AddBookForm data={data} />;
};

export default AddBook;
