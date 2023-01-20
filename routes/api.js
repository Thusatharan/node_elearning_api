const express = require('express');
const Student = require('../models/student');
const Notes = require('../models/notes');
const router = express.Router();

router.get('/getStudents', function (req, res) {
    Student.find((err, students) => {
        if (!students) {
            res.status(401).send({
                status: 'error',
                message: 'Error Occured'
            });
        } else {
            res.send({
                status: 'success',
                data: students
            });
        }
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

router.post('/addnotes', function (req, res) {

    Notes.create(req.body).then(function (notes) {
        if (!notes) {
            res.status(401).send({
                status: 'error',
                message: 'Error Occured'
            });
        } else {
            res.send({
                status: 'success',
                data: notes
            });
        }

    });

});


router.post('/getNotes', (req, res) => {
    Notes.find({ subjectname: req.body.subject }, (error, notes) => {
        if (error) {
            res.status(401).send({
                status: 'error',
                message: 'Error Occured'
            });
        } else {
            res.send({
                status: 'success',
                data: notes
            });
        }
    });
});

router.post('/addStudent', function (req, res) {

    Student.create(req.body).then(function (student) {
        if (!student) {
            res.status(401).send({
                status: 'error',
                message: 'Error Occured'
            });
        } else {
            res.send({
                status: 'success',
                data: student
            });
        }

    });

});

router.get('/getAllNotes', function (req, res) {
    Notes.find((err, notes) => {
        if (!notes) {
            res.status(401).send({
                status: 'error',
                message: 'Error Occured'
            });
        } else {
            res.send({
                status: 'success',
                data: notes
            });
        }
    });
});

module.exports = router;