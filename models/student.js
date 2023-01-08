const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
        required: [true, 'Age field is required']
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;