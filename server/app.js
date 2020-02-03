const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./graphqlSchema');
const mongoo = require('mongoose');

app.use(cors());
mongoo.connect(
  'mongodb+srv://mixailo146:jsmv4183@rest-wn0js.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log('MongoDb Connected')
);
app.use('/graphql', expressGraphQL({ graphiql: true, schema }));

app.listen(5000, () => {
  console.log('Hello world!');
});
