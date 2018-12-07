const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser());
app.use(cors());

app.get('/', (req, res) => {
    queries.listAllSnacks().then(snacks => res.send(snacks));
})

app.get('/:id', (req, res) => {
    queries.getSnacksById(req.params.id).then(snacks => res.send(snacks));
})

app.post('/', (req, res) => {
    queries.createSnack(req.body).then(snacks => res.send(snacks[0]))
})

app.put('/:id', (req, res) => {
    queries.updateSnack(req.params.id, req.body).then(updatedSnack => res.json(updatedSnack[0]))
})

app.delete('/:id', (req, res) => {
    queries.deleteSnack(req.params.id).then(snacks => res.send({ status: 204, message: "it has been deleted" }))
})




app.listen(port, console.log(`Server running on ${port}`));