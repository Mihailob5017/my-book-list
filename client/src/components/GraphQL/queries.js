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
export const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;
