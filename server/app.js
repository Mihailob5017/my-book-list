const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./graphqlSchema');
const mongoo = require('mongoose');
require('dotenv/config');

const PORT = process.env.PORT || 5000;
const DB = process.env.DB_KEY;
app.use(cors());
mongoo.connect(DB, { useUnifiedTopology: true, useNewUrlParser: true }, () =>
  console.log('MongoDb Connected')
);
app.use('/graphql', expressGraphQL({ graphiql: true, schema }));

app.listen(PORT, () => {
  console.log('Hello world!');
});
