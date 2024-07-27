const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

require('./config/database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const AuthorRoute = require('./route/AuthorRoute');
app.use('/api/authors', AuthorRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

