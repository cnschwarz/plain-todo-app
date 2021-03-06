const mongoose = require('mongoose');
const types = require('mongoose').Types;
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    dueDate: {type: Date, required: true},
    creationDate: {type: Date, required: true},
    importance: {type: Number, required: true},
    completed: {type: Boolean, default: false},
});

module.exports = mongoose.model('Note', noteSchema);
