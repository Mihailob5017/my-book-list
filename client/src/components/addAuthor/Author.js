import React, { useState } from 'react';
import { addAuthorQuery, getAuthorsQuery } from '../GraphQL/queries';
import { useMutation } from '@apollo/react-hooks';
const Author = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState(0);
  const [deathYear, setDeahYear] = useState(birthYear);
  const [isAlive, setAlive] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [genre, setGenre] = useState('');
  const [AddAuthor] = useMutation(addAuthorQuery);

  const sumbitData = e => {
    e.preventDefault();
    if (name === '' || birthYear === 0) {
      alert('Invalid Author Data');
      return;
    }
    AddAuthor({
      variables: {
        name,
        birthYear: parseInt(birthYear),
        deathYear,
        isAlive,
        authorGenre: genre,
        favorite
      },
      refetchQueries: [{ query: getAuthorsQuery }]
    });
    setName('');
    setFirstName('');
    setLastName('');
    setBirthYear(0);
    setDeahYear(0);
    setAlive(true);
    setFavorite(false);
    setGenre('');
  };
  return (
    <form className="col-lg-5 border col-md-12 border-primary card  bg-light p-4">
      <h2 className="card-title font-weight-light text-center  text-primary">
        Author not on the list? Add him
      </h2>
      <div className="card-body ">
        <div className="row">
          <div className="input-group col-12">
            <div className="input-group-prepend">
              <span className="input-group-text">Name:</span>
            </div>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              value={firstName}
              placeholder="First Name"
              onChange={e => {
                setFirstName(e.target.value);
                setName(`${e.target.value} ${lastName}`);
              }}
            />
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Last Name"
              value={lastName}
              onChange={e => {
                setLastName(e.target.value);
                setName(`${firstName} ${e.target.value}`);
              }}
            />
          </div>
        </div>
        <div className="row my-3 d-flex justify-content-between">
          <div className="input-group col-md-6 my-xl-0 my-lg-1 col-xl-6 col-lg-12">
            <div className="input-group-prepend ">
              <span className="input-group-text">Birth Year:</span>
              <input
                min="0"
                max="2000"
                type="number"
                className="form-control"
                value={birthYear}
                onChange={e => setBirthYear(e.target.value)}
              />
            </div>
          </div>
          {isAlive ? (
            <div className="custom-control border col-md-6 col-xl-6 col-lg-12 custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                defaultChecked={isAlive}
                onClick={e => setAlive(!e.target.value)}
              />
              <label
                className="custom-control-label h5 font-weight-light"
                htmlFor="customCheck1"
              >
                Author still Alive?
              </label>
            </div>
          ) : (
            <div className="input-group col-md-6 col-xl-6 col-lg-12">
              <div className="input-group-prepend ">
                <span className="input-group-text">Death Year:</span>
                <input
                  min={birthYear}
                  value={deathYear}
                  max={new Date().getFullYear()}
                  type="number"
                  className="form-control"
                  onChange={e => setDeahYear(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        <div className="row my-3">
          <div className="input-group border-bottom col-md-6 col-xl-6 col-lg-12">
            <div className="custom-control  custom-checkbox ">
              <input
                checked={favorite}
                onChange={e => setFavorite(!favorite)}
                type="checkbox"
                className="custom-control-input"
                id="customCheck2"
              />
              <label
                className="custom-control-label font-weight-light h5"
                htmlFor="customCheck2"
              >
                Favorite
              </label>
            </div>
          </div>
          <div className="input-group-prepend col-md-6  col-xl-6 col-lg-12">
            <span className="input-group-text">Author Genre:</span>
            <select
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="custom-select text-secondary"
            >
              <option value="" className="text-secondary">
                Select(Optional)
              </option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="romantic">Romantic</option>
              <option value="drama">Drama</option>
              <option value="thriller">Thriller</option>
              <option value="fiction">Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="biography">Biography</option>
              <option value="history">History</option>
              <option value="adventure">Adventure</option>
              <option value="fantasy">Fantasy</option>
              <option value="children">Children</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-block align-bottom btn-outline-primary btn-large"
        onClick={sumbitData}
      >
        Add Author
      </button>
    </form>
  );
};

export default Author;
