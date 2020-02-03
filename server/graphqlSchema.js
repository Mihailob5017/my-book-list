const {
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');
const axios = require('axios').default;
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
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {}
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
    books: { type: new GraphQLList(BookType) }
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
        return axios.get('').then(res => res.data);
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
      resolve(parent, args) {
        return axios.get('').then(res => res.data);
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return axios.get('').then(res => res.data);
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
      resolve(parent, args) {
        return axios.get('').then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
