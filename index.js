const express = require('express');

const app = express();

app.get('/api', function (req, res) {
    console.log('Getting request.....');
    res.send({
        'name': 'Thusanth'
    });
})

app.listen(4000, function () {
    console.log('Listening to port');
});