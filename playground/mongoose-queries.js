"use strict";

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

//*******************************************************************

let id = '5eb4f9470f62e41284c75098';
//let id = '1s';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

/*
Todo.find({_id: id}).then((todos) => {
    //if (todos.length === 0) { return console.log('Id not found'); }
    
    //console.log('Todos', todos);
    console.log(JSON.stringify(todos, null, 2));
})
.catch((err) => {
    console.log('Error: ', err);
});
*/
/*
Todo.findOne({_id: id}).then((todo) => {
    //if (!todo) { return console.log('Id not found'); }
    
    //console.log('Todo', todo);
    console.log(JSON.stringify(todo, null, 2));
})
.catch((err) => {
    console.log('Error: ', err);
});
*/

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    //console.log('Todos', todo);
    console.log(JSON.stringify(todo, null, 2));
})
.catch((err) => {
    console.log('Error: ', err);
});