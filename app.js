const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('dude it is gucci');
})

app.listen(port, console.log(`Server running on ${port}`));