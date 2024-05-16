const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookRouter = require('./bookRoutes/booksRouter');
const genreRouter = require('./genresRoute');
const authorRouter = require('./authorRoute');

app.use(bodyParser.json());

app.use('/book', bookRouter);
app.use('/genre', genreRouter);
app.use('/author', authorRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});