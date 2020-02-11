const {
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean
} = require('graphql');

const Book = require('./mongodb/Book');
const Author = require('./mongodb/Author');
//  Getting the Book
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    authorId: { type: GraphQLString },
    rating: { type: GraphQLString },
    about: { type: GraphQLString },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      }
    }
  })
});

//  Getting the Author
const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    isAlive: { type: GraphQLBoolean },
    favorite: { type: GraphQLBoolean },
    authorGenre: { type: GraphQLString },
    birthYear: { type: GraphQLInt },
    deathYear: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      args: {
        name: { type: GraphQLString }
      },
      resolve(parent, args) {
        return Book.find({ authorId: parent.id });
      }
    }
  })
});

//  Getting the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(BookType),
      args: {
        genre: { type: GraphQLString },
        authorId: { type: GraphQLString }
      },
      resolve(parent, args) {
        if (args.genre !== '' && args.authorId !== '')
          return Book.find({ genre: args.genre, authorId: args.authorId });
        else if (args.genre !== '') return Book.find({ genre: args.genre });
        else if (args.authorId !== '')
          return Book.find({ authorId: args.authorId });
        else return Book.find();
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find();
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Author.findById(args.id);
      }
    }
  }
});

//  Mutations Query
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        birthYear: { type: new GraphQLNonNull(GraphQLID) },
        isAlive: { type: GraphQLBoolean },
        favorite: { type: GraphQLBoolean },
        authorGenre: { type: GraphQLString },
        deathYear: { type: GraphQLID }
      },
      resolve(parent, args) {
        const { name, isAlive, favorite, birthYear } = args;
        let authorGenre = args.authorGenre || 'Undefined';
        let age = parseInt(
          isAlive
            ? new Date().getFullYear() - birthYear
            : args.deathYear - birthYear
        );
        let deathYear = parseInt(
          isAlive ? new Date().getFullYear() : args.deathYear
        );

        let author = new Author({
          name,
          age,
          birthYear,
          isAlive,
          favorite,
          deathYear,
          authorGenre
        });
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
        rating: { type: GraphQLString },
        about: { type: GraphQLString }
      },
      resolve(parent, args) {
        console.log(args);
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
          rating: args.rating || '',
          about: args.about || ''
        });

        return book.save();
      }
    },
    deleteBook: {
      type: BookType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Book.findByIdAndDelete(args.id);
      }
    }
  }
});

//  Exports
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
