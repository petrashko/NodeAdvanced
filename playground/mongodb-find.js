//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useUnifiedTopology: true}, (err, client) => {
    if (err) {
        console.log('Unable to connect to MongoDB server');
        return;
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    /*
    db.collection('Todos').find().toArray().then((docs) => {
    //db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    /*
    db.collection('Todos').find({_id: new ObjectID('5ea26419897e4d10d07447bd')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    db.collection('Todos').find({}).count().then((count) => {
        console.log(`Todos count: ${count}`);
    }).catch((err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, null, 2));
    }).catch((err) => {
        console.log('Unable to fetch users', err);
    });
    
    //client.close();
});