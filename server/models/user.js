"use strict";

const mongoose = require('mongoose');

//*******************************************************************

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

//*******************************************************************

module.exports = {
    User: User
};

//*******************************************************************

/**
let user = new User({
    email: 'andrew@example.com '
});

user.save().then((doc) => {
    console.log(JSON.stringify(doc, null, 2));
})
.catch((err) => {
    console.log('Unable to save user: ', err);
});
**/