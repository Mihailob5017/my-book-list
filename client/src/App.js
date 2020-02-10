import React from 'react';
//  Bootstrap
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
//  Apollo Setup
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
//  React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//  Components
import Main from './components/MainComponent/MainComponent';
import AddNewComponent from './components/addNew/AddNewComponent';
import BookComponent from './components/SingleBook/BookComponent';
import AuthorComponent from './components/SingeAuthor/AuthorComponent';
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
        <Route path="/add" component={AddNewComponent} />
        <Route path="/book/:id" component={BookComponent} />
        <Route path="/author/:id" component={AuthorComponent} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
