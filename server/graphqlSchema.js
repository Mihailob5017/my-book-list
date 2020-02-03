const {
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const Book = require('./mongodb/Book');
const Author = require('./mongodb/Author');
//
//
//
//
//
//
//
//
//  Getting th Book
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: { type: GraphQLString },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find(author => author.id === parent.authorId);
      }
    }
  })
});
//
//
//
//
//
//
//
//
//
//  Getting the Author
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return books.filter(book => book.authorId === parent.id);
      }
    }
  })
});
//
//
//
//
//
//
//
//
//  Getting the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books.find(book => book.id === args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
      resolve(parent, args) {
        return authors.find(author => author.id === args.id);
      }
    }
  }
});
//
//
//
//
//
//
//
//  Mutations Query
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });

        return book.save();
      }
    }
  }
});
//
//
//
//
//
//
//
//  Exports
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
