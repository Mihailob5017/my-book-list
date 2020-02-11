import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorQuery } from '../GraphQL/queries';

//  Loading And Error Components
import LoadingComponent from '../Loading/LoadingComponent';
import ErrorComponent from '../Erorr/ErorrComponent';
const AuthorComponent = props => {
  const id = props.match.params.id;
  const { error, loading, data } = useQuery(getAuthorQuery, {
    variables: { id }
  });
  if (error) return <ErrorComponent error={error} />;
  if (loading) return <LoadingComponent />;
  const getDate = () => {
    const { age, isAlive, birthYear, deathYear } = data.author;
    return `(${birthYear}-${isAlive ? ' ' : deathYear}) ${age}`;
  };
  const capitalFirst = name => {
    let newString = name.charAt(0).toUpperCase() + name.slice(1);
    return newString;
  };
  console.log(data.author);
  getDate(data.author.age);
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <div className="author__component">
          <div className="display-4">
            <label className="text-primary">Author's Name:</label>{' '}
            {data.author.name}
          </div>
          <div className="display-4">
            <label className="text-primary">Author's Age: </label> {getDate()}
          </div>
          <div className="display-4">
            <label className="text-primary">Author Genre: </label>{' '}
            {capitalFirst(data.author.authorGenre)}
          </div>
          {data.author.favorite && (
            <div className="border border-primary rounded  col-2 h2 justify-content-between font-weight-light d-flex">
              <label className="">Favorite</label>
              <i className="mt-1 fas fa-check-square"></i>
            </div>
          )}
          <label className="display-4 text-primary"> More Books:</label>
          <div className="container">
            <ul className="list-group mx-5 border rounded border-primary">
              {data.author.books.map((book, i) => {
                return (
                  <div key={i} className="list-group-item bg-light ">
                    <label className=" mt-2 col-sm-12 col-lg-5">
                      <label className="text-primary h6">Book Name: </label>{' '}
                      {book.name}
                    </label>
                    <label className="mt-2 col-sm-12 col-lg-5">
                      <label className="text-primary h6">Book Genre: </label>{' '}
                      {book.genre}
                    </label>
                    <Link
                      className="btn btn-outline-primary col-sm-12 float-right col-lg-2"
                      to={`/book/${book.id}`}
                    >
                      View Book
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>

          <Link
            className="btn col-xl-2 mt-2 col-lg-12 btn-outline-primary  float-right btn-lg"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorComponent;
