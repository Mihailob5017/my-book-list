import { gql } from 'apollo-boost';
export const addBookQuery = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
      genre
    }
  }
`;
export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;
export const getBooksQuery = gql`
  query GetBooks($genre:String){
  books (genre:$genre){
      id
      name
    }
  }
`;
export const addAuthorQuery = gql`
  mutation AddAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

export const getBookQuery = gql`
  query GetBook($id: ID!) {
    book(id: $id) {
      name
      genre
      authorId
      author {
        name
        age
      }
    }
  }
`;
export const getAuthorQuery = gql`
  query GetAuthor($id: ID!) {
    author(id: $id) {
      name
      age
      books {
        id
        name
        genre
      }
    }
  }
`;

export const deleteBookQuery = gql`
  mutation DeleteTheBook($id: ID!) {
    deleteBook(id: $id) {
      name
    }
  }
`;
