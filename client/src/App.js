import React from 'react';
import './style.css';
//  Apollo Setup
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
//  React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//  Components
import Main from './components/Main/Main';
import BookComponent from './components/SingleBook/BookComponent';
//  Apollo Connect
const Client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});
//
//  Main React App
const App = () => {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/book/:id" component={BookComponent} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
