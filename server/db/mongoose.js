"use strict";

const mongoose = require('mongoose');

//*******************************************************************

mongoose.Promise = global.Promise;

// Connect to  DB MongoDB
mongoose.connect('mongodb://localhost:27017/TodoApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//*******************************************************************

module.exports = {
    mongoose: mongoose
};

//*******************************************************************