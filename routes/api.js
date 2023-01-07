const express = require('express');
const router = express.Router();

router.get('/getData', function (req, res) {
    res.send({
        type: 'GET'
    });
});

router.post('/postData', function (req, res) {
    res.send({
        type: 'POST',
        response: req.body.name
    });
});

module.exports = router;