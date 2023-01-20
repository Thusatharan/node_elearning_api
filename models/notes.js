const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotesSchema = new Schema({
    subjectname: {
        type: String,
        required: [true, 'Subject name field is required']
    },
    question: {
        type: String,
        required: [true, 'Question field is required']
    },
    answer: {
        type: String,
        required: [true, 'Answer field is required']
    }
});

const Notes = mongoose.model('note', NotesSchema);

module.exports = Notes;