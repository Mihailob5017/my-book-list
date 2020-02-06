import React from 'react';
import './style.css';
//  Apollo Setup
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
//
//  Components
import BookList from './components/BookList/BookList';
import AddBook from './components/addBook/AddBook';
import Author from './components/addAuthor/Author';
//
//  Apollo Connect
const Client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});
//
//  Main React App
const App = () => {
  return (
    <ApolloProvider client={Client}>
      <div className="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
        <Author/>
      </div>
    </ApolloProvider>
  );
};

export default App;
