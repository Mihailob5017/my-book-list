import React, { useState } from 'react';
import { addAuthorQuery, getAuthorsQuery } from '../GraphQL/queries';
import { useMutation } from '@apollo/react-hooks';
const Author = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [AddAuthor] = useMutation(addAuthorQuery);

  const sumbitData = async e => {
    e.preventDefault();
    if (name === '' || age <= 10) {
      alert('Invalid Author Data');
      return;
    }
    AddAuthor({
      variables: { name, age: parseInt(age) },
      refetchQueries: [{ query: getAuthorsQuery }]
    })
  };
  return (
    <form>
      <div className="input-div">
        <label htmlFor="firstname" className="input-label">
          Author's First Name:
        </label>
        <input
          type="text"
          name="firstname"
          autoComplete="off"
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value);
            setName(`${e.target.value} ${lastName}`);
          }}
        />
      </div>

      <div className="input-div">
        <label htmlFor="lastname" className="input-label">
          Author's Last Name:
        </label>
        <input
          type="text"
          name="lastname"
          autoComplete="off"
          value={lastName}
          onChange={e => {
            setLastName(e.target.value);
            setName(`${firstName} ${e.target.value}`);
          }}
        />
      </div>

      <div className="input-div">
        <label htmlFor="lastname" className="input-label">
          Author's Age:
        </label>
        <input
          type="number"
          name="lastname"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <button type="submit" onClick={sumbitData}>
        Add Author
      </button>
    </form>
  );
};

export default Author;
