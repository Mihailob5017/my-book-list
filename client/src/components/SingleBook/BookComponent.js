import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../GraphQL/queries';
import { Link } from 'react-router-dom';
//  Erorr and Loading Components
import ErrorComponent from '../Erorr/ErorrComponent';
import LoadingComponent from '../Loading/LoadingComponent';

const BookComponent = props => {
  const id = props.match.params.id;
  const { data, error, loading } = useQuery(getBookQuery, {
    variables: { id }
  });
  const getFirstName = name => {
    let firstname = 'More on ' + name.split(' ')[0];
    return firstname;
  };
  const toUppercase = name => {
    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    return newName;
  };
  if (loading) return <LoadingComponent />;
  if (error) return <ErrorComponent error={error} />;
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="display-4">
          <label className="text-primary">Book Name: </label> {data.book.name}
        </div>
        <div className="display-4">
          <label className="text-primary">Book Genre: </label>{' '}
          {toUppercase(data.book.genre)}
        </div>
        <div className="display-4">
          <label className="text-primary">Author: </label>{' '}
          {data.book.author.name}
        </div>
        <div className="display-4">
          <label className="text-primary">Rating: </label>{' '}
          {data.book.rating === null ? '(Not Rated)' : data.book.rating + '/10'}
        </div>
        <div className="display-4 mb-5">
          <label className="text-primary">About: </label>
          <label className="h1 mx-4 px-4 font-weight-light border-bottom">
            {data.book.about.length === 0
              ? '(No Decription Given)'
              : data.book.about}
          </label>
        </div>
        <div className="row my-md-auto m-sm-5">
          <div className="col-xl-7 col-lg-2"></div>
          <Link
            className="btn mt-sm-2  col-xl-2 col-lg-4 btn-lg btn-outline-info mx-2"
            to={`/author/${data.book.authorId}`}
          >
            {getFirstName(data.book.author.name)}
          </Link>
          <Link
            className="btn col-xl-2 mt-sm-2 col-lg-4 btn-lg btn-outline-dark mx-2"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
