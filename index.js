
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js and Express server!');
});

app.get('/about', (req, res) => {
    res.json({
        name: 'P. Sai Yashwanth',
        section: 'GEN AI & 2C'
    });
});

app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(3000, () => {
    console.log('Express server running at http://localhost:3000');
});
