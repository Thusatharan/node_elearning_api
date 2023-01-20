const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    age: {
        type: String,
        required: [true, 'Age field is required']
    },
    grade: {
        type: String,
        required: [true, 'Grade field is required']
    },

});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;