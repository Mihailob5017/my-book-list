import React from 'react';
//  Components
import BookList from '../BookList/BookList';
import { Link } from 'react-router-dom';
import { getAuthorsQuery } from '../GraphQL/queries';
import { useQuery } from '@apollo/react-hooks';
import ErorrComponent from '../Erorr/ErorrComponent';
import LoadingComponent from '../Loading/LoadingComponent';

const MainComponent = () => {
  const { loading, data, error } = useQuery(getAuthorsQuery);
  if (error) return <ErorrComponent />;
  if (loading) return <LoadingComponent />;
  return (
    <div className="container list-group mt-5">
      <h1 className="list-group-item-success display-4 active text-center text-dark mt-1 mx-4">
        Bookworm's Backlog
      </h1>
      <BookList authors={data.authors} />
      <Link className=" my-5 btn btn-lg btn-outline-success" to="/add">
        Add Book
      </Link>
    </div>
  );
};

export default MainComponent;
