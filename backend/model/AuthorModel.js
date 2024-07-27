const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the author\'s name'],
        minlength: [3, 'Name must be at least 3 characters long']
    },
    quote: {
        type: String,
        required: [true, 'Please provide the author\'s quote'],
    }
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;




