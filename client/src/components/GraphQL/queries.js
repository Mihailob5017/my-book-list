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
  {
    books {
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