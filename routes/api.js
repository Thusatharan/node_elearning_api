const express = require('express');
const Student = require('../models/student');
const router = express.Router();

router.get('/student', function (req, res) {
    res.send({
        type: 'GET'
    });
});

// router.post('/student', function (req, res) {
//     Student.create(req.body).then(function (student) {
//         res.send(student);
//     });
// });

router.post('/login', function (req, res) {

    var name = req.body.name
    var password = req.body.password


    // Find a user with a matching username
    Student.findOne({ name }, (err, student) => {
        if (err) {
            res.status(500).send({
                status: 'error',
                message: 'Error occurred'
            });

        } else if (!student) {
            res.status(401).send({
                status: 'error',
                message: 'Username or password is incorrect'
            });
        } else {
            // Compare the entered password with the password in the database
            if (password === student.password) {
                res.send({
                    status: 'success',
                    data: student
                });
            } else {
                res.status(401).send({
                    status: 'error',
                    message: 'Username or password is incorrect'
                });
            }
        }
    });

});

module.exports = router;