"use strict";

const mongoose = require('mongoose');

//*******************************************************************

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

//*******************************************************************

module.exports = {
    Todo: Todo
};

//*******************************************************************

/**
let newTodo = new Todo({
    text: 'Something to do'
});

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, null, 2));
})
.catch((err) => {
    console.log('Unable to save todo: ', err);
});
*/

/**
let otherTodo = new Todo ({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, null, 2));
})
.catch((err) => {
    console.log('Unable to save todo: ', err);
});
**/