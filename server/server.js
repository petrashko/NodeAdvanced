"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

//*******************************************************************

const app = express();

app.set('port', process.env.PORT || 3000);

//*******************************************************************

// Парсить входящие данные POST-запроса в JSON-формат
app.use(bodyParser.json());

//*******************************************************************

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        let resTodos = {'todos': todos};
        res.send(resTodos);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

//*******************************************************************

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('ID not valid');
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('Todo not found');
        }
        let resTodo = {'todo': todo};
        res.send(resTodo);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

//*******************************************************************

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

//*******************************************************************

const server = app.listen(app.get('port'), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});

//*******************************************************************


module.exports = {
    app: app
};