const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const queries = require('./queries')

app.get('/', (req, res) => {
    queries.listAllSnacks().then(snacks => res.send(snacks));
})

app.listen(port, console.log(`Server running on ${port}`));