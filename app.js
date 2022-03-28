const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('junghwan lassddt-0ffrrfff1ddd Hello World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
