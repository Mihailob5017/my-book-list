import { gql } from 'apollo-boost';
export const addBookQuery = gql`
  mutation AddBook(
    $name: String!
    $genre: String!
    $authorId: ID!
    $rating: String
    $about: String
  ) {
    addBook(
      name: $name
      genre: $genre
      authorId: $authorId
      rating: $rating
      about: $about
    ) {
      name
      id
      genre
      rating
      about
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
  query GetBooks($genre: String, $authorId: String) {
    books(genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;
export const addAuthorQuery = gql`
  mutation AddAuthor(
    $name: String!
    $birthYear: ID!
    $isAlive: Boolean
    $favorite: Boolean
    $authorGenre: String
    $deathYear: ID
  ) {
    addAuthor(
      name: $name
      birthYear: $birthYear
      isAlive: $isAlive
      favorite: $favorite
      authorGenre: $authorGenre
      deathYear: $deathYear
    ) {
      name
      age
      authorGenre
      favorite
      isAlive
      deathYear
      birthYear
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
