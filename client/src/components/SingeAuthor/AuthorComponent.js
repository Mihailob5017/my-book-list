import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorQuery } from '../GraphQL/queries';
const AuthorComponent = props => {
  const id = props.match.params.id;
  const { error, loading, data } = useQuery(getAuthorQuery, {
    variables: { id }
  });
  if (error) return 'Error';
  if (loading) return 'Loading';

  console.log(data.author.books);
  return (
    <div className="author__component">
      <div className="author__component-name">
        Author Name {data.author.name}
      </div>
      <div className="author__component-age">Author Age {data.author.age}</div>
      <div className="author__component-books">
        More Books:
        <ul className="author__component-books-list">
          {data.author.books.map((book, i) => {
            return (
              <li key={i} className="author__component-books-item">
                Name:{book.name} Genre:{book.genre}
                <hr />
              </li>
            );
          })}
        </ul>
      </div>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default AuthorComponent;
