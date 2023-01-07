const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.listen(4000, function () {
    console.log('Listening to port');
});