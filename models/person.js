const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    age: {
        type: String,
        required: [true, 'Age field is required']
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;