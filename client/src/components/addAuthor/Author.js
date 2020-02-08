import React, { useState } from 'react';
import { addAuthorQuery, getAuthorsQuery } from '../GraphQL/queries';
import { useMutation } from '@apollo/react-hooks';
const Author = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [AddAuthor] = useMutation(addAuthorQuery);

  const sumbitData = e => {
    e.preventDefault();
    if (name === '' || age <= 10) {
      alert('Invalid Author Data');
      return;
    }
    AddAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthorsQuery }]
    });
    setName('');
    setFirstName('');
    setLastName('');
    setAge('');
  };
  return (
    <form className="col-lg-5 border col-md-12 border-primary card  bg-light p-4">
      <h2 class="card-title font-weight-light text-center  text-primary">
        Author not on the list? Add him
      </h2>
      <div className="card-body ">
        <div className="input-group">
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

        <div className="input-group-prepend my-5">
          <span className="input-group-text">Age:</span>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
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
