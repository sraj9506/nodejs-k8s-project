const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Kubernetes!');
});

app.get('/newroute', (req, res) => {
    res.send('This is a new route!');
});


app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
